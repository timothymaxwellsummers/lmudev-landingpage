import React from "react";

interface PartnerImageProps {
  source: string;
  alt: string;
  href?: string;
  width?: number | string;
  height?: number | string;
}

const PartnerImage: React.FC<PartnerImageProps> = ({
  source,
  alt,
  href = "#",
  width = 158,
  height = 48,
}) => {
  return (
    <a href={href}>
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-60 hover:opacity-100 hover:transition-all duration-100"
        src={source}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default PartnerImage;
