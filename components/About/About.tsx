import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h3>about me</h3>
      <div className={styles.text}>
        <p>
          Hello, I'm Robert Shterjov, a frontend developer based in Germany. I
          specialize in creating captivating user experiences through
          beautifully responsive websites using React. With expertise in React,
          CSS, and JavaScript, I stay up-to-date with the latest trends and
          technologies.
        </p>
        <p>
          Collaboration is key to my process. I work closely with clients and
          creative teams to bring their vision to life. Communication, attention
          to detail, and delivering high-quality results are my priorities.
        </p>
        <p>
          Let's work together to create a web experience that engages and
          inspires. Whether you need a stunning website or an interactive web
          application built with React, I'm here to turn your ideas into
          reality. Get in touch, and let's make something exceptional!
        </p>
      </div>
    </div>
  );
};

export default About;
