"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import type { Product, StoreLocation } from "@/types";
import { assets } from "@/data/images";
import { categoryBreadcrumbs, products, relatedProducts } from "@/data/products";
import { getStoreBasePath } from "@/data/stores";
import ProductCard from "@/components/shop/ProductCard";
import ProductImage from "@/components/shared/ProductImage";

function StrainBadge({ type }: { type: string }) {
  const cls =
    type === "SATIVA"
      ? "bg-[#FFF5F0] text-[#D35400]"
      : type === "INDICA"
        ? "bg-purple-50 text-purple-700"
        : "bg-green-50 text-green-700";
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${cls}`}>
      {type}
    </span>
  );
}

function parsePercent(value: string): number {
  const n = parseFloat(value.replace("%", ""));
  return Number.isFinite(n) ? n : 0;
}

function CannabinoidBar({ name, value }: { name: string; value: string }) {
  const pct = Math.min(parsePercent(value), 100);
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 font-medium text-gray-700">
          {name}
          <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className="font-bold text-gray-900">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-kob-green transition-all"
          style={{ width: `${Math.max(pct, 2)}%` }}
        />
      </div>
    </div>
  );
}

export default function ProductDetailView({
  product,
  store,
}: {
  product: Product;
  store: StoreLocation;
}) {
  const { addToCart, setSelectedProduct, openModal } = useApp();
  const storeBasePath = getStoreBasePath(store);
  const weightOptions = product.weights ?? [{ label: product.weight, price: product.price }];
  const [selectedWeightIdx, setSelectedWeightIdx] = useState(
    Math.max(0, weightOptions.length - 1)
  );
  const [quantity, setQuantity] = useState(1);
  const [favorited, setFavorited] = useState(false);

  const cartOthers = Math.max(12, Math.floor(product.favorites * 0.15));

  const suggestions = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 8),
    [product.id]
  );

  const handleAddToCart = () => {
    if (product.isDeli && product.weights) {
      setSelectedProduct(product);
      openModal("weight");
    } else {
      for (let i = 0; i < quantity; i++) addToCart(product);
    }
  };

  const categoryLabel = categoryBreadcrumbs[product.category] ?? "Menu";

  return (
    <div className="product-detail bg-white pb-24 md:pb-12">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 py-3 text-xs text-gray-500">
        <Link href={storeBasePath} className="capitalize hover:text-kob-green hover:underline">
          {store.slug}
        </Link>
        <span className="mx-1.5">/</span>
        <Link href={storeBasePath} className="hover:text-kob-green hover:underline">
          Menu
        </Link>
        <span className="mx-1.5">/</span>
        <span>{categoryLabel}</span>
        <span className="mx-1.5">/</span>
        <span className="font-medium text-gray-900">{product.name}</span>
      </nav>

      {/* Sticky image + scrollable info */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Sticky product image */}
          <div className="lg:sticky lg:top-[var(--shop-sticky-offset)] lg:self-start">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <ProductImage
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-contain p-2"
              />
              <button
                type="button"
                onClick={() => setFavorited(!favorited)}
                className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <svg
                  className={`h-3.5 w-3.5 ${favorited ? "fill-red-400 text-red-400" : "fill-none"}`}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {product.favorites}
              </button>
            </div>
          </div>

          {/* Right column — purchase + details (scrolls while image stays sticky) */}
          <div className="min-w-0">
            {/* Purchase block */}
            <div className="product-detail-purchase">
              <Link
                href={storeBasePath}
                className="text-sm font-semibold text-kob-green hover:underline"
              >
                {product.brand}
              </Link>
              <h1 className="mt-1 text-2xl font-black leading-tight text-gray-900 md:text-3xl">
                {product.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <StrainBadge type={product.strainType} />
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-bold text-gray-800">
                  {product.thc}% THC
                  <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>

              {/* Weight / price selector */}
              <div className="mt-5 flex flex-wrap gap-2">
                {weightOptions.map((w, i) => (
                  <button
                    key={w.label}
                    type="button"
                    onClick={() => setSelectedWeightIdx(i)}
                    className={`product-weight-btn flex min-w-[72px] flex-col items-center rounded-xl border-2 px-3 py-2.5 transition ${
                      selectedWeightIdx === i
                        ? "border-kob-green bg-kob-green/10"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <span className="text-xs font-medium text-gray-600">{w.label}</span>
                    <span className="text-sm font-black text-gray-900">${w.price.toFixed(2)}</span>
                    {product.originalPrice && i === selectedWeightIdx && (
                      <span className="text-[10px] text-red-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-5 flex gap-3">
                <div className="relative shrink-0">
                  <label htmlFor="product-qty" className="sr-only">Quantity</label>
                  <select
                    id="product-qty"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="appearance-none rounded-full border border-gray-300 bg-white py-3 pl-4 pr-9 text-sm font-semibold text-gray-800"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>Quantity: {n}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 py-3.5 text-base font-black"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={() => setFavorited(!favorited)}
                  className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 transition ${
                    favorited ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                  aria-label="Add to favorites"
                >
                  <svg className={`h-5 w-5 ${favorited ? "fill-current" : "fill-none"}`} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <p className="mt-3 text-sm font-medium text-kob-green">
                🔥 {cartOthers} others have this in their cart
              </p>
              <p className="mt-1 flex flex-wrap items-center gap-1 text-sm text-gray-700">
                <span className="text-kob-green">✓</span>
                In stock at {store.city}
                <button type="button" className="text-kob-green hover:underline">
                  Check nearby stores
                </button>
              </p>
              <p className="mt-2 text-xs text-gray-400">*Sales tax will be added at checkout.</p>
            </div>

            {/* Description — image unsticks once this grid row ends */}
            <section className="mt-10 border-t border-gray-200 pt-8">
              <h2 className="mb-3 text-lg font-black text-gray-900">Description</h2>
              <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
            </section>

            {/* Product details table */}
            <section className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-lg font-black text-gray-900">Product Details</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                {[
                  ["Strain", product.strain],
                  ["THC", `${product.thc}%`],
                  ["Strain Type", product.strainType.charAt(0) + product.strainType.slice(1).toLowerCase()],
                  ...(product.genetics !== "N/A" ? [["Genetics", product.genetics] as const] : []),
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="text-gray-600">{label}</span>
                    <span className="font-bold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tier info */}
            <section className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex gap-4">
                <Image
                  src={assets.logo}
                  alt="Gramz"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-black text-gray-900">{product.tier}</h3>
                    <span className="text-sm text-gray-500">{product.tierPrice}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Premium bulk cannabis flower at an exceptional value. High-quality deli flower with great potency and flavor profiles. Available from 1 gram up to 2.5 ounces per transaction.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Smokin - $35-$75/oz", "Fire - $125/oz", "Exotic - $169/oz", "Exclusive - $169+/oz"].map((tier) => (
                      <span key={tier} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                        {tier}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cannabinoids */}
            <section className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-5 text-lg font-black text-gray-900">Cannabinoids</h2>
              {product.cannabinoids.slice(0, 4).map((c) => (
                <CannabinoidBar key={c.name} name={c.name} value={c.value} />
              ))}
            </section>

            {/* About the brand */}
            <section className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-lg font-black text-gray-900">About the Brand</h2>
              <div className="flex items-start gap-3">
                <Image
                  src={assets.logo}
                  alt={product.brand}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900">{product.brand}</p>
                  <p className="text-xs text-gray-500">32 products available</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.brandDescription}</p>
                  <button type="button" className="mt-1 text-sm font-semibold text-kob-green hover:underline">
                    Show more
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-kob-black py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                More from {product.brand}
              </button>
            </section>

            {/* Frequently bought together */}
            <section className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-lg font-black text-gray-900">Frequently bought together</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {relatedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-3"
                  >
                    <div className="relative mx-auto mb-2 aspect-square w-full max-w-[100px]">
                      <ProductImage src={item.image} alt={item.name} className="h-full w-full rounded-lg object-contain" />
                      <button
                        type="button"
                        className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-kob-black text-white shadow-md"
                        aria-label={`Add ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-center text-xs font-semibold leading-tight text-gray-800 line-clamp-2">
                      {item.name}
                    </p>
                    <p className="mt-1 text-center text-sm font-bold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* You might also like — full width below sticky grid */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black text-gray-900">You might also like</h2>
            <div className="flex gap-2">
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50" aria-label="Previous">
                ‹
              </button>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50" aria-label="Next">
                ›
              </button>
            </div>
          </div>
          <div className="product-card-row-wrap">
            <div className="product-card-row hide-scrollbar flex gap-3">
              {suggestions.map((p) => (
                <ProductCard key={p.id} product={p} storeBasePath={storeBasePath} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
