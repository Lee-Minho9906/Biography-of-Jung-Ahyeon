import { useState } from "react";
import { GALLERY_PHOTOS } from "../data";
import { Eye, Heart, Compass, Camera, Sparkles } from "lucide-react";

interface FashionVisualsProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function FashionVisuals({ onExploreImage }: FashionVisualsProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Editorial", "Stage", "Concept", "Airport"];

  const filteredPhotos = selectedFilter === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === selectedFilter || 
      (selectedFilter === "Concept" && (photo.category === "Concept" || photo.category === "Performance" || photo.category === "Detail")));

  return (
    <section 
      id="fashion-visuals"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION IX
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            AESTHETIC & TEXTURE LAB
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          FASHION & <span className="text-monster-red">VISUALS</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          HIGH-END LUXURY EDITORIAL EDIT • GOTHIC ROMANTIC TEXTURE MATRICES
        </p>

        {/* Categories toggler controls */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/5 pb-4">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`font-mono text-[10px] uppercase py-2.5 px-5 tracking-widest rounded border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-monster-red border-monster-red text-white font-bold drop-shadow-[0_0_12px_#E21E3A]"
                    : "bg-white/[0.01] border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => {
            return (
              <div
                key={photo.id}
                onClick={() => onExploreImage(photo.imageUrl, photo.title, photo.description)}
                className="group relative rounded-lg overflow-hidden border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden transition-all duration-500 hover:border-monster-red/30 hover:-translate-y-1.5"
              >
                {/* Image frame */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.85] saturation-90 group-hover:brightness-100 group-hover:saturation-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Dark subtle overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Info Overlay Box */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[8px] text-monster-red block tracking-widest uppercase font-bold">
                    {photo.category} • CLASSIFICATION
                  </span>
                  
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mt-0.5">
                    {photo.title}
                  </h3>
                  
                  <p className="font-sans text-[10px] text-white/60 mt-1 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[8px] font-mono tracking-wider text-monster-red font-bold">
                    <span>VIEW IMAGE</span>
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Categories indicator top layout */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 font-mono text-[8px] border border-white/10 rounded uppercase leading-none">
                  {photo.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global instructions stamp */}
        <div className="text-center py-6 mt-8 border-t border-white/5">
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em]">
            CLICK ANY PHOTO TO EXPERIENCE THE LUXURY GALLERY IN FULL RES
          </p>
        </div>

      </div>
    </section>
  );
}
