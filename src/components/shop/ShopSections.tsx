"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import type { Product } from "@/types";
import type { StoreLocation } from "@/types";
import { categoryIcons } from "@/data/images";
import ProductImage from "@/components/shared/ProductImage";
import ProductCard from "./ProductCard";

function Countdown() {
  const [time, setTime] = useState("01:44:28");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const [h, m, s] = prev.split(":").map(Number);
        let total = h * 3600 + m * 60 + s - 1;
        if (total < 0) total = 3600 + 44 * 60 + 28;
        const nh = Math.floor(total / 3600);
        const nm = Math.floor((total % 3600) / 60);
        const ns = total % 60;
        return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}:${String(ns).padStart(2, "0")}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono font-bold">{time}</span>;
}

export default function HappyHourBanner() {
  return (
    <div className="bg-kob-green text-kob-black">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-center text-sm">
        <span className="font-black uppercase tracking-wider">Happy Hour 15% OFF</span>
        <span>Ends in <Countdown /></span>
        <span className="text-white/80">Monday to Wednesday 9:00AM to 11:00AM</span>
        <span className="text-xs text-white/60">Discount applies at checkout in store</span>
      </div>
    </div>
  );
}

export function StoreHero({ store }: { store: StoreLocation }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-gray-200 px-4 py-4 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-lg font-black text-gray-900 md:text-xl">
              Gramz {store.city} {store.state === "MI" ? "Michigan" : "New York"} Dispensary
            </h1>
            <p className="mt-0.5 text-sm text-gray-500">{store.tagline ?? "Premium cannabis, curated for you"}</p>
          </div>
          <p className="text-sm font-semibold text-kob-green">Open till 10:00 PM</p>
        </div>

        <PromoBannerCarousel />

        <SignInBanner inline />
      </div>
    </div>
  );
}

function PromoBannerCarousel() {
  const banners = [
    {
      title: "MEDICAL CARD HOLDERS",
      subtitle: "10% OFF EVERYTHING",
      className: "bg-gradient-to-br from-kob-green to-kob-green-light text-kob-black",
    },
    {
      title: "2% LOYALTY POINTS",
      subtitle: "ON ALL ORDERS!",
      className: "bg-kob-black text-white",
    },
  ];

  return (
    <div className="relative my-4 grid gap-3 sm:grid-cols-2">
      {banners.map((b) => (
        <div
          key={b.title}
          className={`flex min-h-[88px] items-center justify-center rounded-xl px-4 py-5 text-center ${b.className}`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">{b.title}</p>
            <p className="text-lg font-black md:text-xl">{b.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const SHOP_CATEGORIES = [
  { label: "Deals", image: categoryIcons.Deals },
  { label: "Flower", image: categoryIcons.Flower },
  { label: "Pre Rolls", image: categoryIcons["Pre Rolls"] },
  { label: "Disposables", image: categoryIcons.Disposables },
  { label: "Cartridges", image: categoryIcons.Cartridges },
  { label: "Edibles", image: categoryIcons.Edibles },
  { label: "Concentrates", image: categoryIcons.Concentrates },
  { label: "Tinctures", image: categoryIcons.Tinctures },
];

export function CategoryCircles({ storeBasePath = "/michigan/monroe" }: { storeBasePath?: string }) {
  return (
    <section className="border-b border-gray-200 bg-white py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black text-gray-900 md:text-xl">What can we get you?</h2>
          <div className="flex gap-2">
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50" aria-label="Previous">
              ‹
            </button>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50" aria-label="Next">
              ›
            </button>
          </div>
        </div>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 sm:gap-5 md:gap-6">
          {SHOP_CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={`${storeBasePath}#${cat.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="category-circle-item flex flex-col items-center gap-2"
            >
              <div className="category-circle flex items-center justify-center">
                <ProductImage src={cat.image} alt={cat.label} className="h-full w-full object-cover" />
              </div>
              <span className="category-circle-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RowNavButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50"
        aria-label="Previous products"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50"
        aria-label="Next products"
      >
        ›
      </button>
    </div>
  );
}

export function CategoryRow({
  title,
  products,
  storeBasePath = "/michigan/monroe",
}: {
  title: string;
  products: Product[];
  storeBasePath?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (products.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section id={title.toLowerCase().replace(/\s+/g, "-")} className="border-b border-gray-100 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-gray-900">{title}</h2>
          <div className="flex items-center gap-3">
            <Link
              href={storeBasePath}
              className="text-sm font-semibold text-kob-green hover:underline"
            >
              See All
            </Link>
            <RowNavButtons onPrev={() => scroll("left")} onNext={() => scroll("right")} />
          </div>
        </div>
        <div className="product-card-row-wrap">
          <div ref={scrollRef} className="product-card-row hide-scrollbar flex gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} storeBasePath={storeBasePath} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DealPills({ deals }: { deals: string[] }) {
  return (
    <div className="border-b border-gray-200 bg-gray-50 py-3">
      <div className="hide-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4">
        {deals.map((deal) => (
          <span
            key={deal}
            className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700"
          >
            {deal}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SignInBanner({ inline = false }: { inline?: boolean }) {
  const { openModal } = useApp();

  return (
    <div
      className={`rounded-xl border border-purple-100 bg-purple-50/80 p-4 text-center ${
        inline ? "my-2" : "mx-4 my-6"
      }`}
    >
      <p className="mb-1 flex items-center justify-center gap-1.5 text-sm font-bold text-gray-900">
        <span>✨</span> Sign in for personalized recommendations!
      </p>
      <p className="mb-3 text-xs text-gray-600">
        View rewards, daily deals, quick reordering of your favorites, and a faster checkout.
      </p>
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => openModal("auth")}
          className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-bold text-gray-800 hover:bg-gray-50"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => openModal("auth")}
          className="rounded-full bg-kob-green px-5 py-2 text-sm font-bold text-kob-black hover:bg-kob-green-light"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
