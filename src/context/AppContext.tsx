"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem, ModalType, Product } from "@/types";

type AppContextValue = {
  ageVerified: boolean | null;
  verifyAge: (verified: boolean) => void;
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  orderType: "pickup" | "delivery";
  setOrderType: (type: "pickup" | "delivery") => void;
  cart: CartItem[];
  addToCart: (product: Product, weight?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [ageVerified, setAgeVerified] = useState<boolean | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setAgeVerified(localStorage.getItem("gramz-age-verified") === "true");
    const savedCart = localStorage.getItem("kob-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        /* ignore */
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("kob-cart", JSON.stringify(cart));
    }
  }, [cart, hydrated]);

  const verifyAge = useCallback((verified: boolean) => {
    if (verified) {
      localStorage.setItem("gramz-age-verified", "true");
      setAgeVerified(true);
    } else {
      window.location.href = "https://www.google.com";
    }
  }, []);

  const openModal = useCallback((modal: ModalType) => setActiveModal(modal), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const addToCart = useCallback((product: Product, weight?: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedWeight: weight }];
    });
    setActiveModal("cart");
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      ageVerified,
      verifyAge,
      activeModal,
      openModal,
      closeModal,
      orderType,
      setOrderType,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal,
      selectedProduct,
      setSelectedProduct,
      searchQuery,
      setSearchQuery,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [
      ageVerified, verifyAge, activeModal, openModal, closeModal,
      orderType, cart, addToCart, removeFromCart, updateQuantity,
      cartCount, cartTotal, selectedProduct, searchQuery, isLoggedIn,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
