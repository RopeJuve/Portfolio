import Wordmark from "../Logo/Wordmark";
import { data } from "@/data";

const Footer = () => {
  const { footerName } = data;

  return (
    <div className="mt-section pb-10">
      <div className="w-[90%] mx-auto px-6 md:px-10 xl:px-0 border-t border-border pt-6 flex flex-wrap items-end justify-between gap-10">
        <Wordmark className="text-display font-light leading-[0.88]" />
        <h5 className="text-right text-caption text-smoke">{footerName}</h5>
      </div>
    </div>
  );
};

export default Footer;
