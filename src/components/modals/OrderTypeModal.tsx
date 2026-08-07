"use client";

import { useApp } from "@/context/AppContext";

export default function OrderTypeModal() {
  const { activeModal, closeModal, orderType, setOrderType } = useApp();

  if (activeModal !== "orderType") return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center bg-black/50 sm:items-center" onClick={closeModal}>
      <div
        className="w-full max-w-sm rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-lg font-bold">How would you like to order?</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => { setOrderType("pickup"); closeModal(); }}
            className={`rounded-xl border-2 p-4 text-center transition ${
              orderType === "pickup"
                ? "border-kob-green bg-kob-green/5"
                : "border-gray-200 hover:border-kob-green"
            }`}
          >
            <span className="mb-2 block text-2xl">🏪</span>
            <span className="font-bold">Pickup</span>
            <p className="mt-1 text-xs text-gray-500">Ready in 15 min</p>
          </button>
          <button
            type="button"
            onClick={() => { setOrderType("delivery"); closeModal(); }}
            className={`rounded-xl border-2 p-4 text-center transition ${
              orderType === "delivery"
                ? "border-kob-green bg-kob-green/5"
                : "border-gray-200 hover:border-kob-green"
            }`}
          >
            <span className="mb-2 block text-2xl">🚚</span>
            <span className="font-bold">Delivery</span>
            <p className="mt-1 text-xs text-gray-500">60 min delivery</p>
          </button>
        </div>
      </div>
    </div>
  );
}
