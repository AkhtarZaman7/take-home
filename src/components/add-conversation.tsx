'use client';
import React from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useMessages } from '@/hooks/useMessages';

export default function AddConversation() {
  const { conversations, addNewConversation, messages, clearAllMessages } =
    useMessages();

  const onAddConversation = () => {
    const id = conversations.length + 1;
    addNewConversation({ id, messages });
    clearAllMessages();
  };
  return (
    <Button className='w-full' onClick={onAddConversation}>
      <Plus className='w-4 h-4 mr-2' />
      start a new chat
    </Button>
  );
}
