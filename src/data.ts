import { Milestone, Era, DiscographyItem, GalleryPhoto, MediaItem, Quote, FunFact, TimelineNode } from "./types";

export const IMAGES = {
  // HERO
  hero: "/images/ahyeon/hero.jpg",

  // MAIN PORTRAIT
  portrait: "/images/ahyeon/portrait.jpg",

  // VOCAL / PERFORMANCE ERA
  vocalCover: "/images/ahyeon/vocal.jpg",

  rapStage: "/images/ahyeon/rap.jpg",

  // EARLY / TRAINEE
  pianoEarly: "/images/ahyeon/young.jpg",

  danceStudio: "/images/ahyeon/dance.jpg",

  microphoneStage: "/images/ahyeon/live.jpg",

  // SECTION VIII: DANCE & PERFORMANCE - INDIVIDUAL PICTURE SOURCE LINKS
  // Customized separate image reference to prevent sharing/overlap across sections
  dancePerformance: "/images/ahyeon/dance-performance.jpg",

  // FASHION / EDITORIAL
  fashionCrimson: "/images/ahyeon/fashion-crimson.jpg",

  fashionTrench: "/images/ahyeon/fashion-trench.jpg",

  fashionLace: "/images/ahyeon/fashion-lace.jpg",

  fashionRunway: "/images/ahyeon/fashion-runway.jpg",

  // SECTION IX: FASHION & VISUALS - INDIVIDUAL PICTURE SOURCE LINKS
  // Customized separate image references to prevent sharing/overlap across sections
  fashionConcept: "/images/ahyeon/fashion-concept.jpg",
  fashionPerformance: "/images/ahyeon/fashion-performance.jpg",

  // ALBUM ERA
  albumBatterUp: "/images/ahyeon/BatterUp.jpg",
  albumStuckInTheMiddle: "/images/ahyeon/StuckInTheMiddle.jpg",
  albumBabymon7er: "/images/ahyeon/BABYMON7ER.jpg",
  albumDrip: "/images/ahyeon/DRIP.jpg",
  albumGhost: "/images/ahyeon/Ghost.jpg",
  albumHotSauce: "/images/ahyeon/HotSauce.jpg",
  albumBatterUpJp: "/images/ahyeon/BatterUp - JP.jpg",
  albumWeGoUp: "/images/ahyeon/WeGoUp.jpg",
  albumChoom: "/images/ahyeon/CHOOM.jpg",

  training_2018_audition: "/images/ahyeon/YG.jpg",
  training_2019_growth: "/images/ahyeon/trainee.jpg",
  training_2022_global: "/images/ahyeon/evaluation.jpg",
  training_2022_breakthrough: "/images/ahyeon/comeback.jpg",

  // SECTION V: BABYMONSTER JOURNEY - INDIVIDUAL PICTURE SOURCE LINKS
  // Customized separate image references to prevent sharing/overlap across sections
  journey_2023_reveal: "/images/ahyeon/journey-reveal.jpg",
  journey_2023_hiatus: "/images/ahyeon/journey-hiatus.jpg",
  journey_2024_sheesh: "/images/ahyeon/journey-sheesh.jpg",
  journey_2024_drip: "/images/ahyeon/journey-drip.jpg",

  // SECTION XII: INTERACTIVE TIMELINE - INDIVIDUAL PICTURE SOURCE LINKS
  // Customized separate image references to prevent sharing/overlap across sections
  timeline_2007_birth: "/images/ahyeon/timeline-birth.jpg",
  timeline_2018_entrance: "/images/ahyeon/timeline-entrance.jpg",
  timeline_2023_reveal: "/images/ahyeon/timeline-reveal.jpg",
  timeline_2024_return: "/images/ahyeon/timeline-return.jpg",
  timeline_2024_drip: "/images/ahyeon/timeline-drip.jpg",

  // ALIAS STYLING FALLBACK KEY
  albumSheesh: "/images/ahyeon/BABYMON7ER.jpg",
};

export const INSTAGRAM_PERFORMANCES_PLACEHOLDER = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop";

