import { useState, useEffect } from "react";
import { Compass, Menu, X, Layers, TrendingUp } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { num: "01", id: "hero", label: "Introduction" },
    { num: "02", id: "general-info", label: "General Info" },
    { num: "03", id: "early-life", label: "Early Life" },
    { num: "04", id: "training-years", label: "Training Years" },
    { num: "05", id: "journey", label: "BABYMONSTER Journey" },
    { num: "06", id: "vocal-analysis", label: "Languages & Academics" },
    { num: "07", id: "rap-analysis", label: "Rap Analysis" },
    { num: "08", id: "dance-performance", label: "Dance & Performance" },
    { num: "09", id: "personality", label: "Personality" },
    { num: "10", id: "fashion-visuals", label: "Fashion & Visuals" },
    { num: "11", id: "discography", label: "Discography" },
    { num: "12", id: "achievements", label: "Achievements & Awards" },
    { num: "13", id: "gallery", label: "Media Gallery" },
    { num: "14", id: "media-archive", label: "Media Archive" },
    { num: "15", id: "horizontal-timeline", label: "Interactive Timeline" },
    { num: "16", id: "interactive-stats", label: "Interactive Stats" },
    { num: "17", id: "fun-facts", label: "Fun Facts & Trivia" },
    { num: "18", id: "legacy", label: "Legacy & Impact" },
  ];

  // Calculate page scroll progress ratio
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`hidden xl:flex flex-col justify-between py-24 px-6 h-screen fixed left-0 top-0 bg-[#060606]/90 border-r border-white/5 transition-all duration-500 z-40 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Top Sidebar Headline */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        {!collapsed && (
          <div>
            <span className="font-mono text-[9px] text-monster-red tracking-[0.3em] block uppercase">
              Chronicles Index
            </span>
            <span className="font-display text-lg font-bold tracking-wider text-white">AHYEON ARCHIVE</span>
          </div>
        )}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-white/5 text-white/50 hover:text-monster-red rounded ml-auto transition-all cursor-pointer"
          title={collapsed ? "Expand Sidebar Index" : "Maximize view"}
        >
          {collapsed ? <Layers className="w-5 h-5 text-monster-red" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Main High-Contrast Coordinates Nodes List */}
      <div className="flex-1 my-6 overflow-y-auto pr-1 no-scrollbar space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`w-full group flex items-center gap-3 py-1.5 px-3 transition-all text-left relative ${
                isActive ? "text-monster-red font-bold font-mono" : "text-white/40 hover:text-white"
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-wider px-1 py-0.5 rounded ${
                  isActive ? "bg-monster-red text-white" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                } transition-all`}
              >
                {section.num}
              </span>
              
              {!collapsed && (
                <span className="font-mono text-[10px] uppercase tracking-wider block truncate text-ellipsis max-w-[170px]">
                  {section.label}
                </span>
              )}

              {/* Glowing active notch indicator */}
              {isActive && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-monster-red rounded-full drop-shadow-[0_0_8px_#E21E3A]"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Scroll Progress Tracker Footer */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center justify-between mb-2">
          {!collapsed && (
            <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">
              Museum Progression
            </span>
          )}
          <span className="font-mono text-[9px] text-monster-red font-bold">
            {Math.round(scrollProgress)}%
          </span>
        </div>
        
        {/* Fill Tube */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-monster-red shadow-[0_0_8px_#E21E3A] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </aside>
  );
}
