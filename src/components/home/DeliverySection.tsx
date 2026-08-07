import Link from "next/link";

const features = [
  { title: "Super-Fast, 60 Minutes", desc: "Most orders arrive within 60 minutes during business hours.", icon: "⚡" },
  { title: "Free Delivery", desc: "Free delivery with a $50 minimum order. No surprises.", icon: "🚚" },
  { title: "Licensed & Discreet", desc: "Fully licensed, unmarked vehicles, and professional drivers.", icon: "🔒" },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="scroll-mt-[72px] bg-kob-gray py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-4 text-center">
          <span className="rounded-full bg-kob-green/10 px-4 py-1 text-sm font-bold text-kob-green">Now Available</span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-black text-kob-text">Cannabis Delivery to Your Door</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-kob-text-muted">
          Gramz Delivery Express brings the full dispensary menu straight to you. Get it in 60 minutes or schedule for later.
        </p>
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <span className="mb-3 block text-3xl">{f.icon}</span>
              <h3 className="mb-2 font-black">{f.title}</h3>
              <p className="text-sm text-kob-text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/michigan/monroe" className="btn-primary">Check Your Address</Link>
        </div>
      </div>
    </section>
  );
}
