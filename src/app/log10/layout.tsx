'use client';
import Sidebar from '@/components/sidebar';
import { MessageProvider } from '@/hooks/useMessages';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: '/api/graphql', 
  cache: new InMemoryCache(),
});
export default function layout({
  children,
  chat,
  conversations,
}: {
  children: any;
  chat: any;
  conversations: any;
}) {
  return (
    <ApolloProvider client={client}>
      <MessageProvider>
        <div className='flex max-h-[100vh]'>
          <Sidebar />
          <div className='flex flex-1 m-8 rounded-lg bg-[#23252B]'>
            {chat}
            {conversations}
          </div>
        </div>
      </MessageProvider>
    </ApolloProvider>
  );
}
