import { ContactProps } from "@/types";
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const Contact = ({ title, contactMe }: ContactProps) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.contactText}>
        <p>{contactMe}</p>
      </div>
      <form className={styles.formGroup}>
        <div className={styles.nameField}>
          <div className={styles.inputField}>
            <label>First Name</label>
            <input type="text" name="First Name" />
          </div>
          <div className={styles.inputField}>
            <label>Last Name</label>
            <input type="text" name="Last Name" />
          </div>
        </div>
        <div className={styles.inputField}>
          <label>Email</label>
          <input type="email" />
        </div>
        <div className={styles.inputField}>
          <label>Message</label>
          <textarea rows={6} name="soft"></textarea>
        </div>

        <Button variant="primary" text="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
