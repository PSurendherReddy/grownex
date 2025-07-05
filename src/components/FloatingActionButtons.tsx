'use client';

import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Chatbot } from './Chatbot';


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.448 0 .002 5.446.002 12.052c0 2.136.56 4.16 1.574 5.942L0 24l6.235-1.648a11.86 11.86 0 005.813 1.611h.005c6.603 0 11.95-5.345 11.95-11.952a11.854 11.854 0 00-3.515-8.413z"/>
  </svg>
)

export function FloatingActionButtons() {
  return (
    <Sheet>
      <TooltipProvider>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild size="icon" className="rounded-full w-14 h-14">
                <Link href="https://wa.me/916281981832" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  <WhatsAppIcon className="h-7 w-7" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Chat on WhatsApp</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
               <SheetTrigger asChild>
                <Button size="icon" className="rounded-full w-14 h-14" aria-label="Open Chatbot">
                    <Sparkles className="h-7 w-7" />
                </Button>
               </SheetTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Talk to AI Assistant</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild size="icon" className="rounded-full w-14 h-14">
                <Link href="tel:+916281981832" aria-label="Call us">
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

      <SheetContent className="w-full max-w-lg p-0 flex flex-col bg-background/80 backdrop-blur-sm" side="right">
          <SheetHeader className="p-4 border-b bg-transparent">
            <SheetTitle>AI Assistant</SheetTitle>
            <SheetDescription>
              Ask me anything about Grownex services and I'll do my best to help.
            </SheetDescription>
          </SheetHeader>
          <Chatbot />
      </SheetContent>
    </Sheet>
  );
}
