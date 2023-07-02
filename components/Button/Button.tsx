import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonCustomProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  variant: string;
  href?: string;
}

const Button = ({ text, variant, href, ...props }: ButtonCustomProps) => {
  const btnClasses = classNames(styles.btn, {
    [styles.primary]: variant === "primary" || variant === "primaryLink",
    [styles.secondary]: variant === "secondary" || variant === "secondaryLink",
  });

  return (
    <button className={btnClasses} {...props}>
      <a
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
    </button>
  );
};

export default Button;
