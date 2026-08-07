import type { StoreLocation } from "@/types";
import { getStoreImage } from "@/data/images";

export type RegionSlug = "michigan" | "new-york";

export const stores: StoreLocation[] = [
  {
    id: "monroe",
    slug: "monroe",
    name: "Monroe",
    city: "Monroe",
    state: "MI",
    address: "14500 Laplaisance Rd D10, Monroe, MI 48161",
    phone: "(877) 844-4423",
    image: getStoreImage("monroe"),
    tagline: "Cannabis on I-75, Minutes from Toledo OH",
  },
  {
    id: "detroit",
    slug: "detroit",
    name: "Detroit",
    city: "Detroit",
    state: "MI",
    address: "10457 Gratiot Ave, Detroit, MI 48213",
    phone: "(313) 571-3558",
    image: getStoreImage("detroit"),
    tagline: "Premium cannabis on Gratiot Ave in Detroit",
  },
  {
    id: "ferndale",
    slug: "ferndale",
    name: "Ferndale",
    city: "Ferndale",
    state: "MI",
    address: "1300 E 9 Mile, Ferndale, MI 48220",
    phone: "(844) 700-2839",
    image: getStoreImage("ferndale"),
    delivery: true,
    tagline: "Recreational cannabis with delivery in Ferndale",
  },
  {
    id: "new-buffalo",
    slug: "new-buffalo",
    name: "New Buffalo",
    city: "New Buffalo",
    state: "MI",
    address: "19253 Harbor Country Dr, New Buffalo, MI 49117",
    phone: "(269) 281-8006",
    image: getStoreImage("new-buffalo"),
    tagline: "Lakefront cannabis in Harbor Country",
  },
  {
    id: "roseville",
    slug: "roseville",
    name: "Roseville",
    city: "Roseville",
    state: "MI",
    address: "29999 Groesbeck Hwy, Roseville, MI 48066",
    phone: "(586) 217-2444",
    image: getStoreImage("roseville"),
    delivery: true,
    tagline: "Cannabis on Groesbeck Hwy with delivery available",
  },
  {
    id: "inkster",
    slug: "inkster",
    name: "Inkster",
    city: "Inkster",
    state: "MI",
    address: "29245 Michigan Ave, Inkster, MI 48141",
    phone: "(734) 238-3182",
    image: getStoreImage("inkster"),
    tagline: "Your neighborhood dispensary on Michigan Ave",
  },
  {
    id: "taylor",
    slug: "taylor",
    name: "Taylor",
    city: "Taylor",
    state: "MI",
    address: "20720 Eureka Rd, Taylor, MI 48180",
    phone: "(313) 639-0449",
    image: getStoreImage("taylor"),
    delivery: true,
    tagline: "Downriver cannabis with pickup and delivery",
  },
  {
    id: "buffalo",
    slug: "buffalo",
    name: "Buffalo",
    city: "Buffalo",
    state: "NY",
    address: "2200 Walden Ave, Cheektowaga, NY 14225",
    phone: "(716) 377-9914",
    image: getStoreImage("buffalo"),
    tagline: "Western New York's premier cannabis destination",
  },
];

export const michiganStores = stores.filter((s) => s.state === "MI");
export const newYorkStores = stores.filter((s) => s.state === "NY");

export const storeHours = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
].map((day) => ({ day, hours: "9:00 AM - 10:00 PM" }));

export function getStoreBySlug(slug: string) {
  return stores.find((s) => s.slug === slug);
}

export function getRegionSlug(state: string): RegionSlug {
  return state === "NY" ? "new-york" : "michigan";
}

export function getStoreByRegionAndSlug(region: string, slug: string) {
  const expectedState =
    region === "new-york" ? "NY" : region === "michigan" ? "MI" : null;
  if (!expectedState) return undefined;
  return stores.find((s) => s.slug === slug && s.state === expectedState);
}

export function getStoreBasePath(store: StoreLocation): string {
  return `/${getRegionSlug(store.state)}/${store.slug}`;
}

export function getAllStoreParams() {
  return stores.map((store) => ({
    region: getRegionSlug(store.state),
    storeSlug: store.slug,
  }));
}
