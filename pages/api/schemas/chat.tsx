import { gql } from 'graphql-tag';

const chatSchema = gql`
  type Query {
    hello: String
  }
  enum Role {
    user
    system
    assistant
  }
  input MessageInput {
    role: Role!
    content: String!
  }
  type Message {
    role: Role
    content: String
  }
  type Mutation {
    sendMessage(messages: [MessageInput]): [Message]
  }
`;

export default chatSchema;