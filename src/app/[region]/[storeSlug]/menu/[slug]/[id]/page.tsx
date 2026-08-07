import { notFound } from "next/navigation";
import ShopHeader from "@/components/layout/ShopHeader";
import ProductDetailView from "@/components/product/ProductDetailView";
import { ShopFooter } from "@/components/shop/StoreInfo";
import {
  getCategoryBanner,
  getProductById,
  getProductBySlug,
  products,
} from "@/data/products";
import {
  getAllStoreParams,
  getStoreBasePath,
  getStoreByRegionAndSlug,
} from "@/data/stores";

type Props = {
  params: Promise<{ region: string; storeSlug: string; slug: string; id: string }>;
};

export function generateStaticParams() {
  return getAllStoreParams().flatMap(({ region, storeSlug }) =>
    products.map((product) => ({
      region,
      storeSlug,
      slug: product.slug,
      id: product.id,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { region, storeSlug, slug } = await params;
  const store = getStoreByRegionAndSlug(region, storeSlug);
  const product = getProductBySlug(slug);
  if (!store || !product) return { title: "Product | Gramz" };

  const stateName = store.state === "MI" ? "Michigan" : "New York";
  return {
    title: `Buy ${product.name} | ${store.city}, ${stateName}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { region, storeSlug, slug, id } = await params;
  const store = getStoreByRegionAndSlug(region, storeSlug);
  const product = getProductBySlug(slug) ?? getProductById(id);
  if (!store || !product) notFound();

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
