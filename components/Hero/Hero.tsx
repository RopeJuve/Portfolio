import Button from "../Button/Button";
import { HeaderProps } from "@/types";

const Hero = ({ eyebrow, title, subTitle, profileImage }: HeaderProps) => {
  return (
    <div id="home" className="relative overflow-hidden bg-mist h-[80vh]">
      <img
        src={profileImage}
        alt="Robert Shterjov"
        className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-105 scale-110"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-bg via-bg/100 md:via-bg/100 to-bg/20 z-10 " />
      <div className="relative md:px-10 xl:px-0 md:py-24 flex flex-col gap-8 items-end">
        <div className="w-[90%] mx-auto z-20 flex flex-col gap-3">
          <p className="font-body text-caption uppercase tracking-widest text-smoke">
            {eyebrow}
          </p>
          <h1 className="max-w-[15ch] text-left">{title}</h1>
        </div>
        <div className="w-[90%] mx-auto flex flex-col flex-wrap gap-10 z-20">
          <div className="flex flex-col gap-4">
            <p className="font-accent text-body-lg text-left max-w-[40ch] normal-case">
              {subTitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                usedAs="link"
                text="start a project"
                variant="primary"
                href="contact"
              />
              <Button
                usedAs="link"
                text="view work"
                variant="secondary"
                href="work"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