export const EARLY_LIFE_PEAKS: Milestone[] = [
  {
    id: "el-1",
    year: "Early Life",
    title: "A Misty Start",
    subtitle: "Chuncheon, Gangwon-do",
    description: "Born in the beautiful Lakeside City on April 11, 2007. Ahyeon enjoyed singing from a very early age, showcasing high pitch accuracy while playing with local children's songs.",
    imageUrl: IMAGES.pianoEarly
  },
  {
    id: "el-2",
    year: "Hometown",
    title: "Hometown Influence",
    subtitle: "Hometown Musical Influence",
    description: "Hailing from Chuncheon, her peaceful childhood was painted with melodies. She often accompanied her parents listening to classic pop, sparking her interest in western R&B legends.",
    imageUrl: IMAGES.microphoneStage
  },
  {
    id: "el-3",
    year: "Early Training",
    title: "Ara Dance Academy",
    subtitle: "Sifting raw talent with discipline",
    description: "Enrolling in dance training, Ahyeon displayed remarkable adaptability. Instructors recalled she learned routines in half the time of other trainees, showing early potential as a multi-threat center.",
    imageUrl: IMAGES.danceStudio
  }
];

export const TRAINING_YEARS_MILESTONES: Milestone[] = [
  {
    id: "tr-1",
    year: "2018",
    title: "The YG Audition",
    subtitle: "An undeniable entrance",
    description: "Ahyeon auditioned with high vocal charisma, instantly capturing the eyes and ears of YG Entertainment's veteran casting directors with her powerful chest-voice projection and effortless groove.",
    imageUrl: IMAGES.training_2018_audition
  },
  {
    id: "tr-2",
    year: "2019 - 2021",
    title: "Trainee Growth",
    subtitle: "Forging the Ultimate Ace",
    description: "Trained heavily across standard core disciplines—hip hop rap mechanics, modern hip-hop dance foundations, and deep classical vocal registers. Ahyeon achieved consistently high rankings during monthly evaluations.",
    imageUrl: IMAGES.training_2019_growth
  },
  {
    id: "tr-3",
    year: "2022",
    title: "Global Evaluations",
    subtitle: "Polishing multi-lingual fluency",
    description: "Perfected English, Korean, and Chinese to transition smoothly across global charts. Spent months solidifying vocal runs, high register control, and live choreographic breathing.",
    imageUrl: IMAGES.training_2022_global
  },
  {
    id: "tr-4",
    year: "Late 2022",
    title: "The Final Breakthrough",
    subtitle: "Preparing for next-gen kpop center",
    description: "Chosen as a fundamental line-up member for YG's next-movement flagship group. Her final stage survival evaluations earned deep praises from legendary producers, labeling her the ultimate dynamic all-rounder.",
    imageUrl: IMAGES.training_2022_breakthrough
  }
];

export const BABYMONSTER_JOURNEY: Era[] = [
  {
    id: "journey-1",
    period: "2023.01",
    title: "YG NEXT MOVEMENT",
    headline: "The Reveal of the Millennium ACE",
    description: "Ahyeon was formally introduced to the community. Her teaser video performing 'Dangerously' instantly went viral, registering tens of millions of views and establishing her as the standout global performance threat.",
    imageUrl: IMAGES.journey_2023_reveal,
    details: ["Aura teaser reveal", "Dangerously arrangement showcase", "Viral organic streaming numbers"]
  },
  {
    id: "journey-2",
    period: "2023.11",
    title: "TEASER ERA & HEALTH PAUSE",
    headline: "The Quiet Sacrifice before the Dawn",
    description: "Just prior to the official group pre-release, Ahyeon experienced minor physical hardships and took a temporary hiatus to prioritize full health restoration, ensuring a robust long-term career projection.",
    imageUrl: IMAGES.journey_2023_hiatus,
    details: ["Prioritizing health first", "Global fan devotion campaigns", "Sustained legacy preparation"]
  },
  {
    id: "journey-3",
    period: "2024.04",
    title: "BABYMONS7ER DEBUT & SHEESH",
    headline: "The True Return of the Center Anchor",
    description: "Re-debuting as the primary multi-threat center with the first EP album, BABYMONS7ER. Her iconic lines in 'SHEESH' dominated TikTok challenges and music show stages.",
    imageUrl: IMAGES.journey_2024_sheesh,
    details: ["Unveiled 'SHEESH' live center role", "Unmatched vocal belts on music television", "Fastest breakout 5th Gen trendsetters"]
  },
  {
    id: "journey-4",
    period: "2024.11+",
    title: "CLIK CLAK & DRIP promotional era",
    headline: "The Pinnacle Hip-Hop Dominance",
    description: "BABYMONSTER launched their first studio album featuring heavy hip-hop rhythms. Ahyeon delivered blazing verses on 'CLIK CLAK' and high executive visuals in 'DRIP'.",
    imageUrl: IMAGES.journey_2024_drip,
    details: ["Versatile rap flow mastery", "Sophisticated fashion collaborations", "Sustained YouTube/Spotify breakout success"]
  }
];

