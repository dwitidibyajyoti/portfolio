import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { FeaturedProjectSection } from "@/components/portfolio/FeaturedProjectSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CyberGridBackground } from "@/components/3d/CyberGridBackground";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#06080d] text-[#f1f5f9] selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Global Ambient Interactive 3D Cyber Background */}
      <CyberGridBackground />

      {/* Floating HUD Command Navbar */}
      <Navbar />

      {/* Main Mission Timeline / Content */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Cyber Telemetry Footer */}
      <Footer />
    </div>
  );
}

