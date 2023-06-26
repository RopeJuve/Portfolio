import Button from "../Button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>contact me</h3>
      <div className={styles.contactText}>
        <p>
          Get in touch with me to discuss your project, ask any questions, or
          simply say hello. I'm here and eager to connect! Whether you have a
          web development project in mind, need assistance with frontend design,
          or have inquiries about my services, feel free to reach out using the
          contact information provided below. I value open communication and
          prompt responses, so rest assured that I'll get back to you as soon as
          possible. Let's collaborate and bring your ideas to life. I look
          forward to hearing from you and being a part of your web development
          journey!
        </p>
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
