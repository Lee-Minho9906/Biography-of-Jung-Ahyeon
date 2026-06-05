import { useState } from "react";
import { Sparkles, Globe, Landmark, GraduationCap, Award, BookOpen, Star, ArrowRight } from "lucide-react";
import { IMAGES } from "../data";

interface VocalAnalysisProps {
  onExploreImage: (url: string, title: string, desc: string, videoUrl?: string) => void;
}

interface LanguageData {
  id: string;
  name: string;
  flag: string;
  proficiency: string;
  desc: string;
  keyMoments: {
    title: string;
    description: string;
  }[];
  famousQuote: {
    original: string;
    phonetic?: string;
    translation: string;
  };
  metrics: {
    label: string;
    score: number;
  }[];
}

export default function VocalAnalysis({ onExploreImage }: VocalAnalysisProps) {
  const languages: LanguageData[] = [
    {
      id: "english",
      name: "English",
      flag: "US / GB",
      proficiency: "FLUENT / BILINGUAL MODE",
      desc: "Ahyeon communicates with a natural contemporary Western accent and superb flow, showing remarkable command of advanced vocabulary and grammar. Her speech during global media showcases highlights her readiness to connect with global audiences without language barriers.",
      keyMoments: [
        {
          title: "Official Global Press Conference",
          description: "Engaged directly with international journalists, answering complex queries regarding her artistic goals in fluent, spontaneous English.",
        },
        {
          title: "YG Global Vlog Chronicles",
          description: "Naturally transitions between languages while explaining her daily artistic thoughts, showing elite cognitive agility."
        }
      ],
      famousQuote: {
        original: "Thank you so much to all our global fans who waited. We will make you proud and showcase who BABYMONSTER truly is.",
        translation: "기다려주신 모든 글로벌 팬분들께 감사드립니다. 여러분이 자랑스러워할 수 있도록, BABYMONSTER가 진정 누구인지 보여드릴게요."
      },
      metrics: [
        { label: "Phonetic Accent Naturalness", score: 96 },
        { label: "Grammatical Syntactic Precision", score: 95 },
        { label: "Spontaneous Speaking Cadence", score: 95 }
      ]
    },
    {
      id: "chinese",
      name: "Chinese",
      flag: "CN",
      proficiency: "HIGHLY PROFICIENT MODE",
      desc: "Having practiced Mandarin intensely since her pre-debut childhood years, Ahyeon maintains incredibly clean tone control and standard pronunciation, allowing her to converse with overseas trainees and Chinese fans with deep cultural connection.",
      keyMoments: [
        {
          title: "BiliBili Special Broadcast",
          description: "Presented fluent, polite self-introductions in Mandarin and participated directly in fan games with zero translation lag.",
        },
        {
          title: "Pre-Debut Documentary Logging",
          description: "Chronicles show her practicing Hanzi vocabulary and prononciation tasks routinely during short breaks in the training lounge."
        }
      ],
      famousQuote: {
        original: "大家好，我是雅譞。谢谢你们一直支持我，我会继续努力、带给大家更好的舞台！",
        phonetic: "Dàjiā hǎo, wǒ shì Yǎxuān. Xièxiè nǐmen yīzhí zhīchí wǒ, wǒ huì jìxù nǔlì, dài gěi dàjiā gèng hǎo de wǔtái!",
        translation: "안녕하세요, 아현입니다. 저를 늘 응원해 주셔서 감사해요. 더 나은 무대를 보여드리기 위해 계속 노력하겠습니다!"
      },
      metrics: [
        { label: "Tonal Inflection Accuracy", score: 94 },
        { label: "Conversational Phrasing Fluency", score: 91 },
        { label: "Vocabulary Context Sensitivity", score: 88 }
      ]
    },
    {
      id: "korean",
      name: "Korean",
      flag: "KR",
      proficiency: "NATIVE SPEAKER ACTIVE",
      desc: "Native speaker characterized by exceptionally polite, mature articulation. Highly praised by media team selectors for her structured public communication, respectful tone, and clear presentation capability.",
      keyMoments: [
        {
          title: "National Broadcasting Interviews",
          description: "Praised by professional hosts for her organized answers, polite body language, and articulate delivery of her feelings.",
        },
        {
          title: "Fan Cafe Letters & Insights",
          description: "Consistently composes long, reflective posts that showcase deep vocabulary depth, empathy, and excellent self-expression."
        }
      ],
      famousQuote: {
        original: "꿈을 향해 달려가는 길에 지치고 힘들 때도 있겠지만, 저는 매 순간 여러분을 생각하며 일어설 힘을 얻습니다.",
        translation: "Even when there are exhausting moments on the path to my dream, I gain the strength to stand up by thinking of all of you."
      },
      metrics: [
        { label: "Vocabulary Nuance & Depth", score: 99 },
        { label: "Grammar & Structure Elegance", score: 99 },
        { label: "Broadcast Presentation Delivery", score: 98 }
      ]
    }
  ];

  const [activeLangTab, setActiveLangTab] = useState("english");
  const currentLang = languages.find((l) => l.id === activeLangTab) || languages[0];

  const academicRecords = [
    {
      title: "Ara Middle School",
      role: "Class President & Student Counselor",
      highlight: "Demonstrated early charismatic qualities and academic integrity. Formed a highly trusted presence among teachers and students.",
      year: "Pre-debut era"
    },
    {
      title: "Hanlim Multi Art High School",
      role: "Applied Music Scholastic Standout",
      highlight: "Enrolled in the prestigious vocal department while training. Balanced grueling idol preparation with outstanding scholastic compliance.",
      year: "Active academic years"
    }
  ];

  return (
    <section 
      id="vocal-analysis"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION VI
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            Linguistic & Academic Excellence
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          INTELLECTUAL <span className="text-monster-red">ACCORD</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          MULTILINGUAL FLUENCY • ACADEMIC RECORD & SCHOLARLY LEADERSHIP PROFILE
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Interactive Multilingual Showcase: Left 6 Columns */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-lg border border-white/5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              {/* Header Info */}
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-monster-red animate-pulse" />
                  <span className="font-mono text-[9px] tracking-widest uppercase font-black text-white">
                    MULTILINGUAL DECK
                  </span>
                </div>
                
                <span className="font-mono text-[8px] uppercase px-2 py-0.5 bg-white/5 text-white/40 tracking-widest rounded border border-white/5">
                  GLOBAL INTEGRITY INTERPOLATION
                </span>
              </div>

              {/* Language Selection Tabs */}
              <div className="space-y-1.5">
                <span className="font-mono text-[7px] text-monster-red tracking-widest uppercase font-extrabold block">
                  Select Language Record
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLangTab(lang.id)}
                      className={`py-2 px-1 rounded text-center transition-all border ${
                        activeLangTab === lang.id
                          ? "bg-monster-red/15 border-monster-red/50 text-white"
                          : "bg-[#0b0b0b] border-white/5 text-white/40 hover:border-white/15 hover:text-white/80"
                      }`}
                    >
                      <h4 className="font-sans text-[10px] font-black uppercase tracking-wide">
                        {lang.name}
                      </h4>
                      <p className="font-mono text-[7px] text-white/30 truncate mt-0.5">
                        {lang.flag}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Description Card */}
              <div className="space-y-2 bg-[#080808] border border-white/5 p-4 rounded">
                <div className="flex justify-between items-center border-b border-white/[0.04] pb-1.5">
                  <span className="font-mono text-[8px] text-monster-red font-bold uppercase tracking-wider">
                    Proficiency Status
                  </span>
                  <span className="font-mono text-[8.5px] text-white/80 uppercase font-black">
                    {currentLang.proficiency}
                  </span>
                </div>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  {currentLang.desc}
                </p>
              </div>

              {/* Transcribed Quote Accent Section */}
              <div className="bg-[#0b0a0b]/40 border border-white/5 p-4 rounded relative overflow-hidden">
                <div className="absolute top-2.5 right-3">
                  <span className="font-mono text-[7px] text-white/20 uppercase tracking-widest block">
                    SPEECH QUOTE DRAFT
                  </span>
                </div>
                <span className="font-mono text-[7px] text-monster-red block font-bold uppercase mb-1">
                  TRANSCRIPTION:
                </span>
                <p className="font-sans text-xs md:text-sm font-black text-white italic tracking-wide leading-relaxed mb-2">
                  "{currentLang.famousQuote.original}"
                </p>
                {currentLang.famousQuote.phonetic && (
                  <p className="font-mono text-[8px] text-white/40 uppercase tracking-wider mb-2 leading-normal">
                    Phonetic: {currentLang.famousQuote.phonetic}
                  </p>
                )}
                <div className="pt-2 border-t border-white/[0.04] flex items-start gap-1">
                  <span className="font-mono text-[7.5px] text-white/35 font-bold uppercase mt-0.5">Translation:</span>
                  <p className="font-sans text-[11px] text-white/60 leading-snug">
                    {currentLang.famousQuote.translation}
                  </p>
                </div>
              </div>

              {/* Speaking metrics score */}
              <div className="bg-[#0a0a0a] border border-white/5 p-3 rounded space-y-2">
                <span className="font-mono text-[7px] text-white/40 tracking-wider uppercase font-bold block">
                  FLUENCY EVALUATION METRICS
                </span>
                <div className="space-y-2">
                  {currentLang.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <div className="flex justify-between text-[8px] font-mono">
                        <span className="text-white/50 uppercase">{m.label}</span>
                        <span className="text-monster-red font-bold">{m.score}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-monster-red to-electric-crimson rounded-full transition-all duration-500"
                          style={{ width: `${m.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Moments list */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <span className="font-mono text-[7px] text-monster-red block tracking-widest font-black uppercase">
                INTEGRITY STANDOUT HIGHLIGHTS:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentLang.keyMoments.map((moment, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 p-2 rounded hover:border-monster-red/10 transition-colors">
                    <span className="font-sans text-[9px] font-black uppercase text-white block truncate">
                      {moment.title}
                    </span>
                    <p className="font-mono text-[8px] text-white/45 mt-0.5 leading-snug line-clamp-2">
                      {moment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Academic Honors & Leadership Records: Right 6 Columns */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Academic records component block */}
            <div className="glass-panel p-6 rounded-lg border border-white/5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-monster-red" />
                  <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
                    ACADEMIC CHRONICLE & HONORS
                  </span>
                </div>

                <div className="space-y-4">
                  {academicRecords.map((record, idx) => (
                    <div key={idx} className="p-3 bg-[#080808] border border-white/5 rounded hover:border-monster-red/10 transition-colors relative overflow-hidden">
                      <div className="absolute top-2 right-3 font-mono text-[7.5px] text-white/20 uppercase tracking-widest">
                        {record.year}
                      </div>
                      <div className="flex flex-col gap-1 mb-2">
                        <span className="font-sans text-[11px] text-white font-black uppercase tracking-wide">
                          {record.title}
                        </span>
                        <span className="font-mono text-[8px] text-monster-red uppercase font-bold tracking-wider">
                          Role: {record.role}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-white/70 leading-relaxed">
                        {record.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarly leadership insights banner */}
              <div className="bg-gradient-to-r from-monster-red/5 to-transparent border-l border-monster-red p-3 rounded-r mt-4">
                <span className="font-mono text-[8px] text-monster-red font-black uppercase block mb-1">
                  CHARACTER & CHARISMA ANALYSIS
                </span>
                <p className="font-sans text-[10px] text-white/60 leading-relaxed">
                  Ahyeon's early records of being selected as student body ambassador and classroom president underscore her balanced discipline, organizational qualities, and respectful speech patterns.
                </p>
              </div>
            </div>

            {/* Visual Portrait Card highlighting her academic image */}
            <div 
              onClick={() => onExploreImage(IMAGES.portrait, "Academic & Pre-debut Portrait", "Ahyeon's pre-debut student profile representation.")}
              className="relative group rounded-lg overflow-hidden border border-monster-red/20 shadow-[0_0_30px_rgba(226,30,58,0.12)] min-h-[190px] flex flex-col justify-end p-6 cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={IMAGES.portrait}
                  alt="Ahyeon scholarly portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-50 group-hover:scale-103 transition-all duration-700"
                />
                
                {/* Intense glowing gradients overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-monster-red/10 via-transparent to-transparent"></div>
              </div>

              {/* Dynamic Tribute Contents */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-monster-red animate-ping"></span>
                  <span className="font-mono text-[9px] uppercase text-monster-red font-bold tracking-widest">
                    SCHOLASTIC EXCELLENCE PROFILE
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-black text-white tracking-wide uppercase">
                  THE PRESTIGIOUS ALL-ROUNDER
                </h3>
                
                <p className="font-sans text-xs text-white/70 max-w-md leading-relaxed">
                  Excelling academically while mastering three separate languages and daily YG test assignments, her relentless work rate embodies the true 'all-round genius' title.
                </p>

                <div className="pt-2 font-mono text-[9px] text-white uppercase tracking-wider block">
                  [ CLICK TO EXPAND PROFILE IMAGE ]
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
