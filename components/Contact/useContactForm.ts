"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { record } from "@/lib/count";
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
    defaultValues: {
      company: "",
    },
  });

  const handleSubmitInquiry = async (formData: ContactFormValues) => {
    setIsSending(true);
    setSendStatus("idle");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: unknown = await response.json().catch(() => null);
      const status =
        result && typeof result === "object" && "status" in result
          ? (result as { status: unknown }).status
          : undefined;

      if (status === "delivered" || status === "failed") {
        record("inquiry", { status });
      }

      if (!response.ok) {
        throw new Error("Inquiry was not delivered");
      }

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
    handleSubmit: handleSubmit(handleSubmitInquiry),
    errors,
    isSending,
    sendStatus,
  };
};
