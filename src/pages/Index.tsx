import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";

import FacultySection from "@/components/FacultySection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#send-inquiry") {
      setTimeout(() => {
        const el = document.getElementById("send-inquiry");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      
      <FacultySection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
