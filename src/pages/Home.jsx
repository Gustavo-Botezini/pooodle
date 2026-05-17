import React from 'react';
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import ClientProfilesSection from "../components/home/ClientProfilesSection";
import PricingSection from "../components/home/PricingSection";
import CtaSection from "../components/home/CtaSection";
import DashboardPreviewSection from "../components/home/DashboardPreviewSection";
import SecuritySection from "../components/home/SecuritySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <HowItWorksSection />
      <ClientProfilesSection />
      <SecuritySection />
      <PricingSection />
      <CtaSection />
    </>
  );
}



