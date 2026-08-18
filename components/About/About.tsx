import { AboutProps } from "@/types";

const About = ({ title, aboutMe }: AboutProps) => {
  return (
    <div id="about me" className="mt-section px-6 md:px-10 xl:px-0">
      <div className="max-w-container mx-auto flex flex-col gap-6">
        <h3>{title}</h3>
        <div className="border border-border rounded-flat bg-linen p-6 md:p-8 flex flex-col gap-4">
          {aboutMe.map((text, i) => (
            <p key={i} className="text-left">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
