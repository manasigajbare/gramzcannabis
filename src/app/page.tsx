import HomeHeader from "@/components/layout/HomeHeader";
import Hero from "@/components/home/Hero";
import AppBanner from "@/components/home/AppBanner";
import Gallery from "@/components/home/Gallery";
import StoreLocations from "@/components/home/StoreLocations";
import LoyaltySection from "@/components/home/LoyaltySection";
import DeliverySection from "@/components/home/DeliverySection";
import GramzTV from "@/components/home/GramzTV";
import ApparelSection from "@/components/home/ApparelSection";
import Collections from "@/components/home/Collections";
import FAQ from "@/components/home/FAQ";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main id="top">
        <Hero />
        <AppBanner />
        <Gallery />
        <StoreLocations />
        <LoyaltySection />
        <DeliverySection />
        <GramzTV />
        <ApparelSection />
        <Collections />
        <FAQ />
      </main>
      <HomeFooter />
    </>
  );
}
