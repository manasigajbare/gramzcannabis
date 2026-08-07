import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/images";

type LogoProps = {
  className?: string;
  size?: number;
  showText?: boolean;
};

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src={assets.logo}
        alt="Gramz Cannabis"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
      {showText && <span className="hidden font-bold tracking-tight sm:block">Gramz</span>}
    </Link>
  );
}
