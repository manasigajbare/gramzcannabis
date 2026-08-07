import { notFound } from "next/navigation";
import ProductPageView from "@/components/shop/ProductPageView";
import {
  getProductById,
  getProductBySlug,
  products,
} from "@/data/products";
import { getStoreByRegionAndSlug, michiganStores } from "@/data/stores";

type Props = {
  params: Promise<{ storeSlug: string; slug: string; id: string }>;
};

export function generateStaticParams() {
  return michiganStores.flatMap((store) =>
    products.map((product) => ({
      storeSlug: store.slug,
      slug: product.slug,
      id: product.id,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { storeSlug, slug } = await params;
  const store = getStoreByRegionAndSlug("michigan", storeSlug);
  const product = getProductBySlug(slug);
  if (!store || !product) return { title: "Product | Gramz" };

  return {
    title: `Buy ${product.name} | ${store.city}, Michigan`,
  };
}

export default async function MichiganProductPage({ params }: Props) {
  const { storeSlug, slug, id } = await params;
  const store = getStoreByRegionAndSlug("michigan", storeSlug);
  const product = getProductBySlug(slug) ?? getProductById(id);
  if (!store || !product) notFound();

  return <ProductPageView store={store} product={product} />;
}
