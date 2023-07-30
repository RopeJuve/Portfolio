import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonCommonProps {
  usedAs: "link" | "button";
  text: string;
  variant: string;
  href?: string;
}

interface ButtonLinkProps
  extends ComponentPropsWithoutRef<"a">,
    ButtonCommonProps {}

interface ButtonButtonProps
  extends ComponentPropsWithoutRef<"button">,
    ButtonCommonProps {}

type ButtonCustomProps = ButtonLinkProps | ButtonButtonProps;

const Button = ({
  usedAs,
  text,
  variant,
  href,
  ...props
}: ButtonCustomProps) => {
  const btnClasses = classNames(styles.btn, {
    [styles.primary]: variant === "primary" || variant === "primaryLink",
    [styles.secondary]: variant === "secondary" || variant === "secondaryLink",
  });

  return (
    <>
      {usedAs === "link" ? (
        <a
          className={btnClasses}
          {...(props as ButtonLinkProps)}
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
        >
          {text}
        </a>
      ) : (
        <button className={btnClasses} {...(props as ButtonButtonProps)}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
