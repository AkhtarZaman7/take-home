import { IMessage } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import { User2 } from 'lucide-react';
import { Title } from '@tremor/react';
import MessageLoading from './message-loading';
import { Skeleton } from './ui/skeleton';
import { ERole } from '@/lib/constants';

export default function MessageItem({ message }: { message: IMessage }) {
  const isUser = message.role === ERole.user;
  return (
    <div className='flex items-start hover:bg-gray-900 p-4 rounded '>
      {message.status === 'loading' || message.status === 'delivered' ? (
        <MessageLoading message={message} />
      ) : !isUser ? (
        <Image src={'/logo.svg'} width={32} height={32} alt='message' />
      ) : (
        <User2 className='h-8 w-8 text-white' />
      )}
      <div>
        <span
          className={`${
            isUser ? 'text-gray-400' : 'text-green-500'
          } text-sm font-semibold mt-2 ml-4`}
        >
          {message.role === 'user' ? 'You' : 'Assistant'}
        </span>
        <Title className='text-white text-sm mt-2 ml-4'>
          {message.content}
        </Title>
        {message.content == '' && <Skeleton className='w-full h-4 mt-2 ml-4' />}
      </div>
    </div>
  );
}
