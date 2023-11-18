import { CONVERSATIONS, MESSAGES } from '@/lib/constants';
import { IConversation, IMessage, IMessageContext } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

// Create a context to store messages and conversations

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
  removeAllConversations: () => {}
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
  const [messages, setMessages] = useState<IMessage[]>([]);
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
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: message.id + 1,
        content: '',
        status: 'loading',
        role: 'assistant',
      },
    ]);
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
    status: 'loading' | 'delivered' | 'completed'
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

  const removeAllConversations = () => {
    setConversations([]);
  };
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
        removeAllConversations
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
