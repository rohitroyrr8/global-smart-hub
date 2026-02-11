import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import CQDeepDive from "@/components/CQDeepDive";
import FacultySection from "@/components/FacultySection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <CQDeepDive />
      <FacultySection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
