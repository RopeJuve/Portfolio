import { AboutProps } from "@/types";

const About = ({ title, aboutMe }: AboutProps) => {
  return (
    <div id="about me" className="mt-section bg-frame bg-texture py-4">
      <h3>{title}</h3>
      <div className="max-w-container mx-auto mt-6 px-6 md:px-10 xl:px-0 flex flex-col gap-4">
        {aboutMe.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
