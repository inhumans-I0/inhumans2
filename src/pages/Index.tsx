import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RoleSelector from "@/components/RoleSelector";
import MarketplaceGallery from "@/components/MarketplaceGallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PersistentCTA from "@/components/PersistentCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <RoleSelector />
      <MarketplaceGallery />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      <PersistentCTA />
    </div>
  );
};

export default Index;
