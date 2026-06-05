import { Award, Compass, Heart, Activity, Star, Eye } from "lucide-react";
import { IMAGES } from "../data";

interface DancePerformanceProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function DancePerformance({ onExploreImage }: DancePerformanceProps) {
  const danceMetrics = [
    { label: "Physical Synchronization Index", stat: "96.4%", desc: "Near-flawless visual angles matching teammates' limb placements during rapid tempo jumps." },
    { label: "Kinetic Frame Stamina", stat: "98 / 100", desc: "Maintains intense pelvic stability and back curvature control over a full 4.5-minute athletic stage." },
    { label: "Center Magnetic Aura", stat: "99%", desc: "Instant transition of facial gravity to cameras when stepping to the forefront spotlight nodes." },
  ];

  return (
    <section 
      id="dance-performance"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION VIII
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            CHOREOGRAPHIC METRIC SCHEMAS
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          DANCE & <span className="text-monster-red">PERFORMANCE</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          HIGH-EXERTION ATHLETIC DYNAMICS • METICULOUS SPOTLIGHT SYNCHRONIZATION
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          
          {/* Detailed Kinetic Metrics Card list: Left 6 columns */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
              STAGE CHOREOGRAPHY DYNAMICS
            </span>

            {danceMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className="glass-panel p-5 rounded-lg border border-white/5 hover:border-monster-red/20 transition-all space-y-2 relative overflow-hidden group"
              >
                {/* Micro accent block */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-monster-red transition-all group-hover:w-1.5 pointer-events-none"></div>

                <div className="flex justify-between items-center pl-2">
                  <span className="font-mono text-[10px] text-white/45 uppercase tracking-wider block">
                    {metric.label}
                  </span>
                  
                  <span className="font-display text-lg font-black text-white glow-text-red">
                    {metric.stat}
                  </span>
                </div>

                <p className="font-sans text-xs text-white/70 pl-2 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}

            {/* Custom live evaluation note */}
            <div className="p-4 bg-white/[0.01] border-l-2 border-monster-red/30 rounded-r text-white/80 italic text-xs leading-relaxed flex gap-3">
              <Activity className="w-5 h-5 text-monster-red shrink-0" />
              <div>
                "Her stage posture displays immense skeletal control. Even when delivering high vocal belts, her core remains heavily balanced, preventing wobbling of visual camera axes."
              </div>
            </div>

          </div>

          {/* Epic Large Gilded Center Visual: Right 6 columns */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            
            {/* Visual glow backdrop circle */}
            <div className="absolute w-[80%] h-[80%] bg-monster-red/5 rounded-full blur-[70px] -z-10 animate-pulse duration-5000"></div>

            <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group cursor-pointer">
              
              <img
                src={IMAGES.dancePerformance}
                alt="Ahyeon dance execution studio focus"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover filter brightness-95 group-hover:scale-103 transition-transform duration-700"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 text-white">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-monster-red uppercase block font-bold">EXCELLENCE ARCHIVE FILE</span>
                    <h3 className="font-display text-lg font-black tracking-wide uppercase leading-none">THE KINETIC MATRIX</h3>
                    <p className="font-sans text-[11px] text-white/70">YG Headquarters Dance Studio evaluations.</p>
                  </div>

                  <button
                    onClick={() => onExploreImage(IMAGES.dancePerformance, "The Kinetic Matrix Study", "Macro alignment scan of core muscle structure and alignment indices during high speed choreo segments.")}
                    className="p-1 px-3 bg-monster-red hover:bg-electric-crimson text-white text-[10px] font-mono tracking-wider rounded transition-colors"
                  >
                    ZOOM
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
