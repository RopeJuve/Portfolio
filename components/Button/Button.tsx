"use client";

import { ComponentPropsWithoutRef } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RollOver from "../RollOver/RollOver";

type ButtonVariant = "primary" | "primaryLink" | "secondary" | "secondaryLink";

interface ButtonCommonProps {
  usedAs: "link" | "button";
  text: string;
  variant: ButtonVariant;
  href?: string;
}

interface ButtonLinkProps
  extends ComponentPropsWithoutRef<"a">,
    ButtonCommonProps {}

interface ButtonButtonProps
  extends ComponentPropsWithoutRef<"button">,
    ButtonCommonProps {}

type ButtonCustomProps = ButtonLinkProps | ButtonButtonProps;

const variantMap: Record<ButtonVariant, "primary" | "outline"> = {
  primary: "primary",
  primaryLink: "primary",
  secondary: "outline",
  secondaryLink: "outline",
};

const Button = ({
  usedAs,
  text,
  variant,
  href,
  className,
  ...props
}: ButtonCustomProps) => {
  const mappedVariant = variantMap[variant];

  if (usedAs === "link") {
    const isExternal =
      variant === "primaryLink" || variant === "secondaryLink";

    return (
      <ShadcnButton
        variant={mappedVariant}
        asChild
        className={cn(className)}
      >
        <a
          {...(props as ComponentPropsWithoutRef<"a">)}
          href={
            variant === "primary" || variant === "secondary"
              ? `#${href}`
              : `${href}`
          }
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          aria-label={text}
          tabIndex={0}
        >
          <RollOver>{text}</RollOver>
        </a>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton
      variant={mappedVariant}
      className={cn(className)}
      {...(props as ComponentPropsWithoutRef<"button">)}
      aria-label={text}
    >
      <RollOver>{text}</RollOver>
    </ShadcnButton>
  );
};

export default Button;
