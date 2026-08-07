"use client";

import { useApp } from "@/context/AppContext";

export default function WeightSelectorModal() {
  const { activeModal, closeModal, selectedProduct, addToCart } = useApp();

  if (activeModal !== "weight" || !selectedProduct?.weights) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center bg-black/50 sm:items-center" onClick={closeModal}>
      <div
        className="w-full max-w-md rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-1 text-lg font-bold">Select Weight</h2>
        <p className="mb-4 text-sm text-gray-500">{selectedProduct.name}</p>
        <div className="space-y-2">
          {selectedProduct.weights.map((w) => (
            <button
              key={w.label}
              type="button"
              onClick={() => {
                addToCart({ ...selectedProduct, price: w.price }, w.label);
                closeModal();
              }}
              className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-kob-green hover:bg-kob-green/5"
            >
              <span className="font-medium">{w.label}</span>
              <span className="font-bold text-kob-green">${w.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
