"use client";

import AgeGate from "./AgeGate";
import AuthModal from "./AuthModal";
import CartDrawer from "./CartDrawer";
import OrderTypeModal from "./OrderTypeModal";
import SearchModal from "./SearchModal";
import WeightSelectorModal from "./WeightSelectorModal";

export default function GlobalModals() {
  return (
    <>
      <AgeGate />
      <SearchModal />
      <AuthModal />
      <CartDrawer />
      <OrderTypeModal />
      <WeightSelectorModal />
    </>
  );
}
