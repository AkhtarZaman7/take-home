import React from 'react';
import { useLottie } from 'lottie-react';
import loadingAnimation from '../lib/animations/loading-animation.json';
import success from '../lib/animations/success.json';
import { IMessage } from '@/lib/types';
import { useMessages } from '@/hooks/useMessages';

export default function MessageLoading({ message }: { message: IMessage }) {
  const { updateMessageStatus } = useMessages();
  const options = {
    animationData: message.status === 'loading' ? loadingAnimation : success,
    loop: true,
  };

  if (message.status === 'delivered') {
    setTimeout(() => {
      updateMessageStatus(message.id, 'completed');
    }, 1200);
  }

  const { View } = useLottie(options);
  return <div className='h-8 w-8'>{View}</div>;
}
