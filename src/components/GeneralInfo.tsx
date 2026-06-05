import { User, Shield, Languages, Heart, Bookmark, Eye, Ruler } from "lucide-react";
import { IMAGES } from "../data";

interface GeneralInfoProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function GeneralInfo({ onExploreImage }: GeneralInfoProps) {
  const primaryDetails = [
    { label: "Korean Name", value: "정아현 (Jung Ah-yeon)" },
    { label: "Hanja / Chinese", value: "郑雅譞 (Zhèng Yǎxuān)" },
    { label: "Date of Birth", value: "April 11, 2007 (Aries)" },
    { label: "Hometown", value: "Chuncheon, Gangwon-do, South Korea" },
    { label: "Agency", value: "YG Entertainment" },
  ];

  const keyCharacteristics = [
    { label: "Height", value: "168 cm (5'6\")", icon: Ruler },
    { label: "Blood Type", value: "A", icon: Heart },
    { label: "MBTI Type", value: "ISTP (The Virtuoso)", icon: Shield },
    { label: "Role Status", value: "Center, All-Rounder, Vocal & Rapper", icon: Bookmark }
  ];

  const languageMastery = [
    { lang: "Korean", desc: "Native Fluency - Exceptional vocal delivery & emotional cadence in rap and singing", level: 100 },
    { lang: "English", desc: "Fluent - Studied intensively from a young age with natural pronunciation", level: 90 },
    { lang: "Chinese", desc: "Highly Proficient - Fluid Mandarin delivery with excellent accent and tonal control", level: 85 }
  ];

  return (
    <section 
      id="general-info"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-10 w-[30vh] h-[30vh] bg-monster-red/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION II
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            ARTIST PROFILE & IDENTITY
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          GENERAL <span className="text-monster-red">INFORMATION</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          PORTRAIT PORTFOLIO • PERSONAL & LINGUISTIC STATS
        </p>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Portrait Left Side */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm rounded-lg overflow-hidden border border-white/15 shadow-[0_0_40px_rgba(226,30,58,0.08)]">
              {/* Outer frame border */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-monster-red/30 transition-all z-20"></div>
              
              <img
                src={IMAGES.portrait}
                alt="Jung Ahyeon profile"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] md:h-[430px] object-cover filter saturate-90 hover:saturate-100 transition-all duration-500 group-hover:scale-102"
              />

              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-3 border border-white/5 rounded">
                <div className="flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-monster-red block font-bold">PROFILE IMAGE</span>
                    <span className="text-white/80">Ahyeon-Official-Promo</span>
                  </div>
                  <button
                    onClick={() => onExploreImage(IMAGES.portrait, "Ahyeon Official Profile", "Official promotional photographic portrait of BABYMONSTER's Ahyeon.")}
                    className="px-2.5 py-1 bg-monster-red/20 border border-monster-red/40 hover:bg-monster-red rounded text-[10px] text-white select-none transition-colors"
                  >
                    ZOOM
                  </button>
                </div>
              </div>
            </div>

            {/* Minor physical statistics panel */}
            <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2">
              {keyCharacteristics.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded flex items-center gap-3">
                    <Icon className="w-4 h-4 text-monster-red shrink-0" />
                    <div>
                      <span className="font-mono text-[8px] text-white/30 uppercase block">{stat.label}</span>
                      <span className="font-sans text-xs font-bold text-white tracking-wide">{stat.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Info & Language mastery */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Core Identification Details */}
            <div className="glass-panel p-6 rounded-lg border border-white/5 space-y-4">
              <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
                ARTIST CLASSIFICATION DETAILS
              </span>
              
              <div className="space-y-3">
                {primaryDetails.map((detail, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="font-mono text-xs text-white/50">{detail.label}</span>
                    <span className="font-mono text-xs text-white font-bold tracking-wide">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trilingual Linguistic Mastery Dials */}
            <div className="glass-panel p-6 rounded-lg border border-white/5 space-y-5">
              <div>
                <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
                  LINGUISTIC MASTERY INDEX
                </span>
                <p className="font-sans text-[11px] text-white/50 mt-1">
                  Ahyeon has exhibited highly proficient trilingual performance and communication, allowing direct global connection with fans without translators.
                </p>
              </div>

              <div className="space-y-4">
                {languageMastery.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold text-white tracking-wider flex items-center gap-2">
                        <Languages className="w-3.5 h-3.5 text-monster-red" />
                        {lang.lang}
                      </span>
                      <span className="font-mono font-bold text-monster-red">{lang.level}%</span>
                    </div>
                    
                    {/* Fill Channel */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-monster-red to-electric-crimson rounded-full"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>

                    <p className="font-mono text-[9px] text-white/40 italic leading-relaxed">
                      {lang.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Little custom MBTI quote block */}
            <div className="border-l-2 border-monster-red/40 pl-4 py-1">
              <p className="font-sans italic text-sm text-white/80 leading-relaxed">
                "I can see you have the most talent among the members. Your expressions are good too. I think your vocals will improve a lot."
              </p>
              <span className="font-mono text-[9px] text-white/40 block mt-1 uppercase">
                - Jennie Kim (Main Rapper and Lead Vocalist of BLACKPINK)
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