export const DISCOGRAPHY_ITEMS: DiscographyItem[] = [
  {
    id: "disco-1",
    title: "Batter Up",
    type: "Single",
    year: "2023",
    description: "The energetic hip-hop debut showing off intense base scales and a powerful anthem-inspired stadium chorus.",
    lyricsQuote: "(You) got a lot to say. What a big mistake",
    imageUrl: IMAGES.albumBatterUp,
    tracklist: ["BATTER UP (Title)"],
    vibe: "Fierce trap beats, competitive stadium shout, heavy base lines"
  },
  {
    id: "disco-2",
    title: "Stuck in the Middle",
    type: "Single",
    year: "2024",
    description: "A soul-stirring vocal ballad displaying beautiful harmonies and a delicate piano accompaniment. Highlighted by high control and expressive vocals.",
    lyricsQuote: "You lift my feet off of the ground. Keep me spinnin’ around and around",
    imageUrl: IMAGES.albumStuckInTheMiddle,
    tracklist: ["Stuck In The Middle"],
    vibe: "Soulful pop ballad, tender piano, grand cinematic strings"
  },
  {
    id: "disco-3",
    title: "BABYMON7ER",
    type: "Mini-Album",
    year: "2024",
    description: "The definitive arrival of BABYMONSTER's full seven-member formation. Anchored by heavy physical rhythms, dark brass, and pristine vocal climaxes.",
    lyricsQuote: "Fly away, 온 세상을 뒤집어. Come on, let's ride!",
    imageUrl: IMAGES.albumBabymon7er,
    tracklist: ["MONSTERS (Intro)", "SHEESH (Title)", "LIKE THAT", "Stuck In The Middle (7 Ver.)", "BATTER UP (7 Ver.)", "DREAM", "Stuck In The Middle (Remix)"],
    vibe: "Aggressive brass, luxury dark, futuristic anthems"
  },
  {
    id: "disco-4",
    title: "DRIP",
    type: "Album",
    year: "2024",
    description: "BABYMONSTER's first full-length studio album delivering rich genre-blending tracks, including high-energy hip hop flows and luxury trap productions.",
    lyricsQuote: "다시 일어나. Now watch me do it all again...",
    imageUrl: IMAGES.albumDrip,
    tracklist: ["CLIK CLAK", "DRIP (Title)", "Love, Maybe", "Really Like You", "BILLIONAIRE", "Woke Up In Tokyo", "FOREVER", "BATTER UP (Remix)", "Love In My Heart"],
    vibe: "Ultimate luxury hip-hop, heavy modern trap, slick R&B grooves"
  },
  {
    id: "disco-5",
    title: "Ghost",
    type: "Single",
    year: "2025",
    description: "An atmospheric dark-pop single featuring haunting synth arpeggios and incredibly sharp rap lines.",
    lyricsQuote: "I can see right through you, baby",
    imageUrl: IMAGES.albumGhost,
    tracklist: ["Ghost (Title)"],
    vibe: "Haunting dark pop, aggressive synthbass, echo vocal runs"
  },
  {
    id: "disco-6",
    title: "Hot Sauce",
    type: "Single",
    year: "2025",
    description: "A high-spicy, energetic club anthem showcasing fast syllables and a highly addictive dance-break rhythm.",
    lyricsQuote: "I don't think you're ready, feelin' deadly tonight. B-A-B-Y-M-O-N, about to blow your mind",
    imageUrl: IMAGES.albumHotSauce,
    tracklist: ["Hot Sauce (Title)"],
    vibe: "Upbeat brass, high-tempo dance-pop, fiery synth loops"
  },
  {
    id: "disco-7",
    title: "Batter Up - JP Ver",
    type: "Single",
    year: "2024",
    description: "The official Japanese version of their blockbuster debut single, customized for the Japanese market with fluent lyricism and high-energy vocals.",
    lyricsQuote: "君의心以外は欲しくない. I would never do you wrong. You'll regret it when I'm gone",
    imageUrl: IMAGES.albumBatterUpJp,
    tracklist: ["BATTER UP (Japanese Ver.)"],
    vibe: "Energetic Japanese trap, high-vibe vocals, stadium chanting"
  },
  {
    id: "disco-8",
    title: "We Go Up",
    type: "Mini-Album",
    year: "2025",
    description: "A powerful mini-album symbolizing their unstoppable global ascension and high group synergy.",
    lyricsQuote: "Copy, copy, copy, copy 'til the error pop up. Copy, copy, wanna be me, but you're never gonna. They all eatin' my leftovers, I left over what's left over. Like ring, ring, come and get closer, we take over, that's game over",
    imageUrl: IMAGES.albumWeGoUp,
    tracklist: ["WILD", "We Go Up (Title)", "Supa Dupa Luv", "Psycho"],
    vibe: "Empowering synth-pop, bright summer anthems, soaring harmonies"
  },
  {
    id: "disco-9",
    title: "CHOOM",
    type: "Mini-Album",
    year: "2025",
    description: "A dynamic, performance-oriented mini-album named after the Korean word 'DANCE', celebrating their extreme choreography synchronizations.",
    lyricsQuote: "Baby, 너와 나의 시간 춤, 춤, 춤, 춤",
    imageUrl: IMAGES.albumChoom,
    tracklist: ["MOON", "CHOOM (Title)", "Lock In", "Like It"],
    vibe: "Deep house grooves, glitchy synthesizers, heavy performance bass"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    category: "Editorial",
    title: "The Crimson Monolith",
    description: "Ahyeon performing high-fashion shapes in a specialized crimson-rim, black structural suit.",
    imageUrl: IMAGES.fashionCrimson
  },
  {
    id: "gal-2",
    category: "Airport",
    title: "Celebrity Off-Duty Look",
    description: "An effortless charcoal designer twilight trench jacket layout, accented by sleek dark glasses.",
    imageUrl: IMAGES.fashionTrench
  },
  {
    id: "gal-3",
    category: "Detail",
    title: "Gothic Silk Close-Up",
    description: "A magazine macro layout highlighting high-contrast silver necklace work against detailed dark velvet lace.",
    imageUrl: IMAGES.fashionLace
  },
  {
    id: "gal-4",
    category: "Stage",
    title: "Sovereign Stage Pedestals",
    description: "A wide cinematic runway museum setting displaying high-end active performance designs under heavy red light leaks.",
    imageUrl: IMAGES.fashionRunway
  },
  {
    id: "gal-5",
    category: "Concept",
    title: "The Visionary Ace Portrait",
    description: "Cinematic close-up showing a high-contrast noir gaze, layered with subtle lighting curves.",
    imageUrl: IMAGES.fashionConcept
  },
  {
    id: "gal-6",
    category: "Performance",
    title: "Electric Intensity Execution",
    description: "Capturing a grand choreography apex under high-exertion smoke environments.",
    imageUrl: IMAGES.fashionPerformance
  }
];

