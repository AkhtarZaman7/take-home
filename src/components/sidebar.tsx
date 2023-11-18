'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { SIDEBAR_MENU } from '@/lib/constants';
import { Subtitle } from '@tremor/react';
import { Input } from './ui/input';

export default function Sidebar() {
  return (
    <div className='flex flex-col h-[100vh] w-[300px] p-8'>
      <div className='flex h-[50px] items-center'>
        <Image src='/logo.svg' width={33} height={33} alt={'open ai'} />
        <span className='text-primary pl-4 text-2xl  font-semibold'>Log10</span>
      </div>
      <Input placeholder='Search' className='mt-8 text-white' />
      <div className='mt-20'>
        {SIDEBAR_MENU.map((item, index) => {
          const Icon = item.icon;
          if (item.title === 'divider') {
            return (
              <div key={index} className='flex mt-8 h-[1px] bg-gray-500' />
            );
          }
          return (
            <div
              key={index}
              className='flex py-4 px-2 rounded  items-center hover:bg-green-400 hover:text-white'
              role='button'
            >
              <Icon className='w-4 h-4 text-white' />
              <Subtitle className='text-gray-400 hover:text-white ml-4'>
                {item.title}
              </Subtitle>
            </div>
          );
        })}
        I
      </div>
    </div>
  );
}
