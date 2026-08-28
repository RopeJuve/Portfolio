"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactProps } from "@/types";
import Button from "../Button/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { contactSchema, type ContactFormValues } from "./contactSchema";
import { cn } from "@/lib/utils";

// Deliberate exception to the site's flat (0px) radius system, matching the
// reference design's outlined form fields.
const fieldClassName =
  "bg-transparent ring-1 ring-carbon rounded-[4px] p-4 h-auto";
const labelClassName =
  "font-header text-caption font-normal text-carbon uppercase";

const Contact = ({ title, contactMe }: ContactProps) => {
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

  const handleSendEmail = async (data: ContactFormValues) => {
    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          user_name: data.user_name,
          user_last_name: data.user_last_name,
          user_email: data.user_email,
          message: data.message,
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

  return (
    <div id="contact" className="w-[90%] mx-auto px-6 md:px-10 xl:px-0 mt-section">
    <div className="border-t border-border pt-10 grid gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-5 w-[40%]">
        <h3 className="text-left">{title}</h3>
        <p className="text-left">{contactMe}</p>
        <p className="text-left text-caption text-carbon uppercase tracking-widest">Germany · CET · Remote friendly</p>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSendEmail)}
        noValidate
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <Label htmlFor="user_name" className={labelClassName}>
              First Name
            </Label>
            <Input
              id="user_name"
              type="text"
              className={fieldClassName}
              {...register("user_name")}
              aria-invalid={!!errors.user_name}
            />
            {errors.user_name && (
              <p className="text-red-500 text-xs font-body">
                {errors.user_name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <Label htmlFor="user_last_name" className={labelClassName}>
              Last Name
            </Label>
            <Input
              id="user_last_name"
              type="text"
              className={fieldClassName}
              {...register("user_last_name")}
              aria-invalid={!!errors.user_last_name}
            />
            {errors.user_last_name && (
              <p className="text-red-500 text-xs font-body">
                {errors.user_last_name.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="user_email" className={labelClassName}>
            Email
          </Label>
          <Input
            id="user_email"
            type="email"
            className={fieldClassName}
            {...register("user_email")}
            aria-invalid={!!errors.user_email}
          />
          {errors.user_email && (
            <p className="text-red-500 text-xs font-body">
              {errors.user_email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message" className={labelClassName}>
            Message
          </Label>
          <Textarea
            id="message"
            rows={6}
            className={cn(fieldClassName, "resize-none")}
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-red-500 text-xs font-body">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="max-w-[60%]">
          <Button
            usedAs="button"
            variant="primary"
            text={isSending ? "Sending..." : "Send Message"}
            disabled={isSending}
          />
        </div>
        {sendStatus === "success" && (
          <p className="text-green-600 text-sm font-body">
            Message sent successfully!
          </p>
        )}
        {sendStatus === "error" && (
          <p className="text-red-500 text-sm font-body">
            Failed to send. Please try again.
          </p>
        )}
      </form>
      </div>
    </div>
  );
};

export default Contact;
