import ShopHeader from "@/components/layout/ShopHeader";
import HappyHourBanner, {
  CategoryCircles,
  CategoryRow,
  DealPills,
  StoreHero,
} from "@/components/shop/ShopSections";
import StoreInfoSection, { ReviewsSection, ShopFooter } from "@/components/shop/StoreInfo";
import { categorySections, dealBanners } from "@/data/products";
import { getStoreBasePath } from "@/data/stores";
import type { StoreLocation } from "@/types";

export default function StorePageView({ store }: { store: StoreLocation }) {
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
