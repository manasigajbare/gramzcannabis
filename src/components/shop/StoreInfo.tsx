import Link from "next/link";
import type { StoreLocation } from "@/types";
import StoreImage from "@/components/shared/StoreImage";
import { storeHours } from "@/data/stores";

export default function StoreInfoSection({ store }: { store: StoreLocation }) {
  return (
    <section className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <StoreImage
              src={store.image}
              slug={store.slug}
              alt={`${store.city} store`}
              className="mb-4 h-64 w-full rounded-xl object-cover"
            />
            <h2 className="text-2xl font-black">Gramz Cannabis Dispensary {store.city}</h2>
            <p className="mt-2 text-kob-text-muted">{store.address}</p>
            <p className="font-semibold text-kob-green">{store.phone}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-kob-gray px-3 py-1 text-xs font-semibold">In-Store Pickup</span>
              <span className="rounded-full bg-kob-gray px-3 py-1 text-xs font-semibold">Curbside Pickup</span>
              <span className="rounded-full bg-kob-gray px-3 py-1 text-xs font-semibold">Online Ordering</span>
            </div>
            <div className="mt-4 flex gap-3">
              <button type="button" className="btn-outline text-sm">Get Directions</button>
              <a href={`tel:${store.phone}`} className="btn-primary text-sm">Call Store</a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Store Hours</h3>
            <div className="space-y-2">
              {storeHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between border-b border-gray-100 py-2 text-sm">
                  <span className="font-medium">{day}</span>
                  <span className="text-kob-text-muted">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const reviews = [
    { text: "I have been to over 20 dispensaries in 7 different states and this place is the BEST I have seen.", author: "Chuck & Sheila Hall" },
    { text: "Had the most phenomenal experience. The bud was great, she let me look at and smell the flower.", author: "Michael Adams" },
    { text: "Nick's great at customer service. It's seriously the only place I go.", author: "Al B" },
    { text: "Dylan was very knowledgeable and went out of his way to provide me with the best service possible.", author: "Amy GT" },
  ];

  return (
    <section className="bg-kob-gray py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-2xl font-black">What Customers Say About Gramz Monroe</h2>
        <p className="mb-8 text-kob-text-muted">Don&apos;t just take our word for it.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <blockquote key={review.author} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="mb-3 text-sm italic text-kob-text-muted">&ldquo;{review.text}&rdquo;</p>
              <footer className="text-sm font-bold">{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopFooter() {
  return (
    <footer className="border-t border-gray-200 bg-kob-green-dark pb-20 pt-10 text-white md:pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-kob-green">Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Flower", "Pre Rolls", "Disposables", "Edibles", "Concentrates"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-kob-green">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Home", "Locations", "Contact Us", "Careers", "Get the App"].map((item) => (
                <li key={item}><Link href="/" className="hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-kob-green">Specials</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Flower Deals", "Preroll Deals", "Edible Deals", "All Deals"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-kob-green">Follow Us</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Gramz TV on YouTube</a></li>
              <li><a href="#" className="hover:text-white">Follow on X</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} GRAMZ ALL RIGHTS RESERVED
        </p>
        <p className="mt-4 text-center text-xs text-white/30">
          For adult use only (21+). Keep cannabis away from kids and pets.
        </p>
      </div>
    </footer>
  );
}
