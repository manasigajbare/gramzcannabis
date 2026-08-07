"use client";

import { useState } from "react";
import { getStoreImage } from "@/data/images";

type StoreImageProps = {
  src: string;
  alt: string;
  className?: string;
  slug?: string;
};

export default function StoreImage({ src, alt, className = "", slug }: StoreImageProps) {
  const fallback = slug ? getStoreImage(slug) : getStoreImage("monroe");
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
