// import { FAQSection } from "@/components/landing/faq-section";
// import { FeatureSection } from "@/components/landing/feature-section";
// import { FooterSection } from "@/components/landing/footer-section";
// import HeroSection from "@/components/landing/hero-section";
// import LandingPageNavbar from "@/components/landing/navbar";
// import { TeamSection } from "@/components/landing/team-section";

import AuthProcess from "@/components/landing/AuthProcess";
import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import LandingNavbar from "@/components/landing/LandingNavbar";

export const LandingPage = () => {
  return (
    // <div>
    //   <LandingPageNavbar />
    //   <HeroSection />
    //   <FeatureSection />
    //   <FAQSection />
    //   <TeamSection />
    //   <FooterSection />
    // </div>
    <main className="relative w-full h-full mx-auto max-w-7xl">
      <LandingNavbar />
      <div className="w-full pt-16 mx-auto">
        <Hero />
        <Features />
        <AuthProcess />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};
