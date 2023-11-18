import {
  HelpCircleIcon,
  Trash,
  Grid2X2,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import { IConversation, IEmptyChat, IMessage, TSidebarMenu } from './types';

enum ERole {
  user = 'user',
  assistant = 'assistant',
  system = 'system',
}
enum EStatus {
  completed = 'completed',
  loading = 'loading',
  delivered = 'delivered',
}

const SIDEBAR_MENU: TSidebarMenu = [
  {
    id: 1,
    title: 'Guide & FAQ',
    icon: HelpCircleIcon,
  },
  {
    id: 2,
    title: 'Clear Conversations',
    icon: Trash,
  },
  {
    id: 3,
    title: 'divider',
    icon: HelpCircleIcon,
  },
  {
    id: 4,
    title: 'Upgrade',
    icon: Grid2X2,
  },
  {
    id: 5,
    title: 'Notifications',
    icon: Bell,
  },
  {
    id: 6,
    title: 'Setting',
    icon: Settings,
  },
  {
    id: 7,
    title: 'divider',
    icon: HelpCircleIcon,
  },
  {
    id: 8,
    title: 'Logout',
    icon: LogOut,
  },
];

const MESSAGES: IMessage[] = [
  {
    id: 1,
    role: ERole.user,
    content: 'Hello',
    status: EStatus.completed,
  },
  {
    id: 2,
    role: ERole.assistant,
    content: 'Hi, how can I help you?',
    status: EStatus.completed,
  },
  {
    id: 3,
    role: ERole.user,
    content: 'I want to book a flight',
    status: EStatus.completed,
  },
  {
    id: 4,
    role: ERole.assistant,
    content: 'Sure, where would you like to go?',
    status: EStatus.completed,
  },
];

const EMPTY_CHAT: IEmptyChat[] = [
  {
    id: 1,
    title: 'Personalization',
    content:
      'Al can analyze user data and behavior to create personalized experiences for individual users. This can help designers create interfaces that adapt to each user’s preferences, making the interface   more intuitive and user-friendly.',
  },
  {
    id: 2,
    title: 'Conversational',
    content:
      'Al can analyze user data and behavior to create personalized experiences for individual users. This can help designers create interfaces that adapt to each user’s preferences, making the interface   more intuitive and user-friendly.',
  },
  {
    id: 3,
    title: 'Predictive Analytics',
    content:
      'Al can analyze user data and behavior to create personalized experiences for individual users. This can help designers create interfaces that adapt to each user’s preferences, making the interface   more intuitive and user-friendly.',
  },
];

const CONVERSATIONS: IConversation[] = [
  {
    id: 1,
    messages: MESSAGES,
  },
];

export { SIDEBAR_MENU, MESSAGES, CONVERSATIONS, EMPTY_CHAT, ERole, EStatus };
