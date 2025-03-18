import React from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedProperties from "@/components/landing/FeaturedProperties";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import Footer from "@/components/landing/Footer";
import NeighborhoodSection from "@/components/landing/NeighborhoodSection";
import AboutSection from "@/components/landing/AboutSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        {" "}
        {/* Adicionado padding-top para compensar o header fixo */}
        <Header />
        <main>
          <HeroSection />
          <FeaturedProperties />
          <NeighborhoodSection />
          <AboutSection />
          <TestimonialsCarousel />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
