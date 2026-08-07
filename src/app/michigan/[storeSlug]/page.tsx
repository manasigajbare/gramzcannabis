import { notFound } from "next/navigation";
import StorePageView from "@/components/shop/StorePageView";
import { getStoreByRegionAndSlug, michiganStores } from "@/data/stores";

type Props = {
  params: Promise<{ storeSlug: string }>;
};

export function generateStaticParams() {
  return michiganStores.map((store) => ({ storeSlug: store.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { storeSlug } = await params;
  const store = getStoreByRegionAndSlug("michigan", storeSlug);
  if (!store) return { title: "Store | Gramz" };

  return {
    title: `${store.city} Michigan Dispensary | Gramz Cannabis`,
  };
}

export default async function MichiganStorePage({ params }: Props) {
  const { storeSlug } = await params;
  const store = getStoreByRegionAndSlug("michigan", storeSlug);
  if (!store) notFound();

  return <StorePageView store={store} />;
}
