"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { assets } from "@/data/images";
import { mainNavLinks } from "@/data/navigation";
import ScrollLink from "@/components/ScrollLink";

export default function HomeHeader() {
  const { openModal } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="home-nav-shell fixed left-0 right-0 top-0 z-50">
      <div className="home-nav-bar mx-auto flex w-full items-stretch overflow-hidden border border-white/10 bg-black/80 shadow-2xl backdrop-blur-md">
        {/* Logo block */}
        <Link
          href="/"
          className="home-nav-logo flex shrink-0 items-center justify-center border-r border-white/15 bg-black"
        >
          <Image
            src={assets.logo}
            alt="Gramz Cannabis"
            width={52}
            height={52}
            className="home-nav-logo-img rounded-full object-cover"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="home-nav-links hidden min-w-0 flex-1 items-center justify-center gap-5 px-4 xl:flex xl:gap-6 xl:px-6"
          aria-label="Main navigation"
        >
          {mainNavLinks.map((link) => (
            <ScrollLink
              key={link.label}
              href={link.href}
              className="home-nav-link shrink-0 font-semibold uppercase text-white/90 transition hover:text-white"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="ml-auto flex shrink-0 items-center gap-3 px-4 xl:px-5">
          <button
            type="button"
            onClick={() => openModal("orderType")}
            className="home-nav-btn-outline hidden items-center justify-center rounded-full border border-white font-bold uppercase text-white transition hover:bg-white/10 xl:inline-flex"
          >
            Get Delivery
          </button>
          <Link
            href="/michigan/monroe"
            className="home-nav-btn-solid inline-flex items-center justify-center rounded-full bg-white font-black uppercase text-black transition hover:bg-white/90"
          >
            Start Order
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-3 text-white xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="mx-auto mt-3 w-full rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-md xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => (
              <ScrollLink
                key={link.label}
                href={link.href}
                onNavigate={() => setMobileOpen(false)}
                className="home-nav-link rounded-lg px-4 py-3 font-semibold uppercase text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </ScrollLink>
            ))}
            <button
              type="button"
              onClick={() => { openModal("orderType"); setMobileOpen(false); }}
              className="home-nav-btn-outline mt-2 inline-flex items-center justify-center rounded-full border border-white font-bold uppercase text-white"
            >
              Get Delivery
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
