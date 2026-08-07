import Link from "next/link";
import { michiganStores, newYorkStores } from "@/data/stores";
import type { StoreLocation } from "@/types";
import StoreImage from "@/components/shared/StoreImage";

function StoreCard({ store }: { store: StoreLocation }) {
  const href = store.state === "MI" ? `/michigan/${store.slug}` : `/new-york/${store.slug}`;

  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <StoreImage
          src={store.image}
          slug={store.slug}
          alt={`${store.city} store`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {store.delivery && (
          <span className="absolute right-3 top-3 rounded-full bg-kob-green px-3 py-1 text-xs font-bold text-kob-black">
            Delivery
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-kob-text">
          {store.city}, {store.state}
        </h3>
        <p className="mt-1 text-sm font-semibold text-kob-green opacity-0 transition group-hover:opacity-100">
          Shop now →
        </p>
      </div>
    </Link>
  );
}

export default function StoreLocations() {
  return (
    <section id="stores" className="scroll-mt-[72px] bg-kob-gray py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-black text-kob-text md:text-3xl">
            Michigan Dispensaries ({michiganStores.length})
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {michiganStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-black text-kob-text md:text-3xl">
            New York Dispensaries ({newYorkStores.length})
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {newYorkStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
