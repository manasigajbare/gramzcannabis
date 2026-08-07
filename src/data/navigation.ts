export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "Find a Store", href: "#stores" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact Us", href: "#contact" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
  { label: "Gramz TV", href: "#kob-tv" },
  { label: "Shop Apparel", href: "#apparel" },
  { label: "Get the App", href: "#app" },
];

export const HEADER_OFFSET = 100;

export function scrollToHash(hash: string) {
  if (!hash || hash === "#") return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
}
