import { IConversation } from '@/lib/types';
import React from 'react';
import { Trash } from 'lucide-react';
import { Title } from '@tremor/react';

type Props = {
  conversation: IConversation;
  deleteConversation: (conversationId: number) => void;
};
export default function ConversationItem({
  conversation,
  deleteConversation,
}: Props) {
  const { id, messages } = conversation;
  const firstMessage = messages[0];
  return (
    <div className='flex p-4 border-b'>
      <Title className='flex-1 text-gray-300 cursor-pointer'>
        {firstMessage.content}
      </Title>
      <Trash
        className='w-4 h-4 mr-2 text-red-500'
        onClick={() => {
          deleteConversation(id);
        }}
      />
    </div>
  );
}
