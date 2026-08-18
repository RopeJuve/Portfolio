type SimpleIconProps = {
  path: string;
  className?: string;
};

const SimpleIcon = ({ path, className }: SimpleIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d={path} />
  </svg>
);

export default SimpleIcon;
