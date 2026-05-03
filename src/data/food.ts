export type FoodItem = {
  name: string;
  body: string;
  signature?: boolean;
};

export type FoodSubsection = {
  title: string;
  intro?: string;
  items: FoodItem[];
};

export type FoodStop = {
  id: string;
  flag: string;
  country: string;
  context: string;
  intro?: string;
  relatedTownIds?: string[];
  image?: { src: string; caption: string };
  subsections: FoodSubsection[];
  drinks?: FoodItem[];
  tip?: { title: string; body: string };
};

export const foodHeroImage = {
  src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=80",
  caption: "A road-trip preview — what awaits across two weeks and five countries.",
};

export const foodStops: FoodStop[] = [
  // ──────────────────────────────────────────
  {
    id: "sweden",
    flag: "🇸🇪",
    country: "Sweden",
    context: "Stockholm & the road south · Day 1",
    relatedTownIds: ["malmo"],
    image: {
      src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=1600&auto=format&fit=crop&q=80",
      caption: "Kanelbulle and coffee — the Swedish fika ritual.",
    },
    subsections: [
      {
        title: "🍽️ Food",
        items: [
          { name: "Kanelbulle & Fika", signature: true, body: "Sweden's most sacred ritual. A cinnamon bun (lightly spiced, subtly sweet, flavoured with cardamom), a strong coffee, and nowhere to be for 20 minutes. You're participating in a national institution. Find one at any konditori or bakery on the road." },
          { name: "Gravlax", body: "Cured salmon served thinly sliced with mustard-dill sauce and crispbread. Clean, elegant, unmistakably Swedish. A great breakfast or starter." },
          { name: "Räkmacka", body: "The open-faced shrimp sandwich. Piled high with fresh prawns, egg, lettuce, lemon and dill on white bread. A classic Swedish lunch, especially along the coast." },
          { name: "Köttbullar", signature: true, body: "Yes, the meatball. The real thing is nothing like IKEA's version. Served with creamy gravy, lingonberry jam, and cured cucumber. Order it once properly before you leave the country." },
          { name: "Smörgåsbord", body: "If you get the chance: the full spread of cured herring, cured meats, crispbread, cheeses, and warm dishes. A buffet in the best sense." },
        ],
      },
    ],
    drinks: [
      { name: "Akvavit / Snaps", body: "Distilled spirit flavoured with caraway or dill. Served ice-cold in a small glass. Potent. Found at any restaurant serving traditional Swedish food." },
      { name: "Swedish craft beer", body: "A quietly excellent scene, particularly in Stockholm and Malmö." },
      { name: "Filmjölk", body: "Drinkable sour yoghurt, eaten at breakfast with muesli or crispbread. Uniquely Swedish — you won't find it anywhere else on the route." },
    ],
    tip: {
      title: "In Malmö specifically",
      body: "MJ's Hotel has a well-regarded in-house restaurant — a good place for a proper Swedish dinner on arrival night.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "denmark",
    flag: "🇩🇰",
    country: "Denmark",
    context: "Funen & the road south · Day 2",
    image: {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&auto=format&fit=crop&q=80",
      caption: "Flaky Danish pastry, fresh from the bakery.",
    },
    subsections: [
      {
        title: "🍽️ Food",
        items: [
          { name: "Smørrebrød", signature: true, body: "Denmark's defining lunch: open-faced rye bread topped with cured herring, smoked salmon, roast beef, liver pâté, or egg with remoulade. Eaten at dedicated frokostrestaurants. Don't eat a bad version — find a proper one." },
          { name: "Stegt Flæsk", signature: true, body: "Denmark's official national dish. Crispy fried pork belly served with potatoes and parsley sauce. Hearty, rich, and deeply Danish." },
          { name: "Pølser", body: "The Danish hot dog. Bright red sausages in a soft bun, topped with mustard, ketchup, remoulade, and crispy onions. Eaten standing at roadside pølsevogn carts." },
          { name: "Wienerbrød", body: "What the rest of the world calls a 'Danish' is just called wienerbrød (Vienna bread) here. Flaky, buttery, laminated. Eaten at bakeries (bageri) with morning coffee." },
          { name: "Frikadeller", body: "Danish meatballs — flat patties of pork/veal, served with potatoes, red cabbage, and gravy. A proper home-cooked Danish meal." },
          { name: "Koldskål", body: "A chilled buttermilk dessert soup, eaten in summer with crunchy kammerjunker biscuits floating in it. A uniquely Danish summer experience — June is perfect timing." },
        ],
      },
    ],
    drinks: [
      { name: "Carlsberg / Tuborg", body: "Denmark's world-famous lagers. Still brewed in Copenhagen. Order them cold at any bar." },
      { name: "Akvavit / Snaps", body: "As in Sweden, but with Danish variations flavoured with dill, anise, or caraway. Classic accompaniment to smørrebrød." },
      { name: "Gammel Dansk", signature: true, body: "A bitter liqueur, slightly medicinal, quintessentially Danish. Often drunk as a morning snaps or a digestif. An acquired taste — try it at least once." },
      { name: "Coffee", body: "The Danes are among the world's top coffee consumers. Excellent café culture, particularly in Copenhagen." },
    ],
    tip: {
      title: "En route at Hjelholt, Funen",
      body: "Hesselager is a small village — grab lunch in nearby Svendborg or Faaborg before crossing to Germany.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "germany",
    flag: "🇩🇪",
    country: "Germany",
    context: "Hamburg & beyond · Days 2 & 12",
    image: {
      src: "https://images.unsplash.com/photo-1505253468034-514d2507d914?w=1600&auto=format&fit=crop&q=80",
      caption: "Bratwurst on the grill — German market staple.",
    },
    subsections: [
      {
        title: "🍽️ Hamburg Specialties",
        items: [
          { name: "Fischbrötchen", signature: true, body: "The Hamburg fish roll. Cured or soused herring (matjes or bismarckhering), raw onion, gherkins, and remoulade in a bread roll. Eaten at the harbour, looking at the Elbe. The most Hamburg thing you can eat." },
          { name: "Franzbrötchen", body: "Hamburg's own sweet pastry — like a cinnamon roll folded flat: flaky, sugary, with cinnamon running through the layers. Unique to Hamburg. Buy one from a Bäckerei with morning coffee." },
          { name: "Labskaus", body: "Traditional sailor food: corned beef, mashed potato, and onion, topped with brined beetroot, gherkin, herring, and a fried egg. Looks alarming, tastes excellent." },
          { name: "Rote Grütze", body: "Red summer berry pudding (redcurrants, raspberries, strawberries) served with cream or vanilla sauce. A Hamburg and northern German classic dessert. Perfect in July." },
        ],
      },
      {
        title: "🍽️ Germany-Wide Classics",
        items: [
          { name: "Bratwurst", body: "Grilled pork sausage, eaten from a stand with mustard in a bread roll. Quality varies enormously — find a proper Metzgerei (butcher) or market stall." },
          { name: "Currywurst", body: "Sliced bratwurst doused in curried ketchup. Berlin's great invention, now beloved nationally. Eaten with fries. A proper street food lunch." },
          { name: "Schnitzel", body: "Breaded and pan-fried veal or pork, served with lemon and potato salad. The benchmark of a German restaurant kitchen." },
          { name: "Soft pretzel (Brezel)", body: "Warm, chewy, salted. The perfect beer snack or road snack. Buy one from a bakery on the way out of Hamburg." },
        ],
      },
    ],
    drinks: [
      { name: "German beer", signature: true, body: "The variety is enormous: Pilsner, Weizen (wheat beer), Dunkel (dark), Helles (light lager). In Hamburg, try a Holsten or explore the craft scene. In Köln you must drink Kölsch — see the Drinks section." },
      { name: "Riesling", body: "Germany's great white wine, from the Rhine and Moselle valleys. Dry versions (trocken) are excellent with food. Worth seeking out at any restaurant with a wine list." },
      { name: "Coffee", body: "Contrary to the beer stereotype, Germans drink more coffee than beer. Hamburg has a strong café culture, rooted in the city's centuries as a coffee trading port." },
    ],
    tip: {
      title: "Hamburg Fish Market",
      body: "On Sunday mornings the fish market at Altona runs from 5am–9:30am. Fresh seafood, loud traders, raucous atmosphere. If you're passing through Hamburg on a Sunday, it's worth the early alarm.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "belgium",
    flag: "🇧🇪",
    country: "Belgium",
    context: "Antwerp & Gent · Day 3",
    relatedTownIds: ["gent"],
    image: {
      src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=1600&auto=format&fit=crop&q=80",
      caption: "Belgian waffles — toppings optional but encouraged.",
    },
    subsections: [
      {
        title: "🍽️ Food",
        items: [
          { name: "Frites", signature: true, body: "Belgian fries are a different thing entirely from French fries. Cut thicker (1cm), fried twice for a crispy outside and fluffy interior, served in a paper cone with sauce. Best sauce: andalouse (mayo with peppers and tomato) or just plain mayo. Find Frituur No. 1 in Antwerp. Do not skip this." },
          { name: "Moules-Frites", body: "Mussels and fries — the definitive Belgian brasserie dish. A pot of steamed mussels in white wine, garlic, and cream, with a bowl of frites on the side. Best August–October when local mussels are in season (late June is just at the start)." },
          { name: "Stoofvlees", body: "Belgian beef stew slow-cooked in dark beer, served with frites. Rich, deeply flavoured, comfort food at its best. Found in every traditional Belgian brasserie." },
          { name: "Belgian waffles", body: "Two types: the Brussels waffle (light, rectangular, crispy) and the Liège waffle (denser, sweeter, with pearl sugar caramelised in the dough). The Liège waffle is street food; the Brussels version is sit-down." },
          { name: "Waterzooi", body: "A creamy chicken or fish stew from Ghent. Mild, warming, very Belgian." },
          { name: "Speculoos", body: "Spiced caramelised biscuits — cinnamon, cloves, cardamom. Found in every Belgian café alongside coffee. The spread version (speculoospasta) is Belgium's answer to Nutella." },
          { name: "Cuberdons", body: "Purple cone-shaped sweets, raspberry-flavoured with a hard shell and soft gel centre. A Flemish speciality — buy a bag from a market stall and eat them fresh." },
          { name: "Belgian chocolate", body: "The bar is simply higher here. Visit one chocolatier in Antwerp and buy a box of truffles. Worth every euro." },
        ],
      },
    ],
    drinks: [
      { name: "Belgian craft beer", signature: true, body: "One of the world's great beer cultures: Tripels, Dubbels, Saisons, Lambics, Witbier, Trappist ales, Flemish red-browns. De Koninck is Antwerp's own brewery (1833) — their Bolleke ale is the local signature. See the Drinks section for the full guide." },
      { name: "Elixir d'Anvers", body: "A herbal liqueur created in Antwerp in 1863, award-winning and unique to the city. Try a small glass after dinner." },
      { name: "Jenever (Belgian gin)", body: "The precursor to British gin, made from grain spirit with juniper. Served in a small tulip glass, ice-cold. Oude (old) is more full-bodied than jonge (young). A proper Belgian drinking experience." },
    ],
    tip: {
      title: "In Antwerp",
      body: "Order a Bolleke of De Koninck at any traditional brown café — it arrives in a distinctive round glass. This is the local ritual.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "normandy",
    flag: "🇫🇷",
    country: "France — Normandy",
    context: "Bayeux & the beaches · Days 4–7",
    intro:
      "Normandy's entire cuisine revolves around four things: cream, butter, apples, and cheese. Everything else is built on these foundations.",
    relatedTownIds: ["bayeux", "honfleur"],
    image: {
      src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&auto=format&fit=crop&q=80",
      caption: "Norman cheese plate — camembert country.",
    },
    subsections: [
      {
        title: "🧀 The Four Norman Cheeses (AOC)",
        intro: "Try all four during your three nights — they're all different. Buy from a market and eat at room temperature.",
        items: [
          { name: "Camembert de Normandie", signature: true, body: "The king of Norman cheeses. A true AOC Camembert is made from raw milk, with a soft white rind and a rich, buttery, slightly pungent interior. Nothing like the supermarket version." },
          { name: "Livarot", body: "Strong, washed-rind, with characteristic ribbons of sedge wrapped around it (sometimes called 'the Colonel' for its five stripes)." },
          { name: "Pont-l'Évêque", body: "Square, washed-rind, milder than Livarot but still pungent. One of the oldest Norman cheeses." },
          { name: "Neufchâtel", body: "The heart-shaped one. Soft, bloomy rind, slightly mushroomy. Said to have been given to English soldiers by Norman girls during the Hundred Years' War — hence the heart shape." },
        ],
      },
      {
        title: "🍽️ Food",
        items: [
          { name: "Galette complète", body: "A buckwheat crêpe filled with ham, melted cheese, and a fried egg. The definitive Normandy lunch. Le Moulin de la Galette in Bayeux is a good bet." },
          { name: "Cochon de Bayeux", signature: true, body: "A local Bayeux speciality: a loin of pork braised in the oven with cider, served with jelly. The Bayeux pig breed is ancient and the flavour is distinctive. Look for it on menus in Bayeux specifically." },
          { name: "Oysters (Huîtres)", body: "Norman oysters from the Cotentin Peninsula and Isigny are among France's finest. Order them as a starter, with lemon and a glass of local cider." },
          { name: "Coquilles Saint-Jacques", body: "Scallops in a creamy sauce, baked in the shell. Rich, deeply Norman, found on almost every restaurant menu along the coast." },
          { name: "Agneau de Pré-Salé", body: "Salt-meadow lamb from the Bay of Mont Saint-Michel. The sheep graze on coastal grassland that floods with seawater — the meat is naturally salted and uniquely flavoured. One of France's great AOC products." },
          { name: "Tarte Normande", signature: true, body: "The Norman apple tart: thin slices of apple on a buttery shortcrust, with an egg-cream custard and a dash of Calvados. The definitive Norman dessert." },
          { name: "Trou Normand", body: "A mid-meal palate cleanser: apple sorbet topped with a pour of Calvados. Served between courses to 'make a hole' (trou) for more food. Do it." },
        ],
      },
    ],
    drinks: [
      { name: "Cidre", signature: true, body: "Order cider instead of wine with your meals in Normandy. The local cidre bouché (bottle-fermented, slightly sparkling) is superb — look for brut (dry) or demi-sec (off-dry). Pairs with everything: galettes, oysters, cheese, roast meat." },
      { name: "Calvados", signature: true, body: "Apple brandy, aged in oak barrels. The great digestif of Normandy. A 10-year-old Calvados is smooth and complex; older vintages are extraordinary. Buy a bottle at a local producer to take home." },
      { name: "Pommeau", body: "A blend of fresh apple juice and Calvados, fortified and aged. Sweet, apple-forward, around 17% ABV. Drunk as an aperitif. Harder to find outside Normandy — don't miss it." },
    ],
    tip: {
      title: "At the tour lunch stop (Stage 6)",
      body: "The shuttle gives you an hour in Bayeux or Port-en-Bessin. Port-en-Bessin is a working fishing village — if you go there, order whatever came off the boat that morning.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "paris",
    flag: "🇫🇷",
    country: "France — Paris",
    context: "Hotel Panache · Days 8–10",
    image: {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&auto=format&fit=crop&q=80",
      caption: "Croissant and café — the Parisian morning.",
    },
    subsections: [
      {
        title: "🍽️ The Paris Essentials",
        items: [
          { name: "Croissant", signature: true, body: "The benchmark of a Parisian bakery. Eaten standing at the counter (au comptoir) with a café allongé (long black). The difference between a good and a great croissant in Paris is significant. Find a boulangerie with a queue." },
          { name: "Steak-frites", signature: true, body: "The classic Parisian brasserie dish. Entrecôte or bavette, cooked saignant (rare) or à point (medium), with frites and sauce béarnaise. Order it in any classic brasserie." },
          { name: "Soupe à l'oignon", body: "Slow-cooked caramelised onions in beef broth, topped with a crouton and melted Gruyère, baked until bubbling. A Paris classic that's much better than its reputation elsewhere." },
          { name: "Steak tartare", body: "Raw minced beef, seasoned at the table with capers, shallots, Worcestershire, egg yolk, and mustard. A Parisian restaurant staple. Sounds alarming, tastes extraordinary." },
          { name: "Croque-monsieur / Croque-madame", body: "Ham and cheese toasted sandwich, baked with béchamel. The madame has a fried egg on top. The definitive Parisian café lunch." },
          { name: "Plateau de fromages", body: "Order it at any proper restaurant. A Parisian cheese plate typically includes something soft (Brie de Meaux), something washed-rind (Époisses), something aged (Comté), and something blue (Roquefort). Eaten before or instead of dessert." },
        ],
      },
    ],
    drinks: [
      { name: "Wine by the carafe (pichet)", signature: true, body: "Ordering a pichet de rouge or pichet de blanc (quarter or half-litre carafe of house red or white) is the most Parisian thing you can do at a restaurant or café. Cheap, honest, and usually very good." },
      { name: "Café", body: "A café in France is an espresso. A café crème is with steamed milk. A café allongé is a long black. Never order a café au lait in a restaurant — that's a home breakfast drink. Drink at the counter (au comptoir) for the authentic experience." },
      { name: "Kir / Kir Royale", body: "White wine (or champagne for the royale) with a splash of blackcurrant liqueur (cassis). The classic French aperitif. Order one at any café terrace before dinner." },
      { name: "Pastis", body: "An anise-flavoured spirit, diluted with cold water, which turns it milky white. Drunk as an aperitif, especially in warm weather. Very French, slightly addictive." },
    ],
    tip: {
      title: "For the full Paris food guide",
      body: "See the Paris section — restaurants, cafés, and market tips from Elsa Billgren's guide.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "waterloo",
    flag: "🇧🇪",
    country: "Belgium — Waterloo",
    context: "Day 11 · return leg battlefield lunch",
    relatedTownIds: ["waterloo"],
    image: {
      src: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=1600&auto=format&fit=crop&q=80",
      caption: "Belgian brasserie classic — beer and hearty meat.",
    },
    subsections: [
      {
        title: "🍽️ Food",
        items: [
          { name: "Brasserie Wellington — at the battlefield", signature: true, body: "On-site restaurant with a view of the battlefield. Good food, great setting for lunch. Order the stoofvlees met frites (Belgian beef stew with fries) — appropriate, given you're eating where the battle that ended Napoleon was fought." },
        ],
      },
    ],
  },
];

export type DrinksSummaryRow = {
  flag: string;
  country: string;
  drink: string;
};

export const oneDrinkPerCountry: DrinksSummaryRow[] = [
  { flag: "🇸🇪", country: "Sweden", drink: "Akvavit — ice cold, small glass, at dinner" },
  { flag: "🇩🇰", country: "Denmark", drink: "Gammel Dansk — try it at least once" },
  { flag: "🇩🇪", country: "Germany", drink: "Kölsch in Köln · Fischbrötchen + beer in Hamburg" },
  { flag: "🇧🇪", country: "Belgium", drink: "De Koninck Bolleke — Antwerp's own ale" },
  { flag: "🇫🇷", country: "Normandy", drink: "Calvados — the digestif of the region" },
  { flag: "🇫🇷", country: "Paris", drink: "A pichet of house wine at a café terrace" },
];

export const foodByTownId = foodStops.reduce<Record<string, FoodStop[]>>((acc, stop) => {
  for (const tid of stop.relatedTownIds ?? []) {
    if (!acc[tid]) acc[tid] = [];
    acc[tid].push(stop);
  }
  return acc;
}, {});
