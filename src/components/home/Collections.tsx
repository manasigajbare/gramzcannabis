import Link from "next/link";
import { collections } from "@/data/collections";

export default function Collections() {
  return (
    <section id="collections" className="scroll-mt-[72px] bg-kob-gray py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-black text-kob-text">Explore Collections</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c) => (
            <Link key={c.slug} href="/michigan/monroe" className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="font-bold group-hover:text-kob-green">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/michigan/monroe" className="text-sm font-bold text-kob-green hover:underline">
            View All Collections →
          </Link>
        </div>
      </div>
    </section>
  );
}
