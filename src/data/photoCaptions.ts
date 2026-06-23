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
  // Dag 1 · söndag 21 juni — Stockholm → Jönköping → Vandalorum → Malmö
  "IMG_0648.jpeg": { caption: "Avresa — hela familjen i vagnen", date: "21 juni", place: "Stockholm" },
  "IMG_0650.jpeg": { caption: "Snabbladdning och lunch vid Vättern", date: "21 juni", place: "Jönköping" },
  "IMG_0652.jpeg": { caption: "In i Piet Oudolfs trädgård", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0657.jpeg": { caption: "Eftermiddagsfika på uteserveringen", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0658.jpeg": { caption: "Renzo Pianos lador mot blå himmel", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0663.jpeg": { caption: "Perennäng mot den röda väggen", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0664.jpeg": { caption: "Krolliljor i full blom", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0665.jpeg": { caption: "Vidare mot Malmö — ankomst 18:25", date: "21 juni", place: "Vandalorum, Värnamo" },
  "IMG_0668.jpeg": { caption: "Incheckade på MJ's boutiquehotell", date: "21 juni", place: "Malmö" },
  "IMG_0671.jpeg": { caption: "Kvällsljus på kullerstenen", date: "21 juni", place: "Malmö" },
  "IMG_0672.jpeg": { caption: "Utanför hotellet", date: "21 juni", place: "Malmö" },
  "IMG_0673.jpeg": { caption: "Menyn på Vibliotek", date: "21 juni", place: "Malmö" },
  "IMG_0674.jpeg": { caption: "Estrella Galicia till tapasen", date: "21 juni", place: "Malmö" },
  "IMG_0675.jpeg": { caption: "Alldeles för mycket tapas på Vibliotek", date: "21 juni", place: "Malmö" },
  "IMG_0678.jpeg": { caption: "Kvällspromenad längs kanalen", date: "21 juni", place: "Malmö" },

  // Dag 2 · måndag 22 juni — Malmö → Öresund → Hjelholt → Odense → Stemmen
  "IMG_0681.jpeg": { caption: "Frukost på MJ's", date: "22 juni", place: "Malmö" },
  "IMG_0682.jpeg": { caption: "Korridoren ut från rummet", date: "22 juni", place: "Malmö" },
  "IMG_0684.jpeg": { caption: "Betalstationen vid Storebæltsbron", date: "22 juni", place: "Storebælt, Danmark" },
  "IMG_0685.jpeg": { caption: "Garnet från Hjelholt synas över lunchen", date: "22 juni", place: "Odense, Danmark" },
  "IMG_0686.jpeg": { caption: "Far och son i lunchsolen", date: "22 juni", place: "Odense, Danmark" },
  "IMG_0687.jpeg": { caption: "Bageriet Wendorff", date: "22 juni", place: "Odense, Danmark" },
  "IMG_0692.jpeg": { caption: "Veltins i kvällssolen", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0693.jpeg": { caption: "Vid bordet på Landgut Stemmen", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0694.jpeg": { caption: "Getostsallad till att börja med", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0695.jpeg": { caption: "Wienerschnitzel med stekt potatis", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0696.jpeg": { caption: "Currywurst med pommes", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0697.jpeg": { caption: "Gårdens tegellador i kvällsljus", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0698.jpeg": { caption: "Kvällspromenad på lantgården", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0699.jpeg": { caption: "Bland häckar och tegel", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0702.jpeg": { caption: "Skymning genom trädallén", date: "22 juni", place: "Landgut Stemmen" },
  "IMG_0705.jpeg": { caption: "Allé genom Lüneburgheden i skymning", date: "22 juni", place: "Stemmen, Tyskland" },

  // Dag 3 · tisdag 23 juni — Stemmen → Gent (genom Tyskland, Nederländerna, Belgien)
  "IMG_0712.jpeg": { caption: "Salladslunch medan vagnen laddar", date: "23 juni", place: "Nära nederländska gränsen" },
  "IMG_0718.jpeg": { caption: "Rummet på Jam Hotel", date: "23 juni", place: "Gent" },
  "IMG_0720.jpeg": { caption: "Tegel och vild grönska i Gent", date: "23 juni", place: "Gent" },
  "IMG_0722.jpeg": { caption: "Färgglada gavelhus längs kanalen", date: "23 juni", place: "Gent" },
  "IMG_0724.jpeg": { caption: "Spårvagnsspår och uteserveringar i kvällssol", date: "23 juni", place: "Gent" },
  "IMG_0726.jpeg": { caption: "Upp mot ett av Gents torn", date: "23 juni", place: "Gent" },
  "IMG_0729.jpeg": { caption: "Det gamla postkontoret vid Korenmarkt", date: "23 juni", place: "Gent" },
  "IMG_0730.jpeg": { caption: "Sint-Niklaaskerk", date: "23 juni", place: "Gent" },
  "IMG_0731.jpeg": { caption: "Stadshal — den moderna stadspaviljongen", date: "23 juni", place: "Gent" },
  "IMG_0732.jpeg": { caption: "Burgaren på Tush", date: "23 juni", place: "Tush, Gent" },
  "IMG_0733.jpeg": { caption: "Tush friterade kycklingburgare", date: "23 juni", place: "Tush, Gent" },
  "IMG_0734.jpeg": { caption: "Pony's blonde till maten", date: "23 juni", place: "Tush, Gent" },
  "IMG_0735.jpeg": { caption: "Vid bordet på Tush — rosa neon", date: "23 juni", place: "Tush, Gent" },
  "IMG_0736.jpeg": { caption: "Kvällsstråk genom stan", date: "23 juni", place: "Gent" },
  "IMG_0740.jpeg": { caption: "Kvällsmyller längs vattnet", date: "23 juni", place: "Gent" },
  "IMG_0743.jpeg": { caption: "Korenlei i skymning", date: "23 juni", place: "Gent" },
  "IMG_0745.jpeg": { caption: "Gravensteen — grevarnas borg", date: "23 juni", place: "Gent" },
  "IMG_0746.jpeg": { caption: "Gravensteens torn på nära håll", date: "23 juni", place: "Gent" },
  "IMG_0747.jpeg": { caption: "Neptunus över Oude Vismijn", date: "23 juni", place: "Gent" },
  "IMG_0748.jpeg": { caption: "Gravensteen från ängssidan", date: "23 juni", place: "Gent" },
  "IMG_0750.jpeg": { caption: "Borgen speglad i kvällsljuset", date: "23 juni", place: "Gent" },
  "IMG_0752.jpeg": { caption: "Graslei i gyllene timme", date: "23 juni", place: "Gent" },
  "IMG_0754.jpeg": { caption: "Korenlei och tornen i kvällsljus", date: "23 juni", place: "Gent" },
  "IMG_0760.jpeg": { caption: "Far och son på väg tillbaka", date: "23 juni", place: "Gent" },
  "IMG_0763.jpeg": { caption: "Kvällen avslutas på Jam Hotel", date: "23 juni", place: "Gent" },
};
