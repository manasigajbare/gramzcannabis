"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-[72px] bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-kob-green">Help Center</span>
          <h2 className="text-3xl font-black text-kob-text">Frequently Asked Questions</h2>
          <p className="mt-2 text-kob-text-muted">Get answers to common questions about Gramz</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-gray-200">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="pr-4 font-bold text-sm">{faq.question}</span>
                <span className={`shrink-0 text-kob-green transition ${open === i ? "rotate-180" : ""}`}>▼</span>
              </button>
              {open === i && (
                <div className="border-t border-gray-100 px-5 py-4">
                  <p className="text-sm leading-relaxed text-kob-text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div id="contact" className="mt-10 rounded-2xl border border-kob-green/30 bg-kob-green/5 p-8 text-center">
          <h3 className="mb-2 font-black">Still Have Questions?</h3>
          <p className="mb-4 text-sm text-kob-text-muted">Our friendly staff is here to help!</p>
          <div className="flex justify-center gap-3">
            <a href="mailto:info@gramz.com" className="btn-primary text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
