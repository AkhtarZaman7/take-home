import React from 'react';
import { useLottie } from 'lottie-react';
import loadingAnimation from '../lib/animations/loading-animation.json';
import success from '../lib/animations/success.json';
import { IMessage } from '@/lib/types';
import { useMessages } from '@/hooks/useMessages';
import { EStatus } from "@/lib/constants";

export default function MessageLoading({ message }: { message: IMessage }) {
  const { updateMessageStatus } = useMessages();
  const options = {
    animationData: message.status === EStatus.loading ? loadingAnimation : success,
    loop: true,
  };

  if (message.status === EStatus.delivered) {
    setTimeout(() => {
      updateMessageStatus(message.id, EStatus.completed);
    }, 1200);
  }

  const { View } = useLottie(options);
  return <div className='h-8 w-8'>{View}</div>;
}
