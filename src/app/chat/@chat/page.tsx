'use client';
import React from 'react';
import PromptInput from '@/components/prompt-input';
import MessagesList from '@/components/messages-list';
import { MESSAGES } from '@/lib/constants';
import { useMessages } from '@/hooks/useMessages';
import EmptyChat from '@/components/empty-chat';

export default function page() {
  const { messages } = useMessages();
  return (
    <div className='flex flex-col flex-[3] border-r  border-r-gray-500 justify-between'>
      {messages?.length === 0 ? (
        <EmptyChat />
      ) : (
        <MessagesList messages={messages} />
      )}

      <PromptInput />
    </div>
  );
}
