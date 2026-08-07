"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function AuthModal() {
  const { activeModal, closeModal, setIsLoggedIn } = useApp();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (activeModal !== "auth") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 p-4" onClick={closeModal}>
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">{mode === "login" ? "Login" : "Sign Up"}</h2>
          <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6 rounded-xl bg-kob-gray p-4 text-center">
          <p className="mb-1 font-semibold">Sign in for personalized recommendations!</p>
          <p className="text-sm text-kob-text-muted">
            View rewards, daily deals, quick reordering of your favorites, and a faster checkout.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-kob-green"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-kob-green"
            required
          />
          <button type="submit" className="btn-primary w-full py-3">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-kob-text-muted">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="font-semibold text-kob-green underline"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
