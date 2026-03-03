import { z } from "zod";

export const contactSchema = z.object({
  user_name: z.string().min(2, "First name must be at least 2 characters"),
  user_last_name: z.string().min(2, "Last name must be at least 2 characters"),
  user_email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
