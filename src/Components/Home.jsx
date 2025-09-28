import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import InstructorsSection from "./InstructorsSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import StudentGallerySection from "./StudentGallerySection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <InstructorsSection />
      <PricingSection />
      <TestimonialsSection />
      <StudentGallerySection />
      <ContactSection />
    </div>
  );
}