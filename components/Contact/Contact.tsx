"use client";
import { FocusEvent, FormEvent, useRef, useState } from "react";
import { ContactProps } from "@/types";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import classNames from "classnames";
import emailjs from "@emailjs/browser";

const Contact = ({ title, contactMe }: ContactProps) => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedLastName, setIsFocusedLastName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedMessage, setIsFocusedMessage] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const handelOnFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputName = e.target.name;

    switch (inputName) {
      case "user_name":
        setIsFocusedName(true);
        break;
      case "user_last_name":
        setIsFocusedLastName(true);
        break;
      case "user_email":
        setIsFocusedEmail(true);
        break;
      case "message":
        setIsFocusedMessage(true);
        break;
      default:
        break;
    }
  };

  const inputClassName = classNames(styles.inputField, {
    [styles.focus]: isFocusedName,
  });
  const inputClassLastName = classNames(styles.inputField, {
    [styles.focus]: isFocusedLastName,
  });
  const inputClassEmail = classNames(styles.inputField, {
    [styles.focus]: isFocusedEmail,
  });
  const inputClassMessage = classNames(styles.inputField, {
    [styles.focus]: isFocusedMessage,
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current)
      emailjs
        .sendForm(
          "service_bxhbdpn",
          "template_6038mwf",
          form.current,
          "nppCeuuCqsg-hyN76"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message send");
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            console.log("ERROR message send");
          }
        );
  };

  return (
    <div id="contact" className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.contactText}>
        <p>{contactMe}</p>
      </div>
      <form ref={form} className={styles.formGroup} onSubmit={sendEmail}>
        <div className={styles.nameField}>
          <div className={inputClassName}>
            <label>First Name</label>
            <input
              type="text"
              name="user_name"
              onFocus={handelOnFocus}
              onBlur={() => setIsFocusedName(false)}
            />
          </div>
          <div className={inputClassLastName}>
            <label>Last Name</label>
            <input
              type="text"
              name="user_last_name"
              onFocus={handelOnFocus}
              onBlur={() => setIsFocusedLastName(false)}
            />
          </div>
        </div>
        <div className={inputClassEmail}>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            onFocus={handelOnFocus}
            onBlur={() => setIsFocusedEmail(false)}
          />
        </div>
        <div className={inputClassMessage}>
          <label>Message</label>
          <textarea
            rows={6}
            name="message"
            onFocus={handelOnFocus}
            onBlur={() => setIsFocusedMessage(false)}
          ></textarea>
        </div>

        <Button usedAs="button" variant="primary" text="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
