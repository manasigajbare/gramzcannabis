"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        poster={assets.heroPoster}
      >
        <source src={assets.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-kob-green bg-black shadow-2xl md:h-28 md:w-28">
          <Image
            src={assets.logo}
            alt="Gramz Cannabis"
            width={96}
            height={96}
            className="h-full w-full rounded-full object-cover"
            priority
          />
        </div>
        <h1 className="mb-2 text-4xl font-black text-white md:text-5xl">Gramz</h1>
        <p className="mb-2 text-lg font-semibold text-kob-green md:text-xl">Cannabis Dispensary</p>

        <p className="mb-8 text-base text-white/90 md:text-lg">
          Recreational Cannabis is available to anyone 21+ with a valid ID
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/michigan/monroe" className="btn-primary px-10 py-3.5 text-base">
            Start Order
          </Link>
          <Link href="#app" className="btn-outline-white px-10 py-3.5 text-base">
            Get the App
          </Link>
        </div>
      </div>
    </section>
  );
}
