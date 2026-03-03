import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "@/data";

const Social = () => {
  const { socialLinks } = data;

  return (
    <div className="flex items-center gap-6 mt-4">
      {socialLinks.map((link, index) => (
        <a
          key={`${link.socialIcon}-${index}`}
          href={link.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Social link ${index + 1}`}
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={link.socialIcon}
            className="w-9 h-9 text-accent cursor-pointer transition-all hover:scale-110 hover:text-primary"
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
