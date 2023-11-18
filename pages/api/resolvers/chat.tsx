import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

const chatResolver = {
    Query: {
      hello: () => 'world',
    },
    Mutation: {
      sendMessage: async (
        _: any,
        {
          messages,
        }: {
          messages: Array<{
            role: 'user' | 'system' | 'assistant';
            content: String;
          }>;
        }
      ) => {
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: messages.map((message) => ({
            role: message.role,
            content: message.content.toString(),
          })),
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
  
        const responseMessages = response.choices.map((choice) => ({
          role: choice.message.role,
          content: choice.message.content,
        }));
  
        return responseMessages;
      },
    },
  };

export default chatResolver;