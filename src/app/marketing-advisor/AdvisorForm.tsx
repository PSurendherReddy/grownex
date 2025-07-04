'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMarketingAdvice } from './actions';
import { MarketingAdvisorOutput } from '@/ai/flows/marketing-advisor';
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
  businessDetails: z.string().min(50, 'Please provide more details about your business.'),
  marketingGoals: z.string().min(20, 'Please describe your marketing goals in more detail.'),
});

export function AdvisorForm() {
  const [result, setResult] = useState<MarketingAdvisorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessDetails: '',
      marketingGoals: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const advice = await getMarketingAdvice(values);
      setResult(advice);
    } catch (error) {
       toast({
        title: "An error occurred.",
        description: "Failed to get marketing advice. Please try again.",
        variant: "destructive",
      })
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-center">Let's build your marketing plan</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="businessDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business, including its industry, size, and target audience..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The more detail, the better the recommendations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketingGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marketing Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What are you trying to achieve? (e.g., increase brand awareness, generate leads, drive sales)"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    Be as specific as possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Advice...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get My Free Advice
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
        
        {result && (
            <div className="mt-12 border-t pt-8">
                <h3 className="text-2xl font-bold font-headline text-center mb-6">Your Tailored Marketing Plan</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Lightbulb className="h-6 w-6 text-primary" />
                            <CardTitle>Suggested Channels</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{result.suggestedChannels}</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Sparkles className="h-6 w-6 text-primary" />
                            <CardTitle>Suggested Strategies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{result.suggestedStrategies}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
