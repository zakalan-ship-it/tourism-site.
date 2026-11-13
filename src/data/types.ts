import type { L } from '../i18n/languages';

/** Key of a photo in src/assets/images (file name without extension). See images.ts. */
export type ImageKey = string;

export type Region = 'marmara' | 'aegean' | 'central' | 'mediterranean';

export interface Attraction {
  name: L;
  text: L;
}

export interface Destination {
  slug: string;
  region: Region;
  name: L;
  tagline: L;
  intro: L;
  attractions: Attraction[];
  bestTime: L;
  gettingThere: L;
  image: ImageKey;
  gallery?: ImageKey[];
  featured?: boolean;
}

export type TourCategory = 'cultural' | 'historical' | 'nature' | 'combined';
export type TourType = 'group' | 'private' | 'day';
/** Meal codes: B = breakfast, L = lunch, D = dinner */
export type Meal = 'B' | 'L' | 'D';

export interface ItineraryDay {
  title: L;
  text: L;
  meals?: Meal[];
}

export interface Departures {
  /** ISO date (YYYY-MM-DD) of first and last departure */
  from: string;
  to: string;
  /** 1 = Monday … 7 = Sunday. Omit for daily departures. */
  weekdays?: number[];
}

export interface Offer {
  /** Discount in percent, applied to priceFrom */
  discount: number;
  /** ISO date until which the offer can be booked */
  validUntil: string;
  label?: L;
}

export interface Tour {
  slug: string;
  title: L;
  summary: L;
  overview: L;
  destinations: string[]; // destination slugs, in visiting order
  days: number;
  nights: number;
  category: TourCategory;
  type: TourType;
  /** Starting price per person in site.currency. null = price on request. */
  priceFrom: number | null;
  maxGroup?: number;
  minTravellers?: number;
  departures: Departures | null; // null = on request
  highlights: L[];
  itinerary: ItineraryDay[];
  /** Keys of shared phrases in phrases.ts, or inline text */
  included: (string | L)[];
  excluded: (string | L)[];
  hotels?: { city: string; hotel: L }[];
  important?: (string | L)[];
  image: ImageKey;
  gallery?: ImageKey[];
  offer?: Offer;
  featured?: boolean;
}

export type ActivityCategory =
  | 'cultural'
  | 'historical'
  | 'bosphorus'
  | 'food'
  | 'balloon'
  | 'private'
  | 'shopping'
  | 'adventure'
  | 'family';

export interface Activity {
  slug: string;
  category: ActivityCategory;
  destination: string; // destination slug
  title: L;
  summary: L;
  description: L;
  /** Duration in hours (use 8+ for full day) */
  hours: number;
  priceFrom: number | null;
  includes: (string | L)[];
  meetingPoint: L;
  goodToKnow?: L[];
  image: ImageKey;
  offer?: Offer;
  featured?: boolean;
}

export interface Vehicle {
  id: string;
  name: L;
  models: string;
  passengers: number;
  luggage: number;
  features: L[];
  icon: 'sedan' | 'van' | 'vip' | 'minibus' | 'coach';
}

export interface TransferRoute {
  id: string;
  from: L;
  to: L;
  kind: 'airport' | 'city' | 'intercity';
  durationMin: number;
  /** One-way price per vehicle id. Missing = on request. */
  prices: Partial<Record<string, number>>;
}

export interface Testimonial {
  name: string;
  country: L;
  text: L;
  tour: string; // tour or activity slug
  rating: number;
}

export interface Inspiration {
  title: L;
  text: L;
  image: ImageKey;
  href: string; // path without language prefix, e.g. 'destinations/cappadocia'
  tag: L;
}
