import { EMPTY_CHAT } from '@/lib/constants';
import React from 'react';
import { CardDescription, Card, CardTitle } from './ui/card';

export default function EmptyChat() {
  return (
    <div className='flex p-10 flex-col'>
      {EMPTY_CHAT.map((item, index) => {
        return (
          <Card key={index} className="p-2 mt-2 bg-transparent cursor-pointer">
            <CardTitle className="text-gray-300 mb-2 text-sm">{item.title}</CardTitle>
            <CardDescription className="text-sm">{item.content}</CardDescription>
          </Card>
        );
      })}
    </div>
  );
}
