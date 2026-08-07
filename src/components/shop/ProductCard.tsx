"use client";

import Link from "next/link";
import type { Product } from "@/types";
import { useApp } from "@/context/AppContext";
import ProductImage from "@/components/shared/ProductImage";

function StrainBadge({ type }: { type: string }) {
  const cls =
    type === "SATIVA"
      ? "bg-[#FFF5F0] text-[#D35400]"
      : type === "INDICA"
        ? "bg-purple-50 text-purple-700"
        : "bg-emerald-50 text-emerald-700";
  return (
    <span className={`rounded px-2 py-0.5 text-[11px] font-bold uppercase ${cls}`}>
      {type}
    </span>
  );
}

function PriceDisplay({ price }: { price: number }) {
  const [dollars, cents] = price.toFixed(2).split(".");
  return (
    <span className="inline-flex items-start font-black text-gray-900">
      <span className="text-2xl leading-none">${dollars}</span>
      <span className="mt-1 text-xs leading-none">.{cents}</span>
    </span>
  );
}

export default function ProductCard({
  product,
  storeBasePath = "/michigan/monroe",
}: {
  product: Product;
  storeBasePath?: string;
}) {
  const { addToCart, setSelectedProduct, openModal } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.isDeli && product.weights) {
      setSelectedProduct(product);
      openModal("weight");
    } else {
      addToCart(product);
    }
  };

  const productUrl = `${storeBasePath}/menu/${product.slug}/${product.id}`;

  return (
    <Link href={productUrl} className="product-card group block w-[240px] shrink-0 sm:w-[260px] lg:w-[280px]">
      <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md">
        <div className="relative mb-5 aspect-square overflow-hidden rounded-lg bg-[#f7f7f7]">
          {product.dealLabel && (
            <span className="deal-ribbon absolute left-0 top-0 z-10">{product.dealLabel}</span>
          )}
          <ProductImage
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-2 transition group-hover:scale-[1.02]"
          />
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute -bottom-4 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-2xl font-light leading-none text-gray-900 shadow-md transition hover:scale-105"
            aria-label={`Add ${product.name} to cart`}
          >
            +
          </button>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-2">
          <PriceDisplay price={product.price} />
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-red-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            {product.weight}
          </span>
        </div>

        <p className="mb-3 min-h-[3rem] text-base font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-kob-green">
          {product.name}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2">
          <StrainBadge type={product.strainType} />
          <span className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-bold text-gray-800">
            {product.thc}% THC
          </span>
        </div>
      </div>
    </Link>
  );
}
