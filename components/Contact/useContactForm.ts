"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactSchema, type ContactFormValues } from "./contactSchema";

export const useContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const handleSendEmail = async (formData: ContactFormValues) => {
    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          user_name: formData.user_name,
          user_last_name: formData.user_last_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_USER_ID as string
      );
      setSendStatus("success");
      reset();
    } catch {
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(handleSendEmail),
    errors,
    isSending,
    sendStatus,
  };
};
