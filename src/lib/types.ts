type TSidebarItem = {
  id: number;
  title: string;
  icon: any;
};

type IMessage = {
  id: number;
  role: 'user' | 'assistant' | 'system';
  content: string;
  status: 'loading' | 'delivered' | 'completed';
};
type IConversation = {
  id: number;
  messages: IMessage[];
};
interface IMessageContext {
  messages: IMessage[];
  conversations: IConversation[];
  addNewConversation: (conversation: IConversation) => void;
  deleteConversation: (conversationId: number) => void;
  clearAllConversations: () => void;
  addNewMessage: (message: IMessage) => void;
  deleteMessage: (messageId: number) => void;
  clearAllMessages: () => void;
  updateMessageStatus: (messageId: number, status: IMessage['status']) => void;
  removeAllConversations: () => void;
}

type IEmptyChat = {
  id: number;
  title: string;
  content: string;
};

type IMessagesList = IMessage[];
export type TSidebarMenu = TSidebarItem[];
export type {
  IMessage,
  TSidebarItem,
  IMessagesList,
  IConversation,
  IMessageContext,
  IEmptyChat,
};
