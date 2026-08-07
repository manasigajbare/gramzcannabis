import Link from "next/link";
import Image from "next/image";
import { assets } from "@/data/images";

export default function LoyaltySection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-kob-green/10 px-4 py-1 text-sm font-bold text-kob-green">
              Earn Royalty
            </span>
            <h2 className="mb-4 text-3xl font-black text-kob-text">
              Download the app to maximize your rewards!
            </h2>
            <p className="mb-8 leading-relaxed text-kob-text-muted">
              Get the Gramz app to earn Loyalty Points on every purchase,
              collect Punches for exclusive rewards, and enter sweepstakes for amazing prizes.
            </p>
            <Link href="#app" className="btn-primary">Get the App</Link>
          </div>
          <div className="flex justify-center">
            <div className="h-72 w-56 rounded-3xl border-4 border-kob-green/30 bg-kob-gray p-4 shadow-xl">
              <div className="flex h-full flex-col rounded-2xl bg-kob-green/10 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={assets.logo}
                    alt="Gramz"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">Loyalty Points</p>
                    <p className="text-2xl font-black text-kob-green">2,450</p>
                  </div>
                </div>
                {["Earn on every purchase", "Exclusive rewards", "Sweepstakes entries"].map((item) => (
                  <div key={item} className="mb-2 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm">
                    <span className="text-kob-green">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
