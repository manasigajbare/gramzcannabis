import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/images";

export default function AppBanner() {
  return (
    <section id="app" className="scroll-mt-[72px] border-y border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 lg:flex-row lg:px-8">
        <Image
          src={assets.logo}
          alt="Gramz Cannabis"
          width={80}
          height={80}
          className="shrink-0 rounded-2xl object-cover shadow-lg"
        />
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-xl font-black text-kob-text">Gramz App</h3>
          <p className="font-semibold text-kob-green">Browse faster in the app</p>
          <p className="text-sm text-kob-text-muted">Free delivery · Same-day speed · 3K ratings</p>
        </div>
        <Link href="#app" className="btn-primary">Continue in App</Link>
      </div>
    </section>
  );
}
