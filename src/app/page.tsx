import Image from "next/image";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSections from "./components/ProjectSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SpotifySection from "./components/SpotifySection";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <ProjectSections/>
      <EmailSection/>
      <SpotifySection/>
      </div>
      <Footer/>
      <SpeedInsights />
      <Analytics/>
    </main>
  );
}
