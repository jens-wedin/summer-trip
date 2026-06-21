// Optional, hand-written annotations for trip photos, keyed by file name.
//
// Photos render fine with NO entry here — this file only *enriches* them with a
// caption, date and/or place that show in the gallery and lightbox.
//
// To annotate a photo, add a line keyed by its file name, e.g.:
//   "IMG_0648.jpeg": { caption: "Fika på Vandalorum", place: "Värnamo", date: "21 juni" },

export type PhotoCaption = {
  caption?: string;
  date?: string;
  place?: string;
};

export const photoCaptions: Record<string, PhotoCaption> = {
  // Add entries here during the trip — see the example above.
};
