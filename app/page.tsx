import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MainLayout from "@/layout/MainLayout";
import PropertiesListGrid from "@/sections/HeroPage/PropertiesListGrid";
import PropertyControls from "@/sections/HeroPage/PropertyControls";

export default function Home() {
  return (
    <MainLayout>
      <>
        <main className="">
          <Hero text="FIND YOUR DREAM HOME AND FIND COMFORT" overlayOpacity="30" />
          <PropertyControls />
          <PropertiesListGrid />
          <Cta />
        </main>
        <Footer />
      </>
    </MainLayout>
  );
}
