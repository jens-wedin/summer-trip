export type Brewery = {
  name: string;
  address?: string;
  note: string;
  pilgrimage?: boolean;
};

export type DrinkStyle = {
  style: string;
  abv?: string;
  about: string;
  order: string;
};

export type DrinkStop = {
  id: string;
  flag: string;
  region: string;
  subtitle: string;
  relatedTownIds?: string[];
  intro?: string;
  beer?: string[];
  beerVenues?: Brewery[];
  wine?: string[];
  wineVenues?: Brewery[];
  cider?: string[];
  ciderProducers?: Brewery[];
  styles?: DrinkStyle[];
  callouts?: { kind: "tradition" | "tip" | "must"; title: string; body: string }[];
};

export const drinkStops: DrinkStop[] = [
  // ───────────────────────────────────────────
  {
    id: "sweden",
    flag: "🇸🇪",
    region: "Sweden",
    subtitle: "Stockholm & Vandalorum",
    relatedTownIds: ["malmo"],
    beer: [
      "Sweden has one of Europe's most vibrant craft beer scenes, driven by a generation of brewers who trained in the US and returned home with big ambitions. The state alcohol monopoly Systembolaget (the only shops allowed to sell alcohol above 3.5% ABV) has paradoxically driven quality upward — to compete on those shelves you have to be genuinely good.",
    ],
    beerVenues: [
      { name: "Omnipollo", address: "Stockholm", note: "Internationally acclaimed, wildly creative. Their Noa pastry stout is legendary." },
      { name: "Dugges Ale & Porterbryggeri", address: "Gothenburg, widely available", note: "Reliable IPAs and stouts — great entry point to Swedish craft." },
      { name: "Brutal Brewing", note: "Swedish market staple — easy-drinking lagers and IPAs." },
      { name: "Norrby Bryggeri", address: "Jönköping/Värnamo region", note: "Look for bottles at the Systembolaget closest to Vandalorum." },
    ],
    callouts: [
      { kind: "tip", title: "Order this", body: "\"En fatöl, tack\" — for whatever is on tap." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "denmark",
    flag: "🇩🇰",
    region: "Denmark",
    subtitle: "Hjelholt (Funen) & Copenhagen",
    beer: [
      "Denmark punches far above its weight in beer. Copenhagen in particular is one of the world's great craft beer cities.",
      "Mikkeller is the name to know. Founded in 2006 by a high school maths teacher brewing on a home kit, Mikkeller is now distributed in 40+ countries, with bars in Copenhagen, San Francisco, Tokyo, and Bangkok. Carlsberg's original brewery in Valby is also worth a look — the heritage choice.",
      "Funen is quieter beer territory, but the island has a growing local scene. Look for Refsvindinge Bryghus and Svendborg Bryghus at a local supermarket or specialist.",
    ],
    beerVenues: [
      { name: "Mikkeller Bar", address: "Viktoriagade 8, Vesterbro", note: "The original. 20 taps, constantly rotating. Go here." },
      { name: "Warpigs", address: "Flæsketorvet 25, Meatpacking District", note: "Mikkeller's collab with Texas pit-masters. American BBQ + Danish craft beer. Excellent." },
      { name: "Taphouse", address: "Lavendelstræde 15", note: "61 taps — the largest selection in Copenhagen. Great for tasting your way through." },
      { name: "Ølbaren", address: "Æbeløgade 4", note: "Neighbourhood gem, unpretentious, brilliant bottle list." },
    ],
    callouts: [
      { kind: "tip", title: "Order this", body: "Mikkeller Drink'in the Sun (wheat beer, perfect for a warm June evening) · Mikkeller Beer Geek Breakfast (world-class oatmeal stout) · To Øl Snowball." },
      { kind: "tip", title: "Say this", body: "\"En Mikkeller, tak\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "hamburg",
    flag: "🇩🇪",
    region: "Hamburg",
    subtitle: "Astra, Lütt un Lütt, and the harbour pubs",
    beer: [
      "Hamburg is not a city obsessed with its own beer the way Cologne or Munich is — but it has a genuine local drinking culture worth knowing.",
      "Astra is the symbolic beer of Hamburg, inseparable from the city's Kiez (red-light district) and Hafenstraße culture. The logo — a heart-and-anchor — is on every corner. An unfiltered lager, perfectly honest, the right thing to drink in a Hamburg pub. Locals call it Rotlicht-Bier (red-light beer). Holsten Pilsener is the other Hamburg staple — cleaner, crisper, widely available.",
    ],
    beerVenues: [
      { name: "Altes Mädchen", address: "Lagerstraße 28b, Schanzenviertel", pilgrimage: true, note: "THE craft beer bar in Hamburg. A former slaughterhouse converted into a beer garden and bar — ~100 taps and bottles, food trucks, great atmosphere." },
      { name: "Ratsherrn Brauerei", address: "Lagerstraße 28b", note: "Hamburg's most respected craft brewery (same complex as Altes Mädchen). Pale Ale and Kellerbier are excellent." },
      { name: "Gröninger Privatbrauerei", address: "Ost-West-Straße 47", note: "Classic Hamburg brewpub, brewing on-site since the 19th century. Traditional, atmospheric, good food." },
    ],
    wine: [
      "Hamburg is not a wine region, but as a wealthy port city it has excellent wine bars and import merchants. The Vino chain and Winzerkeller shops stock good German Rieslings — worth exploring if you want a bottle for the road.",
    ],
    callouts: [
      { kind: "tradition", title: "Lütt un Lütt", body: "Order a Lütt un Lütt — \"little and little\" — a small beer paired with a small schnapps (clear grain spirit or aquavit). Classic Hamburg working-class tradition, especially in the old harbour pubs around the Speicherstadt." },
      { kind: "tip", title: "Say this", body: "\"Ein Astra und einen Lütten, bitte\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "cologne",
    flag: "🇩🇪",
    region: "Cologne — Kölsch Country",
    subtitle: "The most important beer stop on the outbound leg",
    beer: [
      "Kölsch is a protected beer style — by EU geographical indication, it can only be brewed within the city limits of Cologne. There are around 20 official Kölsch breweries. It is legally defined: bright, golden, top-fermented, lightly hopped, served cold at 8–10°C in a narrow 200ml glass called a Stange (pole).",
      "What it tastes like: lighter and drier than a lager, faintly fruity (green apple, pear), clean, slightly acidic finish. More refreshing than it sounds. Very easy to drink several Stangen without noticing.",
    ],
    beerVenues: [
      { name: "Früh am Dom", address: "Am Hof 12–18", note: "Right next to the cathedral. Most famous, often busy, always worth it." },
      { name: "Gaffel am Dom", address: "Bahnhofsvorplatz 1", note: "Near the Hauptbahnhof, excellent Kölsch, lively atmosphere." },
      { name: "Päffgen", address: "Friesenstraße 64", pilgrimage: true, note: "The purists' choice. Family-run since 1883, no-frills, exceptional." },
      { name: "Peters Brauhaus", address: "Mühlengasse 1", note: "Lovely interior, excellent traditional food alongside the Kölsch." },
      { name: "Malzmühle", address: "Heumarkt 6", note: "Near the old town, great Mühlen Kölsch, classic vibe." },
      { name: "Sion", address: "Unter Taschenmacher 5", note: "One of the oldest, very atmospheric, near the cathedral." },
    ],
    wine: [
      "Cologne sits at the crossroads of two of Germany's greatest wine regions. The Mosel valley is about 90 minutes southwest — its steep slate slopes produce the world's finest Riesling: high acidity, low alcohol, mineral, with apricot and petrol notes. Producers like Egon Müller, Dr. Loosen, and Joh. Jos. Prüm are world-renowned.",
      "The Ahr Valley (60km south) produces unexpectedly excellent Pinot Noir — Spätburgunder. Producers: Meyer-Näkel, Deutzerhof, Jean Stodden. The Mittelrhein gorge north of Koblenz is also excellent Riesling country.",
    ],
    wineVenues: [
      { name: "Weinbar at Friesenplatz", note: "Solid central wine bar in Cologne." },
      { name: "Jacques' Wein-Depot", note: "Multiple Cologne locations — great selection of German and international bottles." },
    ],
    callouts: [
      { kind: "tradition", title: "The Köbes system", body: "Your waiter (the Köbes, pronounced kur-bess) carries a round tray of pre-poured Stangen and replaces your glass automatically — without being asked — the moment it's empty. He keeps a tally with chalk marks on your coaster. To stop, you put your coaster on top of your glass. If you don't, the Kölsch keeps coming." },
      { kind: "must", title: "Order this", body: "\"Einen Kölsch, bitte\" — and then just let the Köbes do his job. Don't ask for a menu of beers. There is one beer here." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "antwerp",
    flag: "🇧🇪",
    region: "Antwerp",
    subtitle: "The world's greatest beer country",
    beer: [
      "Belgium is not a beer country. It is the beer country. No other nation has produced so many genuinely distinct, protected, world-class styles. In Antwerp you have access to the full range — and one of the world's great Trappist breweries is practically on the doorstep.",
      "The must-order is a bolleke — the local word for the small, round-bottomed globe glass in which De Koninck amber ale is served. Sit down in any traditional Antwerp café and ask for \"een bolleke\" and you'll get one without further clarification. Amber ale, 5.2% ABV, malty with a clean bitter finish. Unpretentious and perfect.",
      "Westmalle Abbey is 25km northeast — an easy detour. By most accounts the benchmark Trappist brewery: their Westmalle Tripel (9.5% ABV, golden, complex, banana and citrus aroma, dry finish) essentially invented the Tripel style in 1934. Café Trappisten sits directly across the road from the monastery gate.",
    ],
    beerVenues: [
      { name: "Kulminator", address: "Vleminckveld 32", pilgrimage: true, note: "Founded 1974 — over 700 beers including vintage bottles going back decades. Cramped, atmospheric, completely serious about beer. A pilgrimage site." },
      { name: "Café Pelgrim", address: "Pelgrimstraat 10", note: "Outstanding Belgian beer selection in a beautiful old building near the cathedral." },
      { name: "Quinten Matsijs", address: "Moriaanstraat 13", note: "Historic brown café — the full De Koninck bolleke experience." },
      { name: "Bier Central", address: "De Keyserlei 25", note: "Enormous selection, central location, good for tasting across styles." },
      { name: "Café Trappisten", address: "Across from Westmalle Abbey", pilgrimage: true, note: "Full Westmalle range including occasional special beers not in commercial distribution. Pair with their famous cheese." },
    ],
    styles: [
      { style: "Dubbel", abv: "6–8%", about: "Dark, caramel, dried fruit", order: "Westmalle Dubbel · Chimay Rouge" },
      { style: "Tripel", abv: "8–10%", about: "Golden, spicy, dry, deceptively strong", order: "Westmalle Tripel · Karmeliet" },
      { style: "Quadrupel / Dark Strong", abv: "10–12%", about: "Rich, fig, dark sugar, complex", order: "Rochefort 10 · St. Bernardus Abt 12" },
      { style: "Strong Golden Ale", abv: "8%+", about: "Pale, smooth, effervescent", order: "Duvel — the essential one" },
      { style: "Lambic / Gueuze", abv: "5–8%", about: "Wild-fermented, sour, complex", order: "Cantillon · Boon" },
      { style: "Saison", abv: "5–8%", about: "Farmhouse, spicy, dry", order: "Saison Dupont" },
    ],
    wine: [
      "Belgium produces small amounts of wine — mostly from Chardonnay, Pinot Noir, and hybrid varieties in Hageland (Flemish Brabant) and Hesbaye. Not in the same league as its beer, but local producers like Wijndomein Domus and Het Wijngoed Donaerde are worth knowing if you're curious.",
    ],
    callouts: [
      { kind: "must", title: "Duvel", body: "Possibly Belgium's most celebrated ale — an 8.5% strong pale golden ale that looks deceptively like a lager. Comes in a tulip glass with a thick foam head. Dangerously easy to drink for its strength. One of the great beers of the world." },
      { kind: "tip", title: "Say this", body: "\"Een bolleke, alsjeblieft\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "normandy",
    flag: "🇫🇷",
    region: "Normandy — Bayeux",
    subtitle: "Forget beer. Forget wine. Drink cider, calvados, pommeau.",
    relatedTownIds: ["bayeux", "honfleur"],
    cider: [
      "Normandy doesn't produce wine. It barely makes beer. What it produces — with centuries of craft and some of the finest orchards in Europe — is cider, calvados, and pommeau. These three drinks form a complete universe and are as regionally specific as Kölsch or Champagne. Don't leave Normandy without drinking all three.",
    ],
    styles: [
      { style: "🍏 Cidre Brut", abv: "4–5%", about: "Dry. Fermented slowly from blends of bitter, sweet, and acidic apple varieties — up to 38 cultivars on a single farm. Great with savoury food, cheese, charcuterie.", order: "AOP Pays d'Auge on the label guarantees traditional production" },
      { style: "🍏 Cidre Demi-sec", abv: "4–5%", about: "Medium-sweet, more approachable", order: "Good with crêpes" },
      { style: "🍎 Calvados Fine / VS", abv: "40%+", about: "2 years minimum. Young, fresh, fiery.", order: "Entry-level Calvados" },
      { style: "🍎 Calvados VSOP", abv: "40%+", about: "4 years. Smoother, beginning to develop complexity.", order: "Step up from Fine" },
      { style: "🍎 Calvados XO / Hors d'Age", abv: "40%+", about: "6+ years. Where calvados becomes extraordinary: dried fruit, toffee, vanilla, leather.", order: "Worth spending money on. Look for Vieux / Old Reserve." },
      { style: "🍐 Pommeau", abv: "~17%", about: "Fresh-pressed apple juice blended with calvados, aged in oak barrels min. 14 months (usually 3 years). Amber, sweet but not cloying — apple, vanilla, gentle warmth.", order: "Served chilled as aperitif, or with cheese / chocolate dessert. A bottle makes a superb gift." },
    ],
    ciderProducers: [
      { name: "Ferme de la Sapinière", address: "Saint-Laurent-sur-Mer (Omaha Beach)", pilgrimage: true, note: "Michel and Philippe Legallois grow 38 apple varieties and produce cider, pommeau, and calvados entirely on-site. Guided cellar tours with tasting and an on-site shop. You'll drive past on the D514 coastal road on your way to or from Omaha." },
      { name: "Calvados Pierre Huet", address: "Cambremer (Pays d'Auge cider route)", note: "English tours Tue/Thu 2:30pm. AOC Pays d'Auge. 41-year-old calvados available." },
      { name: "Domaine Dupont", address: "Victot-Pontfol", note: "The Triple cider — triple-fermented, 10% ABV, extraordinary." },
      { name: "Château de Breuil", address: "Le Breuil-en-Auge", note: "Beautiful château, tours at 11am & 5pm, good pommeau at ~€13." },
      { name: "Ferme de la Vallée au Tanneur", address: "Pays d'Auge", note: "Farm experience — raw milk cheese + cider tasting combined." },
    ],
    beer: [
      "Normandy does have a small local beer scene, worth a try if you want a change. Brasserie de Beaussane (local Norman craft) and Falaise Bière (produced near the birthplace of William the Conqueror). Many Bayeux restaurants stock a rotating local craft tap.",
    ],
    callouts: [
      { kind: "tradition", title: "The trou normand", body: "The classic Normandy tradition: a small glass of calvados served between courses — especially between the main and dessert — to \"make room\" and stimulate the appetite. Order it without apology." },
      { kind: "tradition", title: "The bolée", body: "In restaurants, cider is often served in a bolée — a traditional ceramic bowl rather than a glass. This is the correct way." },
      { kind: "tip", title: "Say this", body: "\"Un cidre brut, s'il vous plaît\" — and specify bouteille (bottle) or pression (draught) if given the option." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "paris",
    flag: "🇫🇷",
    region: "Paris — Wine, Wine, Wine",
    subtitle: "The natural wine capital of the world",
    relatedTownIds: [],
    wine: [
      "Paris has become the world's leading city for natural wine — minimal-intervention, often biodynamic, frequently unfiltered, always made by small independent producers. The cave à manger format (wine shop where you can also eat small plates) is a Parisian invention and one of the city's great contributions to drinking culture.",
    ],
    wineVenues: [
      { name: "Septime La Cave", address: "Rue Basfroi, 11th", pilgrimage: true, note: "The wine arm of the celebrated restaurant Septime. ~120 bottles in a tiny space, with access to 25,000 in the group's cellar. Winemakers like Ganevat, Houillon, Vouette & Sorbée. Get there early." },
      { name: "Le Verre Volé", address: "Canal Saint-Martin, 10th", pilgrimage: true, note: "The original cave à manger, opened 2000. Bottles line every wall, tables spill onto the canal-side terrace in June. Order a glass and a plate of charcuterie." },
      { name: "Le Barav", address: "Le Marais, 3rd", note: "Fifteen years old — the classic Marais wine bar. Adjacent cave sells bottles to take away. Outdoor tables in summer. 6€ glasses at the bar." },
      { name: "La Compagnie des Vins Surnaturels", address: "Saint-Germain-des-Prés", note: "Run by the Experimental cocktail group. Over 700 wines, rare bottles, sophisticated ambience, great food." },
      { name: "Les Caves Legrand", address: "Galerie Vivienne, 2nd", note: "Parisian institution inside one of the city's most beautiful 19th-century covered passages. Wine merchant and bar combined." },
      { name: "Le Goncourt", address: "Oberkampf, 11th", note: "Natural wine-focused, excellent seasonal food, lively neighbourhood atmosphere." },
    ],
    styles: [
      { style: "Champagne", about: "Sparkling. As an aperitif, or throughout the meal", order: "House list or look for grower-Champagne (RM)" },
      { style: "Burgundy (Bourgogne)", about: "Pinot Noir / Chardonnay", order: "Premier or Grand Cru if budget allows" },
      { style: "Loire Valley", about: "Muscadet, Sancerre, Vouvray", order: "Perfect with seafood and light dishes" },
      { style: "Beaujolais", about: "Gamay — excellent by the carafe, underrated", order: "Un pichet de Beaujolais" },
      { style: "Rhône", about: "Grenache, Syrah blends — robust", order: "Great with meat" },
      { style: "Jura", about: "Savagnin, Poulsard — unusual, beloved by natural wine crowd", order: "Vin jaune if you can find it" },
    ],
    callouts: [
      { kind: "tip", title: "Day trip — Reims", body: "45 minutes from Gare de l'Est by TGV. Veuve Clicquot (atmospheric chalk crayères, booking essential) · G.H. Mumm (visitor-friendly, no booking) · Taittinger (Roman chalk cellars) · Ruinart (oldest house, 1729, UNESCO cellars). Épernay's Avenue de Champagne 40 min from Reims has Moët, Pol Roger, Perrier-Jouët, and Mercier in one boulevard." },
      { kind: "tip", title: "Smaller producers", body: "The Côte des Blancs and Montagne de Reims are home to hundreds of récoltant-manipulants — growers who make their own Champagne. Egly-Ouriet, Benoit Lahaye, Bérèche et Fils." },
      { kind: "tip", title: "Bistro defaults", body: "\"Un pichet de rouge\" (carafe of red) or \"un verre de blanc\" at the house price is never wrong. The house wine in a good Parisian restaurant is almost always decent." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "brussels",
    flag: "🇧🇪",
    region: "Brussels — Return via Waterloo",
    subtitle: "Worth a detour for one destination above all others",
    relatedTownIds: ["waterloo"],
    beer: [
      "The return leg via Waterloo puts you near Brussels. If you have a few hours to spare, this is worth it for one destination above all others — Cantillon.",
    ],
    beerVenues: [
      { name: "Cantillon Brewery", address: "Rue Gheude 56, Anderlecht", pilgrimage: true, note: "One of the most important breweries in the world. Cantillon makes only lambic and gueuze: wild-fermented ales inoculated by wild yeast from the Brussels air, aged in oak barrels for 1–3 years. Acidic, complex, sometimes funky, unlike anything else in beer. The brewery is a working museum (open most days, small entry fee). Walk the production floor, taste in the tasting room. Gueuze, Kriek (cherries), Framboise (raspberries), seasonal lambics. Unmissable for anyone serious about beer." },
      { name: "Delirium Café", address: "Impasse de la Fidélité 4, city centre", note: "Holds the Guinness World Record for largest commercially available beer selection — over 3,000 beers. Touristy but genuinely impressive as a spectacle." },
      { name: "Moeder Lambic", address: "Place Fontainas 8, Saint-Gilles", note: "The serious option. 50 taps, curated Belgian and international list, no gimmicks, great atmosphere." },
    ],
    callouts: [
      { kind: "tip", title: "Say this", body: "\"Une gueuze, s'il vous plaît\"" },
    ],
  },
];

export type QuickReferenceRow = {
  stop: string;
  order: string;
  phrase: string;
};

export const drinksQuickReference: QuickReferenceRow[] = [
  { stop: "Stockholm", order: "Local craft IPA or pale ale", phrase: "\"En fatöl, tack\"" },
  { stop: "Copenhagen", order: "Mikkeller on tap", phrase: "\"En Mikkeller, tak\"" },
  { stop: "Hamburg", order: "Astra + Lütt un Lütt", phrase: "\"Ein Astra und einen Lütten, bitte\"" },
  { stop: "Cologne", order: "Kölsch (Früh or Päffgen)", phrase: "\"Einen Kölsch, bitte\"" },
  { stop: "Antwerp", order: "Bolleke De Koninck", phrase: "\"Een bolleke, alsjeblieft\"" },
  { stop: "Bayeux / Normandy", order: "Cidre Brut + Pommeau aperitif", phrase: "\"Un cidre brut, s'il vous plaît\"" },
  { stop: "Paris wine bar", order: "House natural wine / glass of whatever they recommend", phrase: "\"Un verre de votre choix, s'il vous plaît\"" },
  { stop: "Brussels", order: "Cantillon Gueuze", phrase: "\"Une gueuze, s'il vous plaît\"" },
];

export type Unmissable = {
  rank: number;
  title: string;
  where: string;
  body: string;
};

export const drinksUnmissables: Unmissable[] = [
  {
    rank: 1,
    title: "Kölsch at Päffgen, Cologne",
    where: "Friesenstraße 64, Cologne",
    body: "The purest expression of the city's beer culture, served by a Köbes who will not wait for you to ask.",
  },
  {
    rank: 2,
    title: "Westmalle Tripel at Café Trappisten",
    where: "Across from Westmalle Abbey, near Antwerp",
    body: "Across the road from the monastery that invented the style — drink it where it was born in 1934.",
  },
  {
    rank: 3,
    title: "Pommeau at Ferme de la Sapinière",
    where: "Saint-Laurent-sur-Mer, Omaha Beach",
    body: "Norman apple brandy aperitif, metres from the shore where the 1st Division landed.",
  },
  {
    rank: 4,
    title: "Cantillon Gueuze in Brussels",
    where: "Rue Gheude 56, Anderlecht",
    body: "Wild-fermented lambic from the brewery that makes it best — a working museum and tasting room.",
  },
  {
    rank: 5,
    title: "A glass at Septime La Cave or Le Verre Volé, Paris",
    where: "11th & 10th arrondissements",
    body: "The natural wine cave à manger at its finest — Paris's gift to global drinking culture.",
  },
];

export const drinksByTownId = drinkStops.reduce<Record<string, DrinkStop[]>>((acc, stop) => {
  for (const tid of stop.relatedTownIds ?? []) {
    if (!acc[tid]) acc[tid] = [];
    acc[tid].push(stop);
  }
  return acc;
}, {});
