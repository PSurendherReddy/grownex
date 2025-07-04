'use server';

import { marketingAdvisor, MarketingAdvisorInput } from '@/ai/flows/marketing-advisor';

export async function getMarketingAdvice(input: MarketingAdvisorInput) {
    try {
        const result = await marketingAdvisor(input);
        return result;
    } catch (error) {
        console.error("Error in marketing advisor flow:", error);
        throw new Error("Failed to get marketing advice.");
    }
}
