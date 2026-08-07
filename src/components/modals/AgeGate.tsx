"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { assets } from "@/data/images";

export default function AgeGate() {
  const { ageVerified, verifyAge } = useApp();

  const isOpen = ageVerified !== true;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <Image
          src={assets.logo}
          alt="Gramz Cannabis"
          width={72}
          height={72}
          className="mx-auto mb-6 rounded-full object-cover"
          priority
        />
        <h2
          id="age-gate-title"
          className="mb-2 text-2xl font-black uppercase tracking-wide text-kob-text"
        >
          Are You 21?
        </h2>
        <p className="mb-8 text-sm text-kob-text-muted">
          Please confirm that you are at least 21 years of age.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => verifyAge(true)}
            className="flex-1 rounded-full bg-kob-green py-3 font-bold text-kob-black transition hover:bg-kob-green-light"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => verifyAge(false)}
            className="flex-1 rounded-full border-2 border-gray-300 py-3 font-bold text-gray-600 transition hover:border-gray-400"
          >
            No
          </button>
        </div>
        <p className="mt-6 text-xs text-kob-text-muted">
          By accessing this site, you accept the{" "}
          <a href="#" className="underline">Terms And Conditions</a> and{" "}
          <a href="#" className="underline">Privacy Notice</a>
        </p>
      </div>
    </div>
  );
}
