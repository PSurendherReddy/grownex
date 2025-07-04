'use client';

import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Bot } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function FloatingActionButtons() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white">
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <MessageSquare className="h-7 w-7" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
             <Button size="icon" className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground" aria-label="Open Chatbot">
                <Bot className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Talk to AI Assistant</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="rounded-full w-14 h-14">
              <Link href="tel:+1234567890" aria-label="Call us">
                <Phone className="h-7 w-7" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call Us</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
