import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { AdditionalProjects } from "@/components/sections/AdditionalProjects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <Hero />
        <About />
        <Expertise />
        <FeaturedProjects />
        <Experience />
        <TechStack />
        <EngineeringApproach />
        <AdditionalProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
