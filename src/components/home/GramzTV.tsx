import { kobTvThumbs } from "@/data/images";

const episodes = [
  { title: "Inside the Deli-Style Flower Bar", duration: "12:34" },
  { title: "Top Strains of the Week", duration: "8:21" },
  { title: "Meet Our Budtenders", duration: "15:07" },
  { title: "Edibles 101: A Beginner's Guide", duration: "10:45" },
];

export default function GramzTV() {
  return (
    <section id="kob-tv" className="scroll-mt-[72px] bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-kob-green">Episodes</span>
            <h2 className="text-3xl font-black text-kob-text">Gramz TV</h2>
          </div>
          <button type="button" className="text-sm font-bold text-kob-green hover:underline">More Episodes →</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {episodes.map((ep, i) => (
            <div key={ep.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={kobTvThumbs[i]} alt={ep.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs text-white">{ep.duration}</span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-kob-green text-kob-black">▶</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold line-clamp-2">{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
