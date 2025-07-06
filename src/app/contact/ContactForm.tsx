'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from './actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="group">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? 'Sending...' : 'Send Message'}
      {!pending && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Button>
  );
}

export function ContactForm() {
    const initialState: ContactFormState = { message: '', errors: {}, success: false };
    const [state, dispatch] = useFormState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const { toast } = useToast();

    useEffect(() => {
      // Only show toast if there's a message from the server action
      if (state.message) {
        if (state.success) {
          toast({
            title: "Success!",
            description: state.message,
          });
          formRef.current?.reset();
        } else {
          toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
          });
        }
      }
    }, [state, toast]);

    return (
     <form ref={formRef} action={dispatch} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
                {state.errors?.name && <p className="text-sm font-medium text-destructive pt-1">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                {state.errors?.email && <p className="text-sm font-medium text-destructive pt-1">{state.errors.email[0]}</p>}
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="e.g., Branding Inquiry" required />
            {state.errors?.subject && <p className="text-sm font-medium text-destructive pt-1">{state.errors.subject[0]}</p>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={6} required />
            {state.errors?.message && <p className="text-sm font-medium text-destructive pt-1">{state.errors.message[0]}</p>}
        </div>
        <SubmitButton />
    </form>
  );
}
