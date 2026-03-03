import { ComponentPropsWithoutRef } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const variantMap: Record<ButtonVariant, "primary" | "secondaryCustom"> = {
  primary: "primary",
  primaryLink: "primary",
  secondary: "secondaryCustom",
  secondaryLink: "secondaryCustom",
};

const Button = ({
  usedAs,
  text,
  variant,
  href,
  ...props
}: ButtonCustomProps) => {
  const mappedVariant = variantMap[variant];

  if (usedAs === "link") {
    return (
      <ShadcnButton
        variant={mappedVariant}
        asChild
        className={cn("px-4 py-2")}
      >
        <a
          {...(props as ComponentPropsWithoutRef<"a">)}
          href={
            variant === "primary" || variant === "secondary"
              ? `#${href}`
              : `${href}`
          }
          target={
            variant === "primaryLink" || variant === "secondaryLink"
              ? "_blank"
              : "_self"
          }
          download={variant === "secondaryLink" ? true : undefined}
          aria-label={text}
          tabIndex={0}
        >
          {text}
        </a>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton
      variant={mappedVariant}
      className={cn("px-4 py-2")}
      {...(props as ComponentPropsWithoutRef<"button">)}
      aria-label={text}
    >
      {text}
    </ShadcnButton>
  );
};

export default Button;
