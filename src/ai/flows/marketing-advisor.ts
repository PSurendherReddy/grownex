'use server';

/**
 * @fileOverview An AI Marketing Advisor flow that suggests optimal marketing channels and strategies based on user input.
 *
 * - marketingAdvisor - A function that processes business details and marketing goals to provide tailored marketing advice.
 * - MarketingAdvisorInput - The input type for the marketingAdvisor function.
 * - MarketingAdvisorOutput - The return type for the marketingAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketingAdvisorInputSchema = z.object({
  businessDetails: z
    .string()
    .describe('Detailed information about the business, including its industry, size, and target audience.'),
  marketingGoals: z
    .string()
    .describe('Specific marketing goals, such as increasing brand awareness, generating leads, or driving sales.'),
});
export type MarketingAdvisorInput = z.infer<typeof MarketingAdvisorInputSchema>;

const MarketingAdvisorOutputSchema = z.object({
  suggestedChannels: z
    .string()
    .describe('A list of suggested marketing channels, such as SEO, social media, email marketing, or paid advertising.'),
  suggestedStrategies: z
    .string()
    .describe('A detailed explanation of marketing strategies tailored to the business, including content ideas, campaign approaches, and budget allocation.'),
});
export type MarketingAdvisorOutput = z.infer<typeof MarketingAdvisorOutputSchema>;

export async function marketingAdvisor(input: MarketingAdvisorInput): Promise<MarketingAdvisorOutput> {
  return marketingAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketingAdvisorPrompt',
  input: {schema: MarketingAdvisorInputSchema},
  output: {schema: MarketingAdvisorOutputSchema},
  prompt: `You are a marketing expert. Analyze the provided business details and marketing goals to suggest the optimal marketing channels and strategies.

Business Details: {{{businessDetails}}}
Marketing Goals: {{{marketingGoals}}}

Based on this information, suggest the most effective marketing channels and strategies to achieve the stated goals. Be specific and actionable.`,
});

const marketingAdvisorFlow = ai.defineFlow(
  {
    name: 'marketingAdvisorFlow',
    inputSchema: MarketingAdvisorInputSchema,
    outputSchema: MarketingAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
