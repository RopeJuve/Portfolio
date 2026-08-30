"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type GradedPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

const GradedPhoto = ({ src, alt, className }: GradedPhotoProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleError = () => {
    setIsVisible(false);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(className)}
      onError={handleError}
    />
  );
};

export default GradedPhoto;
