/** @format */

import Image from "next/image";

export const TechIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="size-10 fill-[url(#tech-icon-gradient)]"
      />
      <svg className="siz-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
