
import Social from "../Social/Social";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";

const Footer = () => {
  return (
    <div className="bg-frame mt-section pt-6">
      <div className="max-w-container mx-auto px-6 md:px-10 xl:px-0">
      <a href="/" aria-label="Home">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-6 md:h-7 w-auto"
          />
        </a>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <NavMenuLinks variant="nav-footer" />
          <Social />
        </div>
        <div>
          <h5 className="text-center mt-6 text-caption">
            &copy; 2023 Robert shterjov
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
