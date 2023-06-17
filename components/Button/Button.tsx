import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonCustomProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  variant: string;
}

const Button = ({ text, variant, ...props }: ButtonCustomProps) => {
  const btnClasses = classNames(styles.btn, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });

  return (
    <button className={btnClasses} {...props}>
      {text}
    </button>
  );
};

export default Button;
