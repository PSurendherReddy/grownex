'use server';
/**
 * @fileOverview A chatbot flow for the Grownex agency assistant.
 *
 * - askChatbot - The main function that handles a user's query.
 * - ChatMessage - The type for a single chat message.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the schema for a single chat message
const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

// Define the input schema for the chatbot flow
const ChatbotInputSchema = z.object({
  messages: z.array(ChatMessageSchema),
});

// Define the output schema for the chatbot flow
const ChatbotOutputSchema = z.string();

/**
 * The main server action that clients call.
 * It takes the conversation history and returns the AI's response.
 * @param messages The history of the conversation.
 * @returns The AI's response as a string.
 */
export async function askChatbot(messages: ChatMessage[]): Promise<string> {
  const result = await chatbotFlow({ messages });
  return result;
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async ({ messages }) => {
    // Construct the full prompt including the system message
    const response = await ai.generate({
      prompt: {
        // The system prompt provides context and instructions to the AI
        system: `You are a friendly and helpful AI assistant for Grownex, a design and marketing agency.
Your goal is to answer user questions about the agency, its services, and provide helpful advice.
Use the provided conversation history to maintain context. Be concise and helpful.

Grownex offers a focused suite of services in these categories:
- Graphic Design & Branding (Logo Design, Brand Strategy, Brand Guidelines)
- Digital Marketing (SEO, Lead Generation, PPC, Email, Social Media)
- Offline Advertising (Hoardings, Mall Ads, Campus Ads)
- Photo & Video (Product and Event Shoots)
- Public Relations (Political, Business, Entrepreneur Features)
- Business Consulting (SOP Creation, Market Research)
- Influencer Marketing (Sourcing and Campaign Management)
- Website Development (WordPress, Shopify, Webflow, Custom)

When asked about services, briefly mention the relevant category and a few examples.
Keep your answers helpful and not too long. If you don't know an answer, say that you are an AI assistant and don't have that information.
Do not make up information about pricing or specific project timelines unless the user provides them in the context of a hypothetical question.
You can ask clarifying questions to better understand the user's needs.`,
        // The messages from the user and the model
        messages: messages,
      },
      model: 'googleai/gemini-2.0-flash',
    });

    return response.text;
  }
);
