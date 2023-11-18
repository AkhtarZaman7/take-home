import { CONVERSATIONS, ERole, EStatus, MESSAGES } from '@/lib/constants';
import { IConversation, IMessage, IMessageContext } from '@/lib/types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
// Create a context to store messages and conversations
const SEND_MUTATION = gql`
  mutation sendMessage($messages: [MessageInput]) {
    sendMessage(messages: $messages) {
      role
      content
    }
  }
`;

const defaultContext: IMessageContext = {
  messages: [],
  conversations: [],
  addNewConversation: (conversation) => {},
  deleteConversation: (conversationId) => {},
  clearAllConversations: () => {},
  addNewMessage: (message) => {},
  deleteMessage: (messageId) => {},
  clearAllMessages: () => {},
  updateMessageStatus: (messageId, status) => {},
  removeAllConversations: () => {},
};

const MessageContext = createContext<IMessageContext>(defaultContext);
// Custom hook to access the context
export function useMessages() {
  const messageContext = useContext(MessageContext);
  if (!messageContext) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return messageContext;
}

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [
    sendNewMessage,
    { data: messageResponse, loading: messageLoading, error: messageError },
  ] = useMutation(SEND_MUTATION);

  const [messages, setMessages] = useState<IMessage[]>([
    ...MESSAGES,
  ] as IMessage[]);
  const [conversations, setConversations] = useState<IConversation[]>(
    CONVERSATIONS as IConversation[]
  );

  const addNewConversation = (conversation: IConversation) => {
    setConversations((prevConversations) => [
      ...prevConversations,
      conversation,
    ]);
  };
  const deleteConversation = (conversationId: number) => {
    setConversations((prevConversations) =>
      prevConversations.filter(
        (conversation) => conversation.id !== conversationId
      )
    );
  };
  const clearAllConversations = () => {
    setConversations([]);
  };

  const addNewMessage = (message: IMessage) => {
    const previousMessages = messages.map((item) => {
      return {
        content: item.content,
        role: item.role,
      };
    });
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: message.id + 1,
        content: '',
        status: EStatus.loading,
        role: ERole.assistant,
      },
    ]);

    sendNewMessage({
      variables: {
        messages: [
          ...previousMessages,
          {
            role: ERole.user,
            content: message.content,
          },
        ],
      },
    });
  };

  const deleteMessage = (messageId: number) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  const clearAllMessages = () => {
    setMessages([]);
  };

  const updateMessageStatus = (
    messageId: number,
    status: EStatus.completed | EStatus.delivered | EStatus.loading
  ) => {
    setMessages((prevMessages) => {
      return prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, status };
        }
        return message;
      });
    });
  };
  const updateMessageContent = (messageId: number, content: string) => {
    setMessages((prevMessages) => {
      return prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, content, status: EStatus.delivered };
        }
        return message;
      });
    });
  };

  const removeAllConversations = () => {
    setConversations([]);
  };

  useEffect(() => {
    if (messageResponse) {
      const assistantMessage = messageResponse.sendMessage[0].content;
      const lastMessage = messages[messages.length - 1];
      updateMessageContent(lastMessage.id, assistantMessage);
    }
  }, [messageResponse]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        conversations,
        addNewConversation,
        deleteConversation,
        clearAllConversations,
        addNewMessage,
        deleteMessage,
        clearAllMessages,
        updateMessageStatus,
        removeAllConversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