export const MEDIA_ARCHIVE: MediaItem[] = [
  {
    id: "media-1",
    title: "Ahyeon Special Cover 'Dangerously'",
    category: "Performances",
    duration: "2:15",
    imageUrl: IMAGES.vocalCover,
    videoUrl: "https://youtu.be/xw7Y2gviWbA?si=jsWyDGPoTIzAIEjh",
    description: "The viral vocal showcase that set a historical benchmark for 5th generation female vocalists.",
    views: "45M+"
  },
  {
    id: "media-2",
    title: "SHEESH Official M/V Center Focus",
    category: "Performances",
    duration: "3:30",
    imageUrl: IMAGES.albumSheesh,
    videoUrl: "https://youtu.be/2wA_b6YHjqQ?si=oChVveaPrau_fihq",
    description: "Watch the synchronized movement blocks and critical visual focus points from Ahyeon during her comeback highlight.",
    views: "12M+"
  },
  {
    id: "media-3",
    title: "Behind the Scenes: SHEESH",
    category: "BTS",
    duration: "15:40",
    imageUrl: IMAGES.portrait,
    videoUrl: "https://youtu.be/offkoMoFh5U?si=JsH05TovZEXfm3uE",
    description: "An intimate look into Ahyeon's obsessive focus in the soundbooth, refining high belt pitches with YG chief directors.",
    views: "5.4M"
  },
  {
    id: "media-4",
    title: "Official Comeback Video'",
    category: "Interviews",
    duration: "10:15",
    imageUrl: IMAGES.hero,
    videoUrl: "https://youtu.be/1myrYL8ybzM?si=Z8sGPkjXzT-JVFky",
    description: "Ahyeon discusses her emotional journey, overcoming hardships, and her undying loyalty containing fan expressions.",
    views: "8.2M"
  }
];

