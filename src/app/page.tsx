import Image from "next/image";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSections from "./components/ProjectSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <ProjectSections/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
