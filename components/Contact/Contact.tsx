"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactProps } from "@/types";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { contactSchema, type ContactFormValues } from "./contactSchema";
import {
  drawHairline,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const Contact = ({ title, contactMe, contactLocale }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
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

  useMotionBuild(sectionRef, (ctx) => {
    const heading = headingRef.current;
    const hairline = hairlineRef.current;
    const copy = copyRef.current;
    const form = formRef.current;
    if (!heading || !hairline || !copy || !form) return;

    maskReveal(heading, ctx);
    drawHairline(hairline, ctx);
    staggerRise(copy.querySelectorAll("[data-rise]"), ctx, 20, {
      scrollTrigger: { trigger: copy, start: "top 88%" },
    });
    staggerRise(form.querySelectorAll("[data-field]"), ctx, 18, {
      scrollTrigger: { trigger: form, start: "top 88%" },
    });
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

  return (
    <section ref={sectionRef} id="contact" className="pt-[7.1875rem]">
      <Container>
        <div
          ref={hairlineRef}
          data-hairline="top"
          className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,22.5rem),1fr))] gap-[1.8125rem] border-t border-ink pt-10"
        >
          <div className="flex flex-col gap-5">
            <h2
              ref={headingRef}
              className="split-text text-section font-light uppercase text-ink"
            >
              {title.split(" ").map((word, index) => (
                <span key={word} className="block">
                  {index === 0 ? `${word} /` : word}
                </span>
              ))}
            </h2>
            <div ref={copyRef} className="flex flex-col gap-5">
              <p data-rise className="max-w-[52ch] text-body text-ink">
                {contactMe}
              </p>
              <p data-rise className="text-meta uppercase text-mute">
                {contactLocale}
              </p>
            </div>
          </div>
          <form
            ref={formRef}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSendEmail)}
            noValidate
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div data-field className="flex flex-1 flex-col gap-2">
                <Label htmlFor="user_name">First Name</Label>
                <Input
                  id="user_name"
                  type="text"
                  {...register("user_name")}
                  aria-invalid={!!errors.user_name}
                />
                {errors.user_name && (
                  <p className="text-meta text-mute">
                    {errors.user_name.message}
                  </p>
                )}
              </div>
              <div data-field className="flex flex-1 flex-col gap-2">
                <Label htmlFor="user_last_name">Last Name</Label>
                <Input
                  id="user_last_name"
                  type="text"
                  {...register("user_last_name")}
                  aria-invalid={!!errors.user_last_name}
                />
                {errors.user_last_name && (
                  <p className="text-meta text-mute">
                    {errors.user_last_name.message}
                  </p>
                )}
              </div>
            </div>
            <div data-field className="flex flex-col gap-2">
              <Label htmlFor="user_email">Email</Label>
              <Input
                id="user_email"
                type="email"
                {...register("user_email")}
                aria-invalid={!!errors.user_email}
              />
              {errors.user_email && (
                <p className="text-meta text-mute">{errors.user_email.message}</p>
              )}
            </div>
            <div data-field className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
              className="resize-none"
                id="message"
                rows={6}
                {...register("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-meta text-mute">{errors.message.message}</p>
              )}
            </div>
            <div data-field>
              <Button
                usedAs="button"
                variant="primary"
                text={isSending ? "Sending..." : "Send Message"}
                disabled={isSending}
              />
            </div>
            {sendStatus === "success" && (
              <p className="text-body text-ink">Message sent successfully.</p>
            )}
            {sendStatus === "error" && (
              <p className="text-body text-mute">
                Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
