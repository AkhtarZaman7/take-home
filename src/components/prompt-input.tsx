import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash, Mic, CornerDownLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useMessages } from '@/hooks/useMessages';
import { IMessage } from '@/lib/types';
import { ERole, EStatus } from "@/lib/constants";

export default function PromptInput() {
  const { clearAllMessages, addNewMessage, messages } = useMessages();
  const [value, setValue] = React.useState('');
  const lastMessage = messages[messages.length - 1];
  const isLoading = lastMessage?.status === EStatus.loading;

  const createNewMessage = () => {
    if (!value || isLoading) return;
    const newMessage: IMessage = {
      id: lastMessage ? lastMessage.id + 1 : 1,
      content: value,
      status: EStatus.completed,
      role: ERole.user,
    };
    addNewMessage(newMessage);
    setValue('');
  };
  return (
    <div className='pt-10 border-t border-t-gray-400 p-4'>
      <div className='mb-4'>
        <Button
          className='text-gray-400 hover:bg-red-500 hover:text-white h-7 py-1 px-2'
          variant={'outline'}
          onClick={clearAllMessages}
        >
          <Trash className='w-4 h-4 mr-2 text-red-500 hover:text-white' />
          Delete last generations
        </Button>
        <Button
          className='text-gray-400 hover:bg-green-700 hover:text-white ml-4 h-7 py-1 px-2'
          variant={'outline'}
          // size={'xs'}
        >
          <Mic className='w-4 h-4 mr-2 text-white' />
          Speak
        </Button>
      </div>
      <div className='flex items-center'>
        <Input
          placeholder='Enter your Prompt'
          className='text-white'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              createNewMessage();
            }
          }}
        />
        <CornerDownLeft
          className={`w-9 h-9 mr-2 text-red ${
            isLoading ? 'bg-gray-400' : 'bg-gray-300'
          } rounded ml-4 px-2 `}
          onClick={createNewMessage}
        />
      </div>
    </div>
  );
}
