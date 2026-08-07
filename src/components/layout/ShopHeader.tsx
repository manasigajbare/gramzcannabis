"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/shared/Logo";
import { shopCategories } from "@/data/products";

type ShopHeaderProps = {
  storeName?: string;
  storeState?: string;
  storeBasePath?: string;
  categoryBanner?: string;
  searchPlaceholder?: string;
};

export default function ShopHeader({
  storeName = "Monroe",
  storeState = "MI",
  storeBasePath = "/michigan/monroe",
  categoryBanner,
  searchPlaceholder = "Search products",
}: ShopHeaderProps) {
  const { openModal, orderType, cartCount } = useApp();

  return (
    <>
      <header className="shop-header sticky top-0 z-50 bg-white">
        {/* Top bar */}
        <div className="border-b border-gray-200">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 md:gap-3 md:px-4 md:py-3">
            <button
              type="button"
              onClick={() => openModal("search")}
              className="shrink-0 rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Open menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Logo className="shrink-0 text-kob-text" size={36} showText={false} />

            <button
              type="button"
              onClick={() => openModal("search")}
              className="shop-header-search hidden min-w-0 flex-1 items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2.5 text-left text-sm text-gray-500 transition hover:border-gray-400 lg:flex"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="truncate">{searchPlaceholder}</span>
            </button>

            <button
              type="button"
              onClick={() => openModal("orderType")}
              className="hidden shrink-0 items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 md:flex"
            >
              <svg className="h-3.5 w-3.5 text-kob-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {storeName}, {storeState}
              <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="hidden shrink-0 items-center rounded-full bg-gray-100 p-0.5 sm:flex">
              <button
                type="button"
                onClick={() => openModal("orderType")}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  orderType === "pickup" ? "bg-kob-black text-white shadow-sm" : "text-gray-600"
                }`}
              >
                Pickup
              </button>
              <button
                type="button"
                onClick={() => openModal("orderType")}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  orderType === "delivery" ? "bg-kob-black text-white shadow-sm" : "text-gray-600"
                }`}
              >
                Delivery
              </button>
            </div>

            <button
              type="button"
              onClick={() => openModal("cart")}
              className="relative shrink-0 rounded-lg p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Cart"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-kob-green px-1 text-[10px] font-bold text-kob-black">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => openModal("auth")}
              className="hidden shrink-0 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-bold text-gray-800 hover:bg-gray-50 sm:inline-flex"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => openModal("auth")}
              className="hidden shrink-0 rounded-full bg-kob-green px-3 py-1.5 text-xs font-bold text-kob-black hover:bg-kob-green-light md:inline-flex"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={() => openModal("search")}
              className="shrink-0 rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category nav */}
        <nav
          className="hide-scrollbar flex gap-0.5 overflow-x-auto border-b border-gray-200 bg-gray-50 px-3 py-2 md:px-4"
          aria-label="Shop categories"
        >
          {shopCategories.map((cat, i) => (
            <Link
              key={cat}
              href={`${storeBasePath}#${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`shrink-0 px-3 py-1.5 text-xs font-semibold transition ${
                i === 0
                  ? "font-bold text-kob-text"
                  : "text-gray-600 hover:text-kob-green"
              }`}
            >
              {i === 0 ? "Shop Deals" : cat}
            </Link>
          ))}
        </nav>

        {/* Optional category banner (product detail) */}
        {categoryBanner && (
          <div className="border-b border-gray-200 bg-gray-100 py-2 text-center text-xs font-medium text-gray-600">
            {categoryBanner}
          </div>
        )}
      </header>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-gray-200 bg-white py-2 md:hidden">
        <Link href="/" className="flex flex-col items-center text-[10px] text-gray-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <button type="button" onClick={() => openModal("search")} className="flex flex-col items-center text-[10px] text-gray-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
        <Link href={storeBasePath} className="flex flex-col items-center text-[10px] font-bold text-kob-green">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Menu
        </Link>
        <button type="button" onClick={() => openModal("cart")} className="relative flex flex-col items-center text-[10px] text-gray-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Cart
          {cartCount > 0 && (
            <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-kob-green text-[10px] font-bold text-kob-black">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
