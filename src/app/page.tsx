import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Home() {
  // const {theme, setTheme} = useTheme();
  return (
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-1 m-8 rounded-lg bg-[#23252B]'></div>
      </div>
  );
}
