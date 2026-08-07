"use client";

import { scrollToHash } from "@/data/navigation";

type ScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export default function ScrollLink({
  href,
  children,
  className,
  onNavigate,
}: ScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    scrollToHash(href);
    onNavigate?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
