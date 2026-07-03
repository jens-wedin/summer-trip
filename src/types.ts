export type LatLng = [number, number];

export type Stop = {
  id: string;
  name: string;
  country: string;
  coords: LatLng;
  arrival?: string;
  notes?: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  done: boolean;
};

export type ImageItem = {
  src: string;
  caption?: string;
  credit?: string;
};

export type Lodging = {
  name: string;
  address?: string;
  url?: string;
  dates?: string;
  room?: string;
  parking?: string;
  price?: string;
  payment?: string;
  bookedVia?: string;
  description?: string;
  status?: "booked" | "pending" | "not-booked" | "home";
};

export type Resource = {
  title: string;
  url: string;
  note?: string;
};

export type ChargingStop = {
  name: string;
  country?: string;
  socIn?: string;
  socOut?: string;
  duration?: string;
  cost?: string;
  legToNext?: string;
};

export type ChargingPlan = {
  note?: string;
  stops: ChargingStop[];
};

export type EnRouteStop = {
  name: string;
  description: string;
};

export type Day = {
  id: number;
  date: string;
  weekday: string;
  title: string;
  kicker: string;
  from: Stop;
  to: Stop;
  waypoints?: Stop[];
  drivingKm: number;
  drivingDuration: string;
  driveNote?: string;
  lodging?: Lodging;
  charging?: ChargingPlan;
  enRouteStops?: EnRouteStop[];
  resources?: Resource[];
  story: string[];
  pullQuote?: string;
  /** File name of a trip photo (src/photos/) to use as the day's hero image. */
  heroPhoto?: string;
  images: ImageItem[];
  checklist: ChecklistItem[];
};

export type Trip = {
  title: string;
  subtitle: string;
  dateline: string;
  edition: string;
  byline: string;
  totalDays: number;
  totalKm: number;
  countries: string[];
  days: Day[];
};
