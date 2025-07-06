'use server';
/**
 * @fileOverview A chatbot flow for the Grownex agency assistant.
 *
 * - askChatbot - The main function that handles a user's query.
 * - ChatMessage - The type for a single chat message.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { Message } from 'genkit/model';

// Define the schema for a single chat message
const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;


const LeadDetailsSchema = z.object({
    name: z.string().describe("The user's full name."),
    phone: z.string().describe("The user's phone number."),
    email: z.string().optional().describe("The user's email address."),
    query: z.string().describe("A summary of the user's inquiry based on the conversation."),
});

const captureLeadDetails = ai.defineTool(
    {
      name: 'captureLeadDetails',
      description: 'Use this tool to capture the user\'s contact information when they express interest in Grownex\'s services and are ready to be contacted by the sales team.',
      inputSchema: LeadDetailsSchema,
      outputSchema: z.object({
          success: z.boolean(),
          message: z.string(),
      }),
    },
    async (input) => {
      // In a real application, you would save these details to a CRM or database.
      console.log('Lead captured:', input);
      return {
        success: true,
        message: `Thanks, ${input.name}! Someone from our team will contact you shortly at ${input.phone} regarding your interest in "${input.query}".`,
      };
    }
);


/**
 * The main server action that clients call.
 * It takes the conversation history and returns the AI's response.
 * @param messages The history of the conversation.
 * @returns The AI's response as a string.
 */
export async function askChatbot(messages: ChatMessage[]): Promise<string> {
  // The Gemini API requires the conversation to start with a 'user' role.
  // We clone the array and filter out any leading 'model' messages that are just for UI purposes.
  const history: Message[] = [...messages];
  while (history.length > 0 && history[0].role === 'model') {
    history.shift();
  }

  const systemPrompt = `You are a friendly and helpful AI assistant for Grownex, a design and marketing agency, powered by Google's Gemini model.
Your primary goal is to answer user questions about the agency and its services.
Your secondary goal is to identify potential customers and encourage them to provide their contact details for a follow-up.

When a user shows clear interest in starting a project or getting a quote, proactively guide the conversation towards capturing their details. Use the 'captureLeadDetails' tool to collect their name, phone number, email (if provided), and a brief summary of their needs. Don't be pushy, but be clear that providing details is the next step to getting started. Once you have the details, call the tool.

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
Do not make up information about pricing or specific project timelines unless the user provides them in the context of a hypothetical question.`;

  while (true) {
    const response = await ai.generate({
      prompt: {
        system: systemPrompt,
        messages: history,
      },
      model: 'googleai/gemini-2.0-flash',
      tools: [captureLeadDetails],
    });

    history.push(response.message);

    if (response.toolRequests.length === 0) {
      return response.text;
    }

    const toolResponses = [];
    for (const toolRequest of response.toolRequests) {
      let toolResult;
      if (toolRequest.name === 'captureLeadDetails') {
        toolResult = await captureLeadDetails(toolRequest.input);
      } else {
        // Gracefully handle unknown tools to prevent crashes
        toolResult = {
          success: false,
          message: `I'm sorry, I cannot perform the action '${toolRequest.name}'. I can only answer questions and capture contact details.`,
        };
      }
      
      toolResponses.push({
        toolResponse: {
          id: toolRequest.id,
          name: toolRequest.name,
          response: toolResult,
        },
      });
    }

    history.push({ role: 'tool', content: toolResponses });
    // The loop continues to the next iteration to get the final text response from the model.
  }
}
