import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import GlobalModals from "@/components/modals/GlobalModals";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gramz | Cannabis Dispensaries Near Me",
  description:
    "Michigan & New York's premier cannabis dispensary chain. Premium flower, edibles, concentrates, delivery & in-store pickup. 21+ with valid ID.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans antialiased">
        <AppProvider>
          {children}
          <GlobalModals />
        </AppProvider>
      </body>
    </html>
  );
}
