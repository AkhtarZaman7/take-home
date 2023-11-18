import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default async function loading() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <div className='flex flex-[1] p-4 flex-col justify-between'>
      <div>
        <Skeleton className='w-full h-10' />
        {Array.from({ length: 5 }).map((_, i) => {
          return <Skeleton className='w-full h-10 mt-4' key={i} />;
        })}
      </div>
      <Skeleton className='w-full h-10' />
    </div>
  );
}
