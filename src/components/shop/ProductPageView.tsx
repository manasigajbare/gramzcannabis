import { notFound } from "next/navigation";
import ShopHeader from "@/components/layout/ShopHeader";
import ProductDetailView from "@/components/product/ProductDetailView";
import { ShopFooter } from "@/components/shop/StoreInfo";
import { getCategoryBanner } from "@/data/products";
import { getStoreBasePath } from "@/data/stores";
import type { Product, StoreLocation } from "@/types";

export default function ProductPageView({
  store,
  product,
}: {
  store: StoreLocation;
  product: Product;
}) {
  const storeBasePath = getStoreBasePath(store);

  return (
    <>
      <ShopHeader
        storeName={store.city}
        storeState={store.state}
        storeBasePath={storeBasePath}
        categoryBanner={getCategoryBanner(product.category)}
        searchPlaceholder={`Search ${product.brand.split(" ")[0]}`}
      />
      <ProductDetailView product={product} store={store} />
      <ShopFooter />
    </>
  );
}

export function requireStore(store: StoreLocation | undefined): StoreLocation {
  if (!store) notFound();
  return store;
}
