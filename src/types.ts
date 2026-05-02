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
  lodging?: { name: string; address?: string; url?: string };
  story: string[];
  pullQuote?: string;
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
