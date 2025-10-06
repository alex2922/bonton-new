"use client";

import { useState, useEffect } from "react";
import AboutSection from "@/components/home/AboutSection";
import ApplicationSection from "@/components/home/ApplicationSection";
import Certificates from "@/components/home/Certificates";
import CounterSections from "@/components/home/CounterSections";
import HeroSection from "@/components/home/HeroSection";
import HomeCatgoriesSections from "@/components/home/HomeCatgoriesSections";
import WhyUsSection from "@/components/home/WhyUsSections";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import LogoSlider from "@/components/LogoSlider";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 70000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <HeroSection />
      <CounterSections />
      <AboutSection />
      <HomeCatgoriesSections />
      <WhyUsSection />
      <div id="client-success-stories">
        <LogoSlider />
        <TestimonialSlider />
      </div>
      <ApplicationSection />
      <Certificates />
      <ContactPopup isOpen={showPopup} onClose={handleClosePopup} />
    </>
  );
}
