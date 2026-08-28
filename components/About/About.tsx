import Social from "../Social/Social";
import { AboutProps } from "@/types";

const About = ({ title, aboutMe }: AboutProps) => {
  return (
    <div id="about" className="mt-section px-6 md:px-10 xl:px-0">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="w-full aspect-[3/4] overflow-hidden bg-ash">
          <img
            src="/images/profile1.png"
            alt="Robert Shterjov"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-left">{title}</h3>
          {aboutMe.map((text, i) => (
            <p key={i} className="text-left">
              {text}
            </p>
          ))}
          <Social />
        </div>
      </div>
    </div>
  );
};

export default About;
