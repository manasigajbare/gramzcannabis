"use client";

import { useState } from "react";
import { assets, productImages } from "@/data/images";

const FALLBACK = assets.productFallback ?? productImages.flower;

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProductImage({ src, alt, className = "" }: ProductImageProps) {
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
        if (currentSrc !== FALLBACK) setCurrentSrc(FALLBACK);
      }}
    />
  );
}
