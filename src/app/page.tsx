import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Plus, Trash, Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Conversation from '@/app/log10/@conversations/page';
import Chat from '@/app/log10/@chat/page';

export default function Home() {
  // const {theme, setTheme} = useTheme();
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-1 m-8 rounded-lg bg-[#23252B]'>
        {/* <Chat /> */}
        {/* <Conversation /> */}
      </div>
    </div>
  );
}
