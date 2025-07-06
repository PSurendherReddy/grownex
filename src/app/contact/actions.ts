'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input and try again.',
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Grownex Contact Form <noreply@your-verified-domain.com>', // IMPORTANT: Replace with your verified domain from Resend
      to: ['connect@grownexdigital.com'],
      subject: `New Contact Form Lead: ${subject}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, subject, message }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        message: 'Sorry, we had a problem sending your message. Please try again later.',
        success: false,
        errors: {},
      };
    }
    
    return {
      message: 'Thank you for your message! We will get back to you shortly.',
      success: true,
      errors: {},
    };

  } catch (exception) {
    console.error('Email sending exception:', exception);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
      errors: {},
    };
  }
}
