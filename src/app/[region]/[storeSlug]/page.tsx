import { notFound } from "next/navigation";
import ShopHeader from "@/components/layout/ShopHeader";
import HappyHourBanner, {
  CategoryCircles,
  CategoryRow,
  DealPills,
  StoreHero,
} from "@/components/shop/ShopSections";
import StoreInfoSection, { ReviewsSection, ShopFooter } from "@/components/shop/StoreInfo";
import { categorySections, dealBanners } from "@/data/products";
import { getAllStoreParams, getStoreBasePath, getStoreByRegionAndSlug } from "@/data/stores";

type Props = {
  params: Promise<{ region: string; storeSlug: string }>;
};

export function generateStaticParams() {
  return getAllStoreParams();
}

export async function generateMetadata({ params }: Props) {
  const { region, storeSlug } = await params;
  const store = getStoreByRegionAndSlug(region, storeSlug);
  if (!store) return { title: "Store | Gramz" };

  const stateName = store.state === "MI" ? "Michigan" : "New York";
  return {
    title: `${store.city} ${stateName} Dispensary | Gramz Cannabis`,
  };
}

export default async function StorePage({ params }: Props) {
  const { region, storeSlug } = await params;
  const store = getStoreByRegionAndSlug(region, storeSlug);
  if (!store) notFound();

  const storeBasePath = getStoreBasePath(store);

  return (
    <>
      <ShopHeader
        storeName={store.city}
        storeState={store.state}
        storeBasePath={storeBasePath}
        searchPlaceholder="Search Edibles"
      />
      <HappyHourBanner />
      <StoreHero store={store} />
      <DealPills deals={dealBanners} />
      <CategoryCircles storeBasePath={storeBasePath} />

      {categorySections.map((section) => (
        <CategoryRow
          key={section.slug}
          title={section.title}
          products={section.products}
          storeBasePath={storeBasePath}
        />
      ))}

      <StoreInfoSection store={store} />
      <ReviewsSection />
      <ShopFooter />
    </>
  );
}