export const MEMBER_QUOTES: Quote[] = [
  {
    id: "q-1",
    quote: "It felt natural for Ahyeon to debut with us as 7.",
    author: "Asa",
    relationship: "BABYMONSTER Member, Lead Rapper"
  },
  {
    id: "q-2",
    quote: "A warrior with too many weapons.",
    author: "YG Entertainment Director",
    relationship: "YG Entertainment CEO, Yang Hyun-suk"
  },
  {
    id: "q-3",
    quote: "Ahyeon is the most technically gifted trainee I've ever seen.",
    author: "Anonmous Vocal Coach",
    relationship: "YG Vocal Coach"
  }
];

export const CORE_STATISTICS = {
  vocalRange: {
    low: "C3",
    mid: "A5",
    high: "G6 (Whistle)",
    score: 98,
    metric: "Resonance Control"
  },
  rapAttack: {
    syllablesPerSec: "8.4",
    varietyKEC: "3 Languages",
    vibe: "Elastic Rhythm Focus",
    score: 95,
  },
  dancePower: {
    synchronization: "96.4%",
    centerPresence: "99%",
    staminaPoints: "98/100"
  },
  chartMilestones: [
    { year: "Dangerously Cover", value: 45 },
    { year: "Debut Reveal", value: 65 },
    { year: "SHEESH Era", value: 180 },
    { year: "DRIP Comeback", value: 290 },
  ]
};

export const FUN_FACTS: FunFact[] = [
  {
    id: "fact-1",
    title: "Perfect Vocal Memory",
    description: "Can replicate highly complex English R&B vocal riffs on her very first listen, displaying near-perfect relative pitch.",
    icon: "music_note"
  },
  {
    id: "fact-2",
    title: "Trilingual Prowess",
    description: "Fluent in Korean, English, and Chinese; studied diligently since early childhood to reach immediate native rhythm levels.",
    icon: "translate"
  },
  {
    id: "fact-3",
    title: "The ISTP Persona",
    description: "Affectionately known as 'The Virtuoso'. Analytical, independent, extremely focused on technical mastery of tools, choreography and stage mechanics.",
    icon: "psychology"
  },
  {
    id: "fact-4",
    title: "Pre-Show Focus Ritual",
    description: "Spends exactly 15 minutes listening to silent rhythm beats or classical piano to calm her heartbeat before heavy athletic dance stages.",
    icon: "hourglass_empty"
  }
];

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: "node-1",
    era: "2007",
    title: "Chuncheon Birth",
    desc: "Born April 11, in the Lakeside city of Chuncheon, showcasing immediate absolute pitch tendencies with classic toys.",
    imageUrl: IMAGES.timeline_2007_birth
  },
  {
    id: "node-2",
    era: "2018",
    title: "The YG Entrance",
    desc: "Auditioned successfully for YG Entertainment, registering extreme high praise for vocal placement and charisma.",
    imageUrl: IMAGES.timeline_2018_entrance
  },
  {
    id: "node-3",
    era: "2023.01",
    title: "Dangerously Reveal",
    desc: "First Introduced under YG NEXT MOVEMENT teaser, capturing 45,000,000 viral views inside weeks.",
    imageUrl: IMAGES.timeline_2023_reveal
  },
  {
    id: "node-4",
    era: "2024.04",
    title: "The SHEESH Return",
    desc: "Re-entered the group line-up for the official debut self-titled EP, dominating central hooks with absolute ease.",
    imageUrl: IMAGES.timeline_2024_return
  },
  {
    id: "node-5",
    era: "2024.11",
    title: "DRIP LP Premiere",
    desc: "Demonstrated heavy dual multi-threat capacities as prime vocalist and rapper on title track DRIP.",
    imageUrl: IMAGES.timeline_2024_drip
  }
];

