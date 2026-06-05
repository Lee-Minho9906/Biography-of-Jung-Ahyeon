export interface ProfileCard {
  label: string;
  value: string | string[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  percentage?: number;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

export interface Era {
  id: string;
  period: string;
  title: string;
  headline: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface DiscographyItem {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  lyricsQuote: string;
  imageUrl: string;
  tracklist: string[];
  vibe: string;
}

export interface GalleryPhoto {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: "Interviews" | "Performances" | "Fancams" | "BTS";
  duration: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  views: string;
}

export interface Quote {
  id: string;
  quote: string;
  author: string;
  relationship: string;
}

export interface FunFact {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineNode {
  id: string;
  era: string;
  title: string;
  desc: string;
  imageUrl: string;
}

