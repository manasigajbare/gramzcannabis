import Link from "next/link";
import Logo from "@/components/shared/Logo";
import ScrollLink from "@/components/ScrollLink";
import { mainNavLinks } from "@/data/navigation";
import { michiganStores, newYorkStores } from "@/data/stores";

export default function HomeFooter() {
  return (
    <footer className="bg-kob-green-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Logo className="text-white" size={44} />
            </div>
            <p className="text-sm text-white/60">
              Michigan & New York&apos;s premier cannabis dispensary chain.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kob-green">Links</h4>
            <ul className="space-y-2">
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  <ScrollLink href={link.href} className="text-sm text-white/60 hover:text-white">
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kob-green">Michigan</h4>
            <ul className="space-y-2">
              {michiganStores.map((store) => (
                <li key={store.id}>
                  <Link href={`/michigan/${store.slug}`} className="text-sm text-white/60 hover:text-white">
                    {store.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kob-green">New York</h4>
            <ul className="space-y-2">
              {newYorkStores.map((store) => (
                <li key={store.id}>
                  <Link href={`/new-york/${store.slug}`} className="text-sm text-white/60 hover:text-white">
                    {store.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            <Link href="/michigan/monroe" className="btn-primary">Start Order</Link>
            <ScrollLink href="#delivery" className="rounded-full border-2 border-kob-green px-6 py-2.5 text-sm font-bold text-kob-green">
              Get Delivery
            </ScrollLink>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} GRAMZ ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
