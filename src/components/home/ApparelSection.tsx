import Link from "next/link";
import { productImages } from "@/data/images";

export default function ApparelSection() {
  return (
    <section id="apparel" className="scroll-mt-[72px] bg-kob-green-dark py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-black text-white">Gramz Apparel</h2>
            <p className="mb-8 text-white/70">Rep your favorite dispensary with our exclusive apparel collection.</p>
            <Link href="#" className="btn-primary">Shop Collection</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[productImages.apparel1, productImages.apparel2].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Apparel" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
