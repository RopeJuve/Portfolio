import Button from "../Button/Button";
import Social from "../Social/Social";
import { HeaderProps } from "@/types";

const Hero = ({ title, subTitle, profileImage }: HeaderProps) => {
  return (
    <div className="max-w-container mx-auto mt-section px-6 md:px-10 xl:px-0 grid gap-6 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-6 mb-6 md:mb-0 md:justify-end">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className="max-w-[19rem] md:max-w-[22rem]">
          <div className="flex items-center gap-4">
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
              href="projects"
            />
          </div>
          <Social />
        </div>
      </div>
      <div className="self-center border border-border rounded-flat bg-frame p-4 md:p-6">
        <img
          className="w-full aspect-[4/5] object-cover object-top"
          src={profileImage}
          alt="Robert Shterjov profile"
        />
      </div>
    </div>
  );
};

export default Hero;
