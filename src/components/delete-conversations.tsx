'use client';
import React from 'react';
import { Button } from './ui/button';
import { useMessages } from '@/hooks/useMessages';

export default function DeleteConversations() {
  const { removeAllConversations } = useMessages();
  return (
    <Button
      className='w-full'
      variant={'destructive'}
      onClick={removeAllConversations}
    >
      Clear All
    </Button>
  );
}
