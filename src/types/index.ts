export type StrainType = "SATIVA" | "INDICA" | "HYBRID";

export type ProductCategory =
  | "flower"
  | "pre-rolls"
  | "disposables"
  | "cartridges"
  | "edibles"
  | "concentrates"
  | "deals";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  strainType: StrainType;
  thc: number;
  cbd?: number;
  price: number;
  originalPrice?: number;
  weight: string;
  dealLabel?: string;
  discount?: string;
  image: string;
  images?: string[];
  description: string;
  strain: string;
  genetics: string;
  tier: string;
  tierPrice: string;
  favorites: number;
  feelings: string[];
  helpsWith: string[];
  cannabinoids: { name: string; value: string; description: string }[];
  brandDescription: string;
  isDeli?: boolean;
  weights?: { label: string; price: number }[];
};

export type CartItem = {
  product: Product;
  quantity: number;
  selectedWeight?: string;
};

export type StoreLocation = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  image: string;
  delivery?: boolean;
  slug: string;
  tagline?: string;
  hours?: string;
};

export type ModalType =
  | "search"
  | "auth"
  | "cart"
  | "orderType"
  | "weight"
  | "deals"
  | null;
