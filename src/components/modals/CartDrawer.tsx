"use client";

import { useApp } from "@/context/AppContext";

export default function CartDrawer() {
  const { activeModal, closeModal, cart, removeFromCart, updateQuantity, cartTotal } = useApp();

  if (activeModal !== "cart") return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/50" onClick={closeModal}>
      <div
        className="absolute right-0 top-0 flex h-full w-full max-w-md animate-slide-up flex-col bg-white shadow-2xl md:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
          <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <svg className="mb-4 h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="font-semibold text-gray-600">Your cart is empty</p>
              <p className="mt-1 text-sm text-gray-400">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedWeight}`} className="flex gap-4 border-b border-gray-100 pb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold line-clamp-2">{item.product.name}</p>
                    {item.selectedWeight && (
                      <p className="text-xs text-gray-500">{item.selectedWeight}</p>
                    )}
                    <p className="mt-1 font-bold">${item.product.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-sm"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-sm"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="mb-4 flex justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button type="button" className="btn-primary w-full py-3">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
