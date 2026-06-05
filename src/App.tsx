import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import GeneralInfo from "./components/GeneralInfo";
import EarlyLife from "./components/EarlyLife";
import TrainingYears from "./components/TrainingYears";
import Journey from "./components/Journey";
import VocalAnalysis from "./components/VocalAnalysis";
import RapAnalysis from "./components/RapAnalysis";
import DancePerformance from "./components/DancePerformance";
import FashionVisuals from "./components/FashionVisuals";
import Discography from "./components/Discography";
import AchievementsStats from "./components/AchievementsStats";
import MediaTimeline from "./components/MediaTimeline";
import LegacyFunFacts from "./components/LegacyFunFacts";
import LightboxModal from "./components/LightboxModal";
import { Sparkles, Eye, ShieldAlert, Landmark } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Global Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageUrl: "",
    title: "",
    description: "",
    videoUrl: "",
  });

  const handleOpenLightbox = (url: string, title: string, desc: string, videoUrl?: string) => {
    setLightbox({
      isOpen: true,
      imageUrl: url,
      title: title,
      description: desc,
      videoUrl: videoUrl || "",
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  // Simulated Apple-style luxury introduction loading percentage
  useEffect(() => {
    if (loadingProgress < 100) {
      const timeout = setTimeout(() => {
        setLoadingProgress((prev) => prev + Math.floor(Math.random() * 15 + 5));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loadingProgress]);

  // Track scroll position to update active index on sidebar
  useEffect(() => {
    const sectionIds = [
      "hero",
      "general-info",
      "early-life",
      "training-years",
      "journey",
      "vocal-analysis",
      "rap-analysis",
      "dance-performance",
      "fashion-visuals",
      "discography",
      "achievements",
      "media-archive",
      "legacy"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[200] bg-black text-white flex flex-col justify-between p-8 select-none">
        {/* Loading top header brand */}
        <div className="flex justify-between items-center">
          <span className="font-mono text-[9px] text-monster-red uppercase tracking-[0.4em] font-semibold">
            AHYEON DIGITAL MUSEUM
          </span>
          <span className="font-mono text-[9px] text-white/30 uppercase">
            Est. Fan Project 2026
          </span>
        </div>

        {/* Loading centered details */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white my-3">
              JUNG <span className="text-monster-red glow-text-red">AHYEON</span>
            </span>
          </div>
          
          <div className="space-y-2">
            <span className="font-mono text-xs text-white/45 block tracking-widest uppercase">
              LOADING COMPREHENSIVE ARCHIVES {Math.min(100, loadingProgress)}%
            </span>
            
            {/* Loading Fill Track */}
            <div className="w-64 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
              <div 
                className="h-full bg-monster-red shadow-[0_0_12px_#E21E3A] transition-all duration-100"
                style={{ width: `${Math.min(100, loadingProgress)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Loading footer indicators */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-white/20 uppercase gap-2">
          <span>BABYMONSTER JUNG AHYEON DIGITAL MUSEUM</span>
          <span>INITIALIZING INTERACTIVE PERFORMANCE MEDIA</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#000000] text-white selection:bg-monster-red selection:text-white relative min-h-screen">
      
      {/* Top Header Bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Floating Sidebar Indices */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Structural Render sequence */}
      <main className="w-full relative">
        
        {/* Intro Space and Hero Grid */}
        <Hero 
          onScrollDown={() => handleNavigate("general-info")} 
          onExploreImage={handleOpenLightbox} 
        />

        {/* Identification and Core Profile Details */}
        <GeneralInfo onExploreImage={handleOpenLightbox} />

        {/* Early memories & Childhood Polaroids Scrapbook layout */}
        <EarlyLife onExploreImage={handleOpenLightbox} />

        {/* YG Trainee Monthly survival progression nodes */}
        <TrainingYears onExploreImage={handleOpenLightbox} />

        {/* Official BABYMONSTER Era Chronology sliding cards */}
        <Journey onExploreImage={handleOpenLightbox} />

        {/* Vocal Range and Interactive Song Pitch Waveform Analysis */}
        <VocalAnalysis onExploreImage={handleOpenLightbox} />

        {/* Rap flow speed and metrics metronome analysis */}
        <RapAnalysis onExploreImage={handleOpenLightbox} />

        {/* Dance synchronization accuracy scores */}
        <DancePerformance onExploreImage={handleOpenLightbox} />

        {/* High Art Fine-Toned Magazine aesthetics Masonry category filters */}
        <FashionVisuals onExploreImage={handleOpenLightbox} />

        {/* 3D sliding virtual vinyl drawer carousel */}
        <Discography onExploreImage={handleOpenLightbox} />

        {/* Trophy milestones & dynamic Search SVG curves charts */}
        <AchievementsStats />

        {/* Media row sliders & Horizontal Clickable interactive chronologies */}
        <MediaTimeline onExploreImage={handleOpenLightbox} />

        {/* Testimonials quote carousel, ISTP habits clock & future potential emotional legacy */}
        <LegacyFunFacts />

      </main>

      {/* Global Image Lightbox zoom tool */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        description={lightbox.description}
        videoUrl={lightbox.videoUrl}
        onClose={handleCloseLightbox}
      />

      {/* Universal micro bottom credits bar */}
      <footer className="w-full py-12 bg-[#020202] border-t border-white/5 text-center font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] relative z-20">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>
            AHYEON DIGITAL MUSEUM • HISTORIC CHRONICLES PORTFOLIO REFERENCE
          </p>
          <p className="text-monster-red/50 text-[8px] tracking-[0.1em]">
            This is an interactive bio dedicated to BABYMONSTER's Jung Ahyeon. All informational content, logs, metrics and media structures are compiled under fair use.
          </p>
        </div>
      </footer>

    </div>
  );
}
