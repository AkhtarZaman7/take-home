import { Button } from '@/components/ui/button';
import React from 'react';
import { Plus } from 'lucide-react';
import ConversationsList from '@/components/conversation-list';
import AddConversation from '@/components/add-conversation';
import DeleteConversations from '@/components/delete-conversations';

export default async function page() {
  return (
    <div className='flex flex-[1] p-4 flex-col justify-between'>
      <div>
        <AddConversation />
        <ConversationsList />
      </div>
      <DeleteConversations />
    </div>
  );
}
