'use client';
import Sidebar from '@/components/sidebar';
import { MessageProvider } from '@/hooks/useMessages';
import React from 'react';

export default function layout({
  children,
  chat,
  conversations,
}: {
  children: any;
  chat: any;
  conversations: any;
}) {
  return (
    <MessageProvider>
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-1 m-8 rounded-lg bg-[#23252B]'>
          {chat}
          {conversations}
        </div>
      </div>
    </MessageProvider>
  );
}
