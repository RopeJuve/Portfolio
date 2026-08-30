"use client";

import { useRef } from "react";
import { ContactProps } from "@/types";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSectionReveal } from "@/lib/useSectionReveal";
import { useContactForm } from "./useContactForm";

const Contact = ({ title, contactMe, contactLocale }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const { register, handleSubmit, errors, isSending, sendStatus } =
    useContactForm();

  return (
    <section ref={sectionRef} id="contact" className="pt-[7.1875rem]">
      <Container>
        <div
          data-hairline="top"
          className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,22.5rem),1fr))] gap-[1.8125rem] border-t border-ink pt-10"
        >
          <div className="flex flex-col gap-5">
            <h2 className="split-text text-section font-light uppercase text-ink">
              {title.split(" ").map((word, index) => (
                <span key={word} className="block">
                  {index === 0 ? `${word} /` : word}
                </span>
              ))}
            </h2>
            <div data-rise-group className="flex flex-col gap-5">
              <p data-rise className="max-w-[52ch] text-body text-ink">
                {contactMe}
              </p>
              <p data-rise className="text-meta uppercase text-mute">
                {contactLocale}
              </p>
            </div>
          </div>
          <form
            data-rise-group
            data-rise-distance="18"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
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
