import { galleryImages } from "@/data/collections";

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-kob-green-dark py-6">
      <div className="flex animate-marquee gap-3">
        {[...galleryImages, ...galleryImages].map((src, i) => (
          <div key={i} className="h-44 w-44 shrink-0 overflow-hidden rounded-xl md:h-52 md:w-52">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Gramz gallery image ${(i % galleryImages.length) + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
