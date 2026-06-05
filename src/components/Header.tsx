import { useState } from "react";
import { User, Menu, X, Disc, Compass, Star, Camera, Landmark, Eye, Globe } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "01 INTRO", icon: Compass },
    { id: "general-info", label: "02 IDENTIFICATION", icon: User },
    { id: "early-life", label: "03 MEMORIES", icon: Landmark },
    { id: "training-years", label: "04 TRAINING", icon: Landmark },
    { id: "journey", label: "05 JOURNEY", icon: Star },
    { id: "vocal-analysis", label: "06 INTELLECT", icon: Globe },
    { id: "rap-analysis", label: "07 RHYTHM", icon: Eye },
    { id: "dance-performance", label: "08 PERFORMANCE", icon: Star },
    { id: "fashion-visuals", label: "09 VISUALS", icon: Camera },
    { id: "discography", label: "10 SONIC", icon: Disc },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Top Main Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-pure-black/20 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        {/* Left Side Logo & Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-1.5 text-monster-red hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5 active:scale-95"
            aria-label="Open Drawer Navigation"
          >
            <Menu className="w-6 h-6 transition-transform hover:rotate-3" />
          </button>
          
          <span 
            className="font-display text-lg md:text-xl font-extrabold tracking-[0.15em] text-monster-red drop-shadow-[0_0_15px_rgba(226,30,58,0.5)] cursor-pointer select-none"
            onClick={() => handleNavClick("hero")}
          >
            AHYEON
          </span>
        </div>

        {/* Desktop Quick Nav Menu */}
        <nav className="hidden lg:flex gap-8 items-center">
          <button
            onClick={() => handleNavClick("general-info")}
            className={`font-mono text-xs tracking-widest ${
              activeSection === "general-info" ? "text-monster-red font-bold" : "text-white/50 hover:text-white"
            } transition-colors`}
          >
            IDENTIFICATION
          </button>
          <button
            onClick={() => handleNavClick("vocal-analysis")}
            className={`font-mono text-xs tracking-widest ${
              activeSection === "vocal-analysis" ? "text-monster-red font-bold" : "text-white/50 hover:text-white"
            } transition-colors`}
          >
            Intellect & Language
          </button>
          <button
            onClick={() => handleNavClick("fashion-visuals")}
            className={`font-mono text-xs tracking-widest ${
              activeSection === "fashion-visuals" ? "text-monster-red font-bold" : "text-white/50 hover:text-white"
            } transition-colors`}
          >
            Aesthetics
          </button>
          <button
            onClick={() => handleNavClick("discography")}
            className={`font-mono text-xs tracking-widest ${
              activeSection === "discography" ? "text-monster-red font-bold" : "text-white/50 hover:text-white"
            } transition-colors`}
          >
            Discography
          </button>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-monster-red rounded-full animate-ping"></div>
            <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">Digital Exhibition Live</span>
          </div>
          
          <button 
            onClick={() => handleNavClick("legacy")}
            className="p-1 text-white/60 hover:text-monster-red transition-colors"
          >
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </header>

      {/* Slide-out Fullscreen Drawer Navigation Panel */}
      {isDrawerOpen && (
        <>
          {/* Overlay Mask */}
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Menu Frame */}
          <aside className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] z-[100] glass-panel-heavy p-8 flex flex-col justify-between shadow-[25px_0_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-left duration-300">
            <div>
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div>
                  <span className="font-mono text-[9px] text-monster-red tracking-[0.4em] block">
                    BIOGRAPHY ARCHIVE
                  </span>
                  <span className="font-display text-xl font-extrabold tracking-widest text-[#ffffff] uppercase leading-none">
                    CHRONICLES
                  </span>
                </div>
                
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Nodes */}
              <nav className="flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-4 px-4 py-3 border-l-2 text-left transition-all ${
                        isActive
                          ? "border-monster-red bg-monster-red/10 text-white font-bold drop-shadow-[0_0_10px_rgba(226,30,58,0.2)]"
                          : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-monster-red" : "text-white/40"}`} />
                      <span className="font-mono text-[11px] tracking-widest">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Credit Footer */}
            <div className="pt-4 border-t border-white/5">
              <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                BABYMONSTER JUNG AHYEON DIGITAL ARCHIVE
              </p>
              <p className="font-mono text-[8px] text-monster-red/40 mt-1 uppercase">
                EST. FAN DIGITAL BIOGRAPHY PROJECT
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
