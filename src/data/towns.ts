export type TownPoint = {
  name: string;
  description: string;
};

export type DeepDiveChapter = {
  title: string;
  body: string[];
};

export type TownImage = {
  src: string;
  caption: string;
};

export type Town = {
  id: string;
  slug: string;
  flag: string;
  name: string;
  country: string;
  tagline: string;
  visitContext: string;
  lodging?: { name: string; note?: string; url?: string };
  images?: TownImage[];
  history: { title: string; body: string }[];
  pointsOfInterest: TownPoint[];
  tips: TownPoint[];
  deepDive: {
    title: string;
    intro?: string;
    chapters: DeepDiveChapter[];
    lookFor?: string;
  };
  relatedDayIds: number[];
};


export const towns: Town[] = [
  // ──────────────────────────────────────────────────────────────
  {
    id: "malmo",
    slug: "malmo",
    flag: "🇸🇪",
    name: "Malmö",
    country: "Sweden",
    tagline: "The Bridge to the Continent",
    visitContext: "Day 1 · Sun 21 June · 1 night",
    lodging: { name: "MJ's Hotel", url: "https://mjs.life", note: "Vibrant maximalist design, famous breakfast." },
    images: [
      { src: "https://images.unsplash.com/photo-1670244498258-d897ebf81d70?w=1600&auto=format&fit=crop&q=80", caption: "The Turning Torso over Västra Hamnen." },
      { src: "https://images.unsplash.com/photo-1668884978643-28b8abcfb486?w=1600&auto=format&fit=crop&q=80", caption: "Malmöhus — the Renaissance castle." },
      { src: "https://images.unsplash.com/photo-1680432333629-d7a849be1713?w=1600&auto=format&fit=crop&q=80", caption: "Västra Hamnen waterfront." },
    ],
    history: [
      { title: "Danish Roots", body: "Malmö was a major Danish city until the Treaty of Roskilde in 1658. The half-timbered houses of Gamla Väster still betray the Danish layout." },
      { title: "Industrial Transformation", body: "Once a heavy industrial port — home to the Kockums shipyard — Malmö has reinvented itself as a hub for tech, design, and sustainability." },
      { title: "The Bridge", body: "The opening of the Öresund Bridge in 2000 fundamentally changed Malmö, reconnecting it physically and culturally to Copenhagen after 350 years apart." },
    ],
    pointsOfInterest: [
      { name: "Lilla Torg (Little Square)", description: "A cobbled square from the 1590s. Perfectly preserved half-timbered houses. Best place for people-watching and a drink, though it gets touristy." },
      { name: "Turning Torso", description: "Santiago Calatrava's twisting skyscraper — the first of its kind in the world. Defines the modern skyline of the Västra Hamnen (Western Harbour)." },
      { name: "Malmö Castle (Malmöhus)", description: "The oldest surviving Renaissance castle in Scandinavia. Houses the city museum and an aquarium." },
      { name: "Slottsträdgården", description: "A large organic community garden behind the castle with a beautiful windmill (Slottsmöllan)." },
      { name: "St. Peter's Church (Sankt Petri Kyrka)", description: "14th-century Gothic church with incredible acoustics and a massive altarpiece." },
    ],
    tips: [
      { name: "Falafel Capital", description: "Malmö is famous for its falafel. If you want a quick, authentic local lunch, this is it." },
      { name: "Walking city", description: "Most of the central areas are easily walkable from MJ's." },
      { name: "Gamla Väster architecture", description: "Look closely at the timber framing — this is pre-1658 Danish, not Swedish." },
    ],
    deepDive: {
      title: "Malmö — The Sound's Great Prize",
      intro: "A city caught between two kingdoms. For a young historian, the most interesting part is how a city can change its entire identity — language, culture, loyalty — in a few generations.",
      chapters: [
        {
          title: "1. The Danish Stronghold (1275–1658)",
          body: [
            "For over 350 years, Malmö was Denmark's second-largest city. Not just a town — a powerhouse.",
            "Herring gold: in the Middle Ages, the Öresund was thick with herring. Malmö became incredibly rich by catching, salting, and selling fish to all of Europe. This is why the Hanseatic League was always hanging around Malmö.",
            "The Griffin's birth: in 1437, King Eric of Pomerania gave Malmö its coat of arms — a silver griffin head with a red crown. Today, that griffin is the symbol for the entire province of Skåne.",
          ],
        },
        {
          title: "2. The Great Switch (1658)",
          body: [
            "Imagine waking up and being told you are no longer Danish, but Swedish. After a disastrous war for Denmark, the Treaty of Roskilde forced them to hand over Skåne (and Malmö) to Sweden.",
            "'Swedification': the Swedish kings didn't trust the people of Malmö. They banned Danish books, forbade Danish priests from preaching, and founded Lund University (just north of Malmö) specifically to train people to be 'properly Swedish.'",
          ],
        },
        {
          title: "3. The Bloodiest Battles",
          body: [
            "The Danes didn't give up easily. The Siege of Malmö (1677) saw Danish troops scaling the walls with ladders; the Swedish defenders fought them off in brutal hand-to-hand combat.",
            "As if the wars weren't enough, the Black Death hit Malmö hard in the early 1700s, killing almost half the population.",
          ],
        },
        {
          title: "4. The Industrial Titan",
          body: [
            "In the 1800s, Malmö stopped fighting and started building. Kockums Shipyard became one of the biggest in the world; for 150 years, the sound of hammers and welding defined the city.",
            "The Öresund Bridge (2000) finally reconnected Malmö to Copenhagen, ending 300 years of isolation from its former Danish home.",
          ],
        },
      ],
      lookFor:
        "When walking through Gamla Väster (the Old Town), look at the architecture. The half-timbered houses are classic Danish style — a reminder of the city's pre-1658 life.",
    },
    relatedDayIds: [1, 2],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "stemmen",
    slug: "stemmen",
    flag: "🇩🇪",
    name: "Stemmen",
    country: "Germany",
    tagline: "A Quiet Countryside Stop",
    visitContext: "Day 2 · Mon 22 June · 1 night",
    lodging: { name: "Hotell Landgut Stemmen", url: "https://landgut-stemmen.de/", note: "Country estate hotel in classic Lower Saxony style." },
    images: [
      { src: "https://images.unsplash.com/photo-1510510227760-819620981452?w=1600&auto=format&fit=crop&q=80", caption: "The Lüneburg Heath at evening." },
      { src: "https://images.unsplash.com/photo-1758537469065-0b6609a85e39?w=1600&auto=format&fit=crop&q=80", caption: "A traditional half-timbered farmhouse." },
      { src: "https://images.unsplash.com/photo-1603825943244-bcd020aab41e?w=1600&auto=format&fit=crop&q=80", caption: "Peat-bog country, the Tister Bauernmoor." },
    ],
    history: [
      { title: "Lower Saxony charm", body: "This region is known for its rolling fields, traditional brick farmhouses, and timber-framed buildings." },
      { title: "Agricultural heritage", body: "The village has remained largely agricultural throughout its history, preserving a slow pace of life." },
      { title: "Strategic location", body: "Located between Hamburg and Bremen, an ideal rest stop away from the busy motorways." },
    ],
    pointsOfInterest: [
      { name: "Landgut Stemmen", description: "Where you're staying — a historic estate turned into a country hotel reflecting the traditional architectural style of the region." },
      { name: "Lower Saxony village life", description: "A walk through the village shows the 'quiet side' of Germany — red-brick houses, neatly kept gardens, and historic barns." },
      { name: "Nature paths", description: "Numerous walking and cycling trails through surrounding fields and forests — ideal for stretching legs after the Malmö–Stemmen drive." },
    ],
    tips: [
      { name: "Quiet evenings", description: "Expect a very peaceful evening. A place to recharge before the drive to Belgium." },
      { name: "Traditional German fare", description: "Landgut Stemmen serves regional dishes — Schnitzel, seasonal vegetables, local beer." },
      { name: "Date carvings", description: "Look for date carvings on the timber beams of old houses in the village. Many date back to the 1700s — slow, steady rebuilding after the great wars." },
    ],
    deepDive: {
      title: "Stemmen — Survival in the Heart of Conflict",
      intro:
        "Stemmen looks like a quiet, peaceful village today, but its history is a window into the most devastating period in German history: the Thirty Years' War (1618–1648).",
      chapters: [
        {
          title: "1. The Horror of the Thirty Years' War",
          body: [
            "It started as a religious conflict between Catholics and Protestants but turned into a massive struggle for power across Europe.",
            "Lower Saxony was a highway for mercenary armies — not just soldiers, but private armies that 'lived off the land.' Swedish, German, and French troops would torture villagers to find hidden gold or food. The 'Swedish Drink' was a notorious method from this era.",
            "Total devastation: in some parts of this region, more than 50% of the population died from battle, famine, or plague. Villages like Stemmen had to be incredibly resilient to survive at all.",
          ],
        },
        {
          title: "2. The Lower Saxony House",
          body: [
            "Look at the old buildings in Stemmen — you'll see the Niedersachsenhaus style.",
            "One roof for all: traditionally, these massive timber-framed buildings housed the family, the servants, and the livestock all under one roof. The huge barn door at the end (the 'Groot Door') allowed a horse-drawn wagon to drive straight into the middle of the house to unload hay or grain.",
          ],
        },
        {
          title: "3. The Moors and the Cranes",
          body: [
            "The landscape around Stemmen is defined by its peat bogs. For centuries, people cut peat from the bogs for fuel — back-breaking, wet, dangerous work.",
            "The Tister Bauernmoor nearby is now a nature reserve — a remnant of the vast, wild landscape that surrounded Stemmen for thousands of years, long before the motorways.",
          ],
        },
      ],
      lookFor:
        "Look for date carvings on the timber beams of old houses in the village. Many will date back to the 1700s or 1800s, showing the slow, steady rebuilding of the region after the great wars.",
    },
    relatedDayIds: [2, 3],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "gent",
    slug: "gent",
    flag: "🇧🇪",
    name: "Gent",
    country: "Belgium",
    tagline: "Belgium's Medieval Masterpiece",
    visitContext: "Day 3 · Tue 23 June · 1 night",
    lodging: { name: "Jam Hotel Ghent", url: "https://www.jamhotels.eu/ghent", note: "Familjerum · 19€ parking on site." },
    images: [
      { src: "https://images.unsplash.com/photo-1696149046277-80f86cbf3fbe?w=1600&auto=format&fit=crop&q=80", caption: "Graslei guildhouses on the Leie at golden hour." },
      { src: "https://images.unsplash.com/photo-1657571575614-1e0c6f4188f5?w=1600&auto=format&fit=crop&q=80", caption: "Gravensteen — the Castle of the Counts." },
      { src: "https://images.unsplash.com/photo-1696149046101-3b7dd959b97c?w=1600&auto=format&fit=crop&q=80", caption: "Old town view toward the Belfry." },
    ],
    history: [
      { title: "Textile wealth", body: "In the 13th and 14th centuries, Gent was one of the largest and most prosperous cities in Europe — second only to Paris. Its wealth was built on the wool and cloth trade." },
      { title: "The Mystic Lamb", body: "St. Bavo's Cathedral houses the Adoration of the Mystic Lamb (1432) by the Van Eyck brothers — one of the most important and most stolen artworks in history." },
      { title: "Resilient city", body: "Gent has survived multiple occupations and sieges, yet its medieval core remains remarkably intact." },
    ],
    pointsOfInterest: [
      { name: "Graslei and Korenlei", description: "Two quays lining the Leie river — the most beautiful spots in the city, with a row of historic guild houses (some 12th century)." },
      { name: "Gravensteen (Castle of the Counts)", description: "Massive 12th-century moated castle in the heart of the city. Impressively intact; great views from the battlements." },
      { name: "St. Bavo's Cathedral (Sint-Baafskathedraal)", description: "Stunning mix of Romanesque, Gothic, and Baroque architecture. Home to the Ghent Altarpiece." },
      { name: "Belfry of Ghent", description: "UNESCO World Heritage site. Tallest belfry in Belgium — climb for panoramic views." },
      { name: "Patershol", description: "The city's oldest neighbourhood — a maze of narrow cobblestone streets filled with cozy restaurants and bars." },
    ],
    tips: [
      { name: "Cuberdons (Ghent Noses)", description: "Try the local cone-shaped, raspberry-flavoured candies. You'll see carts selling them in the squares." },
      { name: "Belgian beer culture", description: "Some of the best beer bars in the world. Café de Dulle Griet (where you give a shoe as deposit for a Max beer) and Waterhuis aan de Bierkant." },
      { name: "Gentse Waterzooi", description: "Classic local chicken or fish stew — the quintessential Gent comfort food." },
    ],
    deepDive: {
      title: "Gent — The City of Rebellious Merchants",
      intro:
        "In the Middle Ages, Gent wasn't just a city — it was an economic superpower. The Silicon Valley of the 1300s, but the industry was high-end wool and luxury cloth.",
      chapters: [
        {
          title: "1. The Wool Empire",
          body: [
            "If you lived in Europe in the 14th century and wanted the finest clothes, you bought them from Gent. The city imported massive amounts of wool from England; skilled weavers turned it into Flemish Cloth, which was exported as far as North Africa and Russia.",
            "The city was ruled by Guilds — powerful unions of merchants and craftsmen. They were so rich they could afford their own castles and private armies to fight off kings and counts.",
          ],
        },
        {
          title: "2. The Great Altarpiece Heists",
          body: [
            "The Adoration of the Mystic Lamb is often called the most important painting in the world — and it's definitely the most stolen.",
            "Napoleon's troops stole it and took it to Paris. During WWII, Hitler's agents stole it and hid it in an Austrian salt mine (the Monuments Men eventually found it). And in 1934, one panel — the Just Judges — was stolen and has never been found. A replica sits in the cathedral today.",
          ],
        },
        {
          title: "3. The Rebel Spirit — Stropdragers",
          body: [
            "Gent has a history of saying No to authority. In 1540, Emperor Charles V (who was actually born in Gent!) punished the city for a tax revolt by forcing the city's leaders to walk through the streets wearing nooses around their necks.",
            "To this day, the people of Gent call themselves Stropdragers — Noose-bearers — as a sign of their proud, independent spirit.",
          ],
        },
        {
          title: "4. The Calvinist Republic (1577–1584)",
          body: [
            "For a brief seven years, Gent broke away from the Spanish Empire and established its own independent republic based on radical Protestant beliefs. A time of intense religious fervour and conflict before being reconquered by Spain.",
          ],
        },
      ],
      lookFor:
        "Walk along the Graslei. Look at the guild houses — each one belonged to a different trade (the masons, the grain measurers, the skippers). Their wealth is literally carved into the stone facades.",
    },
    relatedDayIds: [3, 4],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "honfleur",
    slug: "honfleur",
    flag: "🇫🇷",
    name: "Honfleur",
    country: "France",
    tagline: "The Impressionist's Port",
    visitContext: "Day 4 · Wed 24 June · 1 night",
    lodging: { name: "L'Absinthe Hôtel", url: "https://www.absinthe.fr/en/", note: "Familjerum · historic harbour location." },
    images: [
      { src: "https://images.unsplash.com/photo-1720610892502-f15aeef291f5?w=1600&auto=format&fit=crop&q=80", caption: "Vieux-Bassin, twice reflected." },
      { src: "https://images.unsplash.com/photo-1617499303865-88285ac23087?w=1600&auto=format&fit=crop&q=80", caption: "St. Catherine's wooden church." },
      { src: "https://images.unsplash.com/photo-1651656624013-7d8909b560eb?w=1600&auto=format&fit=crop&q=80", caption: "Pont de Normandie at dusk." },
    ],
    history: [
      { title: "Ancient port", body: "A strategic port for centuries. From here, Samuel de Champlain sailed to found Quebec in 1608." },
      { title: "Impressionist haven", body: "The town's unique light and picturesque harbour (the Vieux-Bassin) attracted masters like Eugène Boudin, Claude Monet, and Camille Pissarro." },
      { title: "Resilient city", body: "Its location and historic status protected it through centuries of conflict, leaving it with a rare architectural consistency — virtually untouched by WWII bombing." },
    ],
    pointsOfInterest: [
      { name: "Vieux-Bassin (Old Dock)", description: "Heart of Honfleur — narrow, slate-fronted houses (some seven storeys high) reflected in the water." },
      { name: "Saint Catherine's Church", description: "Largest wooden church in France, built in the 15th century by local shipbuilders after the Hundred Years' War. The ceiling looks like an upturned ship's hull." },
      { name: "Eugène Boudin Museum", description: "Wonderful collection of works by the man who taught Monet to paint en plein air." },
      { name: "The Lieutenancy", description: "16th-century stone building at the harbour entrance — the former residence of the King's Lieutenant who oversaw the spoils brought in by the Corsairs." },
      { name: "Salt Granaries (Greniers à Sel)", description: "Massive 17th-century stone buildings used to store salt for cod fishing. Now they house art exhibitions." },
    ],
    tips: [
      { name: "Norman cider & Calvados", description: "This is the heart of the Pays d'Auge region — don't leave without tasting local cider or a glass of Calvados." },
      { name: "Galettes & crêpes", description: "Many excellent crêperies. Look for those off the main harbour for a more authentic experience." },
      { name: "Saturday market", description: "If you're there on a Saturday, the market in front of St. Catherine's is fantastic for local cheeses and produce." },
    ],
    deepDive: {
      title: "Honfleur — Explorers and Privateers",
      intro: "Honfleur isn't just a pretty harbour. It was once the gateway to the world for the French navy and some of history's most daring explorers.",
      chapters: [
        {
          title: "1. The Hundred Years' War Stronghold",
          body: [
            "Honfleur's location at the mouth of the Seine made it a prize everyone wanted. The English occupied it for over 30 years — a vital base for their fleet.",
            "After the English were finally kicked out in 1450, the town was broke. They needed a new church but couldn't afford stone masons. So the local shipbuilders built one themselves. Look up inside Sainte-Catherine's Church — the roof looks exactly like the hull of a wooden ship turned upside down. It's the largest wooden church in France.",
          ],
        },
        {
          title: "2. Setting Sail for the New World",
          body: [
            "In the 1500s and 1600s, Honfleur was the launching pad for French exploration. Samuel de Champlain set sail from here in 1608 and eventually founded Quebec City — the heart of what would become Canada.",
            "Explorers from Honfleur were among the first Europeans to reach the coasts of Brazil and the rich fishing grounds of Newfoundland.",
          ],
        },
        {
          title: "3. The Privateers (Legal Pirates)",
          body: [
            "Honfleur was home to Corsairs — privateers who were given permission by the French King to attack and rob enemy ships (mostly English and Spanish).",
            "The big stone Lieutenancy at the entrance to the Vieux Bassin was where the King's Lieutenant oversaw the spoils of war brought in by the pirate ships.",
          ],
        },
        {
          title: "4. The Birth of Impressionism",
          body: [
            "In the 1800s, the adventure shifted from the sea to the canvas. The unique way the light hits the water at Honfleur attracted painters like Claude Monet. He and his mentor Eugène Boudin would sit on the docks and invent a whole new way of painting en plein air.",
          ],
        },
      ],
      lookFor:
        "Walk around the Vieux Bassin. Notice the houses are very narrow but very tall — up to 7 storeys. Space around the harbour was so expensive that they could only build up, not out.",
    },
    relatedDayIds: [4, 5],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "bayeux",
    slug: "bayeux",
    flag: "🇫🇷",
    name: "Bayeux",
    country: "France",
    tagline: "The City That Survived Everything",
    visitContext: "Days 5–7 · 25–28 June · 3 nights",
    lodging: { name: "Airbnb Lägenhet", note: "★ 4,93 · 2 sovrum · 2 sängar · Sara betalt vid bokning." },
    images: [
      { src: "https://images.unsplash.com/photo-1635198665219-5de923df4bfb?w=1600&auto=format&fit=crop&q=80", caption: "Bayeux Cathedral, west façade." },
      { src: "https://images.unsplash.com/photo-1720015796515-34b0ac9380cc?w=1600&auto=format&fit=crop&q=80", caption: "Medieval old town street." },
      { src: "https://images.unsplash.com/photo-1590338004666-9945a963493f?w=1600&auto=format&fit=crop&q=80", caption: "Norman bocage countryside near Bayeux." },
    ],
    history: [
      { title: "The Tapestry City", body: "Bayeux is famous for the 70-metre embroidered cloth from the 11th century telling the story of the Norman Conquest of England in 1066." },
      { title: "Liberated June 7, 1944", body: "The first French city liberated after D-Day. Because it fell so quickly, it escaped the bombing that flattened most of Normandy. The medieval centre is essentially intact." },
      { title: "De Gaulle's first speech", body: "Charles de Gaulle gave his first speech on liberated French soil here on 14 June 1944 — ten days after the landings." },
    ],
    pointsOfInterest: [
      { name: "Cathédrale Notre-Dame", description: "The heart of the city. Romanesque 11th-century crypt, Gothic 13th-century nave. The Tapestry was originally made for this cathedral." },
      { name: "Bayeux War Cemetery", description: "Largest British WWII cemetery in France — 4,648 graves. The Latin inscription reads: 'We, whom William conquered, set free the native land of the conqueror.'" },
      { name: "Mémorial Musée de la Bataille de Normandie", description: "Best overview of the entire Normandy campaign — vehicles, weapons, uniforms, personal stories. 2–3 hours." },
      { name: "The Old Town", description: "Half-timbered houses along Rue Saint-Martin and Rue Saint-Jean, old tanneries along the Aure River, 17th–18th-century mansions around the cathedral." },
      { name: "Bayeux Broderie", description: "Embroidery shop near the Tapestry Museum — sells kits to stitch your own piece of the Bayeux Tapestry." },
    ],
    tips: [
      { name: "⚠️ Tapestry CLOSED", description: "The museum is closed for renovation Sept 2025 → Oct 2027. Plan around it." },
      { name: "Norman cider", description: "Au Louis d'Or in the centre is a fine spot to try local Norman cider — the regional alternative to wine." },
      { name: "Reine Mathilde Patisserie", description: "Corner by the cathedral. Hot chocolate reportedly excellent for a morning start." },
    ],
    deepDive: {
      title: "Bayeux — The City That Survived Everything",
      intro:
        "Bayeux is a miracle of survival. While almost every other Norman city was bombed flat during the D-Day campaign, Bayeux was liberated on June 7, 1944 — just one day after the landings — so quickly that it escaped virtually unscathed.",
      chapters: [
        {
          title: "1. The Tapestry — A 70-Metre Comic Strip",
          body: [
            "The Bayeux Tapestry isn't a tapestry at all — it's an embroidery. A 70-metre linen strip embroidered with coloured wool, telling the story of the Norman Conquest of England in 1066. It contains 626 human figures, 202 horses, 55 dogs, and 505 other animals.",
            "Almost certainly commissioned by Bishop Odo of Bayeux, William the Conqueror's half-brother, to justify the invasion. It tells the Norman version: Harold is shown as an oath-breaker who got what he deserved.",
            "The mystery: nobody knows exactly when or where it was made. The best guess is England, around 1077, by Anglo-Saxon embroiderers working for their new Norman masters. The conquered made the conqueror's propaganda.",
          ],
        },
        {
          title: "2. The Cathedral That William Built",
          body: [
            "William attended the consecration of Notre-Dame de Bayeux himself in 1077. The Bayeux Tapestry may have been first displayed at this event — hung around the nave for the assembled Norman lords to admire.",
            "The crypt and lower nave are pure Romanesque (11th century) — heavy, round arches. The upper nave and tower were rebuilt in Gothic style (13th century). You can literally see the transition between two architectural eras in one building.",
          ],
        },
        {
          title: "3. The Miracle of Liberation",
          body: [
            "On June 7, 1944, British forces from Gold Beach advanced inland and liberated Bayeux with almost no fighting. The Germans had already pulled back. The medieval centre was spared.",
            "On June 14, 1944, Charles de Gaulle gave his first speech on liberated French soil here — a deeply symbolic moment: the first French city freed from four years of occupation.",
            "The British Cemetery's inscription — 'We, whom William conquered, set free the native land of the conqueror' — ties 1066 directly to 1944.",
          ],
        },
        {
          title: "4. The Lace and the River",
          body: [
            "Before the wars, Bayeux was known for something gentler. From the 17th century, fine Bayeux lace was worn by the French aristocracy. The craft nearly died out but is still practised by a handful of artisans.",
            "The small Aure River that runs through the city centre was essential to the tanning and dyeing industries. The old tanneries along its banks are some of the most atmospheric spots.",
          ],
        },
      ],
      lookFor:
        "In the Bayeux War Cemetery, find the grave of a German soldier buried among the British and Commonwealth dead. The cemetery holds soldiers from both sides — a quiet reminder that the ground doesn't distinguish between enemies.",
    },
    relatedDayIds: [4, 5, 6, 7, 8],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "waterloo",
    slug: "waterloo",
    flag: "🇧🇪",
    name: "Waterloo",
    country: "Belgium",
    tagline: "Napoleon's Final Battle — June 18, 1815",
    visitContext: "Day 11 · Wed 1 July · midday visit on Paris → Recklinghausen drive",
    images: [
      { src: "https://images.unsplash.com/photo-1586065695931-44ebab9fca13?w=1600&auto=format&fit=crop&q=80", caption: "The Lion's Mound — 226 steps." },
      { src: "https://images.unsplash.com/photo-1734865690020-2d5c0711b864?w=1600&auto=format&fit=crop&q=80", caption: "The battlefield from the Mound — Mont-Saint-Jean." },
      { src: "https://images.unsplash.com/photo-1734865664440-baf72f06d45a?w=1600&auto=format&fit=crop&q=80", caption: "Battlefield landscape near Hougoumont." },
    ],
    history: [
      { title: "The day the empire ended", body: "Napoleon — back from Elba for the Hundred Days — faced Wellington's Anglo-allied army and Blücher's Prussians on the rolling farmland south of Brussels. He attacked all day. At 7pm the Prussians arrived in force on his right flank. The French army broke and fled. It was over in hours." },
      { title: "What followed", body: "Napoleon abdicated four days later. He was exiled to the remote island of Saint Helena in the South Atlantic, where he died in 1821. He was never allowed to return to France." },
      { title: "Connecting to Paris", body: "Everything you saw in Paris — the Arc de Triomphe listing his battles, the Vendôme Column, the tomb at Les Invalides — ends here, on these fields." },
    ],
    pointsOfInterest: [
      { name: "Memorial 1815 — Visitor Centre & Panorama", description: "1,500m² of exhibitions: dioramas, uniforms, weapons, animated maps, and a skeleton of an actual Waterloo soldier discovered in 2012. Ends with the Panorama — a vast 25m circular painting from 1912 of the cavalry charges. 1.5–2 hours." },
      { name: "Lion's Mound (Butte du Lion)", description: "40m artificial hill topped with a cast-iron lion, built 1823–1826 to mark where the Prince of Orange was wounded. 226 steep steps to the top. 360° view with orientation table. 30–45 min." },
      { name: "Le Caillou Farm — Napoleon's Last HQ", description: "4km south of the Lion Mound. Personal relics: his drinking mug, campaign blanket, a lock of his hair in a locket, his diamond ring, and the table where the final battle plan was drawn up. Quieter and more intimate. 45 min." },
      { name: "Hougoumont Farm", description: "The chateau farm that protected Wellington's right flank — where the most violent fighting of the day took place. Memorial chapel and restored buildings open to visitors. 30–45 min." },
      { name: "Brasserie Wellington", description: "Brewery-style restaurant with a direct view over the battlefield. Reportedly good food, great setting." },
    ],
    tips: [
      { name: "🎟️ Buy the 1815 Pass — €30 pp", description: "Covers all four main sites. Visitor Centre must be used on the day; outlying sites valid one year. Buy at the ticket desk on arrival." },
      { name: "Approach from the northwest", description: "Route du Lion is permanently closed near the Lion Mound. Approach from Braine-l'Alleud — that's where the car park is. Free parking on site." },
      { name: "Charging", description: "Tesla Superchargers in Brussels — charge before or after the visit." },
      { name: "Open daily", description: "Apr–Sep 9:30am–6:30pm · Oct–Mar 10am–5pm. 365 days a year." },
    ],
    deepDive: {
      title: "Waterloo — The End of an Empire",
      intro:
        "The Battle of Waterloo wasn't just a fight; it was the final showdown between the greatest general of the age and his toughest rival, the Duke of Wellington.",
      chapters: [
        {
          title: "1. Divide and Conquer",
          body: [
            "Napoleon was a master of speed. He knew the Anglo-Allied army (Wellington) and the Prussian army (Blücher) were too strong if they stayed together. His plan was to strike right between them, defeat the Prussians first, then turn his full power on Wellington before they could reunite.",
            "It rained heavily the night before. Napoleon delayed his attack until 11:30 AM to let the ground dry so his heavy cannons could move. This delay was a huge mistake — it gave the Prussians more time to march toward the battlefield.",
          ],
        },
        {
          title: "2. Wellington's Reverse Slope Tactic",
          body: [
            "The Duke of Wellington was a defensive genius. He chose a long ridge — Mont-Saint-Jean — and hid most of his soldiers behind the crest of the hill.",
            "When the French looked at the ridge, it appeared lightly defended. When they reached the top, thousands of Allied soldiers would suddenly stand up and fire at close range.",
            "When the French cavalry charged, the British infantry formed hollow squares. Horses were too smart to run into a wall of bayonets, so the cavalry circled the squares while being picked off by musket fire.",
          ],
        },
        {
          title: "3. The Three Fortified Farms",
          body: [
            "Wellington used three big stone farmhouses as anchors for his line. Hougoumont — a battle within a battle. The French spent all day trying to take it. At one point they smashed open the gates, but the British managed to close them again in a desperate hand-to-hand struggle.",
            "La Haye Sainte, in the centre, fell to the French late in the afternoon — and almost won them the battle. Papelotte guarded the eastern flank — and was where the Prussians finally arrived to save the day.",
          ],
        },
        {
          title: "4. The Old Guard",
          body: [
            "Near sunset, Napoleon realised he was losing. He sent in his Imperial Guard — the Old Guard, his elite veterans who had never been defeated. Even they couldn't break the Allied line. When they began to retreat, the rest of the French army panicked, shouting 'La Garde recule!' (The Guard is retreating!). The battle turned into a total rout.",
          ],
        },
        {
          title: "5. St. Helena",
          body: [
            "Napoleon fled back to Paris and was exiled to the tiny island of St. Helena in the middle of the Atlantic, where he died six years later. The map of Europe was redrawn, and there wouldn't be another massive war like this for 100 years.",
          ],
        },
      ],
      lookFor:
        "Climb the 226 steps of the Lion's Mound. From the top you can see exactly where the two armies stood. The mound was built using earth from the actual battlefield — the ground you're standing on was once the ridge Wellington defended.",
    },
    relatedDayIds: [11],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "recklinghausen",
    slug: "recklinghausen",
    flag: "🇩🇪",
    name: "Recklinghausen",
    country: "Germany",
    tagline: "Gateway to the Ruhr",
    visitContext: "Day 11 · Wed 1 July · 1 night",
    lodging: { name: "Aspire Palais Recklinghausen", url: "https://aspire-hotels.com/palais/de/startseite/", note: "Trademark Collection by Wyndham · 88,30 €." },
    images: [
      { src: "https://images.unsplash.com/photo-1627281107224-9c8ff16656db?w=1600&auto=format&fit=crop&q=80", caption: "Recklinghausen, on the edge of the Ruhr." },
      { src: "https://images.unsplash.com/photo-1600250382979-c06b4926b941?w=1600&auto=format&fit=crop&q=80", caption: "Zeche Zollverein UNESCO site, nearby Essen." },
      { src: "https://images.unsplash.com/photo-1481414981591-5732874c7193?w=1600&auto=format&fit=crop&q=80", caption: "Ruhr industrial heritage." },
    ],
    history: [
      { title: "Ancient origins", body: "One of the oldest documented cities in Westphalia, with records going back to 1017. Part of the Vest Recklinghausen — an exclave of the Archbishopric of Cologne for nearly 600 years." },
      { title: "Ruhr industrial heritage", body: "While never as heavily industrialised as Essen or Dortmund, Recklinghausen sits at the crossroads of the Ruhr's transformation from coal and steel to culture and green space." },
      { title: "Ruhrfestspiele", body: "Founded in 1946, one of Germany's oldest and most respected theatre and arts festivals. Born from a post-war solidarity exchange between miners and actors." },
    ],
    pointsOfInterest: [
      { name: "Altstadt (Old Town)", description: "Compact, walkable medieval centre with half-timbered houses, a market square, and narrow streets — one of the best-preserved old towns in the Ruhr region." },
      { name: "Ikonen-Museum (Icon Museum)", description: "The largest collection of Orthodox Christian icons outside the Orthodox world. Over 1,000 icons spanning a thousand years. A genuinely surprising museum for this part of Germany." },
      { name: "Petruskirche (St. Peter's Church)", description: "Beautiful 13th-century parish church in the heart of the old town. The tower is a Recklinghausen landmark." },
      { name: "Stadtgarten", description: "Large, leafy park on the edge of the old town — perfect for a walk after arrival." },
    ],
    tips: [
      { name: "Evening stroll", description: "The Altstadt is compact and best explored on foot. Walk from the market square through the pedestrian zone and around St. Peter's Church." },
      { name: "Westphalian cuisine", description: "Look for Pfefferpotthast (beef and onion stew), Pumpernickel, and local beers." },
      { name: "Ruhr exploration", description: "If you have extra time, Essen (Zeche Zollverein, a UNESCO industrial heritage site) and Dortmund are 20–30 minutes away." },
      { name: "Charging", description: "Tesla Superchargers available in the Ruhr area (Essen, Dortmund). Check Tesla nav for the closest." },
    ],
    deepDive: {
      title: "Recklinghausen — The Quiet Edge of the Ruhr",
      intro:
        "Sitting at the northern edge of the Ruhr region, Recklinghausen has a distinctly different character from its industrial neighbours: medieval old town, world-class icon museum, and one of Germany's oldest folk festivals.",
      chapters: [
        {
          title: "1. The Cologne Exclave",
          body: [
            "For nearly 600 years, the Vest Recklinghausen was an exclave of the Archbishopric of Cologne — a piece of Catholic prince-bishop's territory surrounded by Protestant states. This shaped its architecture, its religious life, and its identity for centuries.",
          ],
        },
        {
          title: "2. The Ruhr Story",
          body: [
            "The Ruhr was the engine room of German industrialisation — coal, steel, chemicals. Recklinghausen sat at the edge of it, less heavily industrialised than Essen or Dortmund, which is partly why its old town survived.",
            "After the post-war collapse of coal and steel, the Ruhr reinvented itself: the Zeche Zollverein in Essen — the largest coal mine in the world when it closed — is now a UNESCO World Heritage Site and a Rem Koolhaas-designed museum.",
          ],
        },
        {
          title: "3. The Ruhrfestspiele",
          body: [
            "Founded in 1946 from an extraordinary post-war exchange: Hamburg actors performed in Recklinghausen in return for coal donations from the local miners — coal that kept Hamburg's theatres heated through the brutal post-war winter. Out of that swap grew one of Germany's most respected arts festivals.",
          ],
        },
      ],
      lookFor:
        "In the Altstadt, look for the Cologne arms — a black cross on white — on old buildings and gates. They mark the centuries of prince-bishop rule that shaped this corner of Westphalia.",
    },
    relatedDayIds: [11, 12],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "lubeck",
    slug: "lubeck",
    flag: "🇩🇪",
    name: "Lübeck",
    country: "Germany",
    tagline: "The Queen of the Hanseatic League",
    visitContext: "Day 12 · Thu 2 July · 1 night",
    lodging: { name: "Top CityLine Klassik Altstadt Hotel", url: "https://www.klassik-altstadt-hotel.de", note: "Familjerum · 362 € · kort Sara 28 juni." },
    images: [
      { src: "https://images.unsplash.com/photo-1663591800789-9004bf951782?w=1600&auto=format&fit=crop&q=80", caption: "Holstentor — leaning slightly tipsy." },
      { src: "https://images.unsplash.com/photo-1667319386140-da709d6b68d4?w=1600&auto=format&fit=crop&q=80", caption: "Lübeck skyline of brick spires." },
      { src: "https://images.unsplash.com/photo-1665426677397-318ccb6f8d78?w=1600&auto=format&fit=crop&q=80", caption: "A cobbled street in the old town." },
    ],
    history: [
      { title: "Hanseatic powerhouse", body: "Lübeck was the 'capital' of the Hanseatic League, controlling trade in the Baltic for centuries. UNESCO World Heritage Site." },
      { title: "Brick Gothic architecture", body: "Seven church spires define the skyline, showcasing the unique Northern European Backsteingotik (Brick Gothic) style." },
      { title: "Maritime gateway", body: "For centuries, the primary gateway between the North Sea and the Baltic." },
    ],
    pointsOfInterest: [
      { name: "Holstentor (Holsten Gate)", description: "The world-famous twin-towered city gate from 1464 — symbol of Lübeck. Now houses a museum of city history." },
      { name: "St. Mary's Church (Marienkirche)", description: "Model for 70 other Brick Gothic churches in the Baltic region. Has the world's highest brick vault." },
      { name: "Town Hall (Rathaus)", description: "One of the oldest and most beautiful town halls in Germany, reflecting centuries of Hanseatic wealth." },
      { name: "Niederegger Marzipan", description: "Lübeck is the world's marzipan capital. Visit the original Niederegger café for a tasting." },
      { name: "Heilig-Geist-Hospital", description: "One of the oldest social institutions in Europe, built in 1286. Its historic infirmary hall is incredibly atmospheric." },
    ],
    tips: [
      { name: "Passat Ship", description: "If you have time, cross the Trave river to see the historic four-masted barque Passat — one of the famous Flying P-Liners." },
      { name: "Rotspon", description: "Lübeck's famous red wine, imported from Bordeaux and aged in local oak barrels — a centuries-old tradition." },
      { name: "Historic courtyards (Höfe und Gänge)", description: "Explore the narrow, hidden residential passages off the main streets — some of the most charming spots in the city." },
      { name: "Marzipan Museum", description: "Located above the Niederegger café — a quick and interesting look at the sweet's history." },
    ],
    deepDive: {
      title: "Lübeck — The Queen of the Hanse",
      intro: "Lübeck was the New York City of the Middle Ages. As the capital of the Hanseatic League, it controlled the trade of half a continent.",
      chapters: [
        {
          title: "1. The Hanseatic League — The Medieval Amazon",
          body: [
            "Lübeck was the leader of the Hanseatic League — a group of over 100 cities that controlled all trade in the Baltic and North Seas. They traded everything: salt from Germany, fur from Russia, cloth from Flanders, dried fish from Norway.",
            "Lübeck Law: the city was so influential that its system of laws (the Lübisches Recht) was copied by over 100 other cities in Europe.",
            "The League was so powerful it even fought and won wars against kings — including the kings of Denmark and Norway — to protect its business interests.",
          ],
        },
        {
          title: "2. Brick Gothic Architecture",
          body: [
            "Lübeck doesn't look like cities in Southern Germany or France. It has a very specific style: Backsteingotik, Brick Gothic.",
            "The skyline is famous for its seven church towers. The wealthiest merchants competed to build the tallest, most beautiful brick churches.",
            "The Holstentor was built in 1464 to show off the city's wealth and power. It's so iconic it used to be on the German 50-Mark banknote.",
          ],
        },
        {
          title: "3. The Marzipan Legend",
          body: [
            "Lübeck is the world capital of marzipan. Legend says that during a famine or siege in 1407, the city ran out of flour. The only things left in the storehouses were almonds and sugar. The bakers mashed them together to make 'bread' — and marzipan was born.",
            "Since 1806, the Niederegger family has been making the world's most famous marzipan in Lübeck.",
          ],
        },
        {
          title: "4. The Decline",
          body: [
            "The League's power finally broke in the 1600s as trade moved from the Baltic Sea to the Atlantic Ocean (toward America). The Thirty Years' War was the final blow that ended Hanseatic dominance.",
          ],
        },
      ],
      lookFor:
        "Look at the Holstentor gate. You'll notice it leans to one side. Because it was built on soft marshy ground, the massive weight of the bricks caused it to sink unevenly over the centuries.",
    },
    relatedDayIds: [12, 13],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "lund",
    slug: "lund",
    flag: "🇸🇪",
    name: "Lund",
    country: "Sweden",
    tagline: "The Cathedral City of the North",
    visitContext: "Day 13 · Fri 3 July · 1 night",
    lodging: { name: "The More Hotel Lund", url: "https://www.themorehotel.se/lund/", note: "Familjerum · 2 366,85 kr · parking via lund@themorehotel.com." },
    images: [
      { src: "https://images.unsplash.com/photo-1601215899055-017ccd00d567?w=1600&auto=format&fit=crop&q=80", caption: "Lund — back on Swedish soil." },
      { src: "https://images.unsplash.com/photo-1542628682-88321d2a4828?w=1600&auto=format&fit=crop&q=80", caption: "Cobblestone streets in the old town." },
      { src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&auto=format&fit=crop&q=80", caption: "Lunds domkyrka — the Romanesque cathedral." },
    ],
    history: [
      { title: "Founded by a Danish king", body: "Lund was founded around 990 by Sweyn Forkbeard, then a Danish king. For nearly 700 years it was Danish — and for much of that time the spiritual capital of all of Scandinavia." },
      { title: "Archbishopric of the North", body: "From 1103 until the Reformation, Lund was the seat of the Archbishop of all Scandinavia — a religious centre as important as Cologne or Canterbury." },
      { title: "Swedish since 1658", body: "Sweden took Skåne from Denmark by the Treaty of Roskilde in 1658. To bind the new province to the crown, the Swedish king founded Lund University in 1666 — still the second-oldest in Sweden." },
    ],
    pointsOfInterest: [
      { name: "Lunds domkyrka", description: "The Romanesque cathedral, consecrated in 1145 — the oldest cathedral in Scandinavia. Don't miss the medieval astronomical clock (Horologium mirabile Lundense) that performs at noon and 3pm." },
      { name: "The crypt", description: "Beneath the cathedral, the great twelfth-century crypt holds the column where Finn the Giant supposedly tried to pull down the cathedral and was turned to stone." },
      { name: "Kulturen", description: "Open-air museum founded in 1892 — the second-oldest of its kind in the world, after Stockholm's Skansen. Historic Skåne farmhouses, churches, and townhouses on a city block." },
      { name: "Lundagård & Kungshuset", description: "The green park beside the cathedral, anchored by Kungshuset — the old royal palace that became the original university building." },
      { name: "Botaniska trädgården", description: "The university's botanical garden — 8 hectares of formal beds, glasshouses, and shaded benches. Free, and locals eat lunch here in summer." },
    ],
    tips: [
      { name: "Catch the clock", description: "Be inside the cathedral at 12:00 or 15:00 — the In Dulci Jubilo plays, three wooden kings parade past the Virgin, and knights joust. It's been doing this since the 1400s." },
      { name: "Stortorget for fika", description: "The main square has a handful of old coffee houses — Conditori Lundagård is the obvious one. Order a wienerbröd and people-watch the students." },
      { name: "Walk the cobbles", description: "The medieval street grid south and east of the cathedral is unchanged. Bredgatan, Adelgatan, Kiliansgatan — all worth wandering." },
      { name: "Mårtenstorget on Saturday", description: "Saturday morning food market on Mårtenstorget — bread, cheese, summer berries, flowers." },
    ],
    deepDive: {
      title: "Lund — The Cathedral City of the North",
      intro:
        "For 700 years Lund was Danish, and for much of that time it was the religious capital of all of Scandinavia. The cathedral is the oldest in the North; the university is the second-oldest in Sweden. The town reads like a small, dense layering of medieval and early-modern Europe.",
      chapters: [
        {
          title: "1. A Danish City for Seven Centuries",
          body: [
            "Lund was founded around the year 990 by Sweyn Forkbeard, the Danish king who would soon conquer England. Until the Treaty of Roskilde in 1658, it was Danish — Skåne, Halland, and Blekinge all belonged to the Danish crown.",
            "In 1103 the Pope made Lund the seat of an archbishop with authority over the entire Nordic region — Sweden, Norway, Denmark, Iceland, the Faroes, Greenland. For four hundred years, every bishop in Scandinavia answered to Lund.",
          ],
        },
        {
          title: "2. The Cathedral and the Giant",
          body: [
            "Lunds domkyrka was consecrated in 1145. It's a pure Romanesque cathedral — round arches, heavy stone, a great twin-towered front — built when the style was already going out of fashion elsewhere in Europe.",
            "The astronomical clock dates from around 1425. When it plays, three wooden kings parade past the Virgin and Child, knights joust, and the organ plays In Dulci Jubilo. It was dismantled in 1837, sat in pieces for 86 years, and was reassembled in 1923.",
            "Down in the crypt, look for the column gripped by a stone giant. The legend: Finn the Giant agreed to build the cathedral in exchange for the sun, the moon, or the bishop's eyes. The bishop figured out his name in time, and Finn — beaten — turned to stone trying to pull the cathedral down. The column is still there.",
          ],
        },
        {
          title: "3. The University as a Political Project",
          body: [
            "When Sweden took Skåne in 1658, the population was Danish-speaking, Danish-leaning, and not at all happy to have changed kings. Eight years later, in 1666, the Swedish king Karl XI founded Lund University — explicitly to Swedify the new province.",
            "It worked. The university trained Skånian children in Swedish, in Swedish law, in the Swedish church. Today Lund is one of the two great university towns in Sweden — the other being Uppsala — and around 40,000 students live in a city of 90,000.",
          ],
        },
        {
          title: "4. The Battle of Lund, 1676",
          body: [
            "The Danes did not give up Skåne quietly. In 1676 a Danish army landed and marched on Lund. The Swedish army met them on the fields just north of the cathedral on December 4th.",
            "What followed is sometimes called the bloodiest battle ever fought on Nordic soil. Around 9,000 men died in a single day — more than half of all the soldiers on the field. Sweden won, and Skåne stayed Swedish.",
          ],
        },
      ],
      lookFor:
        "Be inside the cathedral at either noon or 3pm. The astronomical clock plays for about three minutes — In Dulci Jubilo on the organ, a procession of carved kings, and a quiet click as 600-year-old gears turn. There's nothing else quite like it in Scandinavia.",
    },
    relatedDayIds: [13, 14],
  },
];

export const townsById = Object.fromEntries(towns.map((t) => [t.id, t]));

export function townsForDay(dayId: number): Town[] {
  return towns.filter((t) => t.relatedDayIds.includes(dayId));
}
