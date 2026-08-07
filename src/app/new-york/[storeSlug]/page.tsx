import { notFound } from "next/navigation";
import StorePageView from "@/components/shop/StorePageView";
import { getStoreByRegionAndSlug, newYorkStores } from "@/data/stores";

type Props = {
  params: Promise<{ storeSlug: string }>;
};

export function generateStaticParams() {
  return newYorkStores.map((store) => ({ storeSlug: store.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { storeSlug } = await params;
  const store = getStoreByRegionAndSlug("new-york", storeSlug);
  if (!store) return { title: "Store | Gramz" };

  return {
    title: `${store.city} New York Dispensary | Gramz Cannabis`,
  };
}

export default async function NewYorkStorePage({ params }: Props) {
  const { storeSlug } = await params;
  const store = getStoreByRegionAndSlug("new-york", storeSlug);
  if (!store) notFound();

  return <StorePageView store={store} />;
}
