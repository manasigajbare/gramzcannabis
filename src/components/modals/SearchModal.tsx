"use client";

import { useApp } from "@/context/AppContext";

export default function SearchModal() {
  const { activeModal, closeModal, searchQuery, setSearchQuery } = useApp();

  if (activeModal !== "search") return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/50" onClick={closeModal}>
      <div
        className="mx-auto mt-0 max-w-2xl bg-white p-4 shadow-xl md:mt-8 md:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            autoFocus
            type="text"
            placeholder="Search Gramz"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg outline-none placeholder:text-gray-400"
          />
          <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {searchQuery && (
          <div className="py-4">
            <p className="text-sm text-gray-500">
              Search results for &quot;{searchQuery}&quot;
            </p>
            <div className="mt-3 space-y-2">
              {["Green Crack", "Jeeter Pre-Rolls", "Thunder Canna Gummies"].filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                  onClick={closeModal}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
