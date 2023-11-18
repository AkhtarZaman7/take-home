import { IMessagesList } from '@/lib/types';
import React from 'react';
import MessageItem from "./message-item";

export default function MessagesList({
  messages,
}: {
  messages: IMessagesList;
}) {
  return (
    <div className="flex flex-col p-4 overflow-y-scroll">
      {messages?.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
