import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import chatSchema from './schemas/chat';
import chatResolver from './resolvers/chat';


const apolloServer = new ApolloServer({
  typeDefs: chatSchema,
  resolvers: chatResolver,
});
export default startServerAndCreateNextHandler(apolloServer);
