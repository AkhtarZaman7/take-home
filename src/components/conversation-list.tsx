'use client';
import { useMessages } from '@/hooks/useMessages';
import React from 'react';
import ConversationItem from './conversation-item';

export default function ConversationsList() {
  const { conversations, deleteConversation} = useMessages();
  return (
    <div>
      {conversations.map((conversation) => (
        <ConversationItem key={conversation.id} conversation={conversation} deleteConversation={deleteConversation}/>
      ))}
    </div>
  );
}
