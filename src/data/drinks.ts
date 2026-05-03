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
    region: "Sverige",
    subtitle: "Stockholm & Vandalorum",
    relatedTownIds: ["malmo"],
    beer: [
      "Sverige har en av Europas mest levande hantverksölscener, driven av en generation bryggare som utbildade sig i USA och kom hem med stora ambitioner. Statens alkoholmonopol Systembolaget (de enda butikerna som får sälja alkohol över 3,5% ABV) har paradoxalt nog drivit upp kvaliteten — för att ta sig in på de hyllorna måste man vara genuint bra.",
    ],
    beerVenues: [
      { name: "Omnipollo", address: "Stockholm", note: "Internationellt hyllat, vilt kreativt. Deras Noa pastry stout är legendarisk." },
      { name: "Dugges Ale & Porterbryggeri", address: "Göteborg, spritt tillgängligt", note: "Pålitliga IPA:er och stouts — en utmärkt ingångspunkt till svensk hantverksöl." },
      { name: "Brutal Brewing", note: "Schwedisk marknadsstabiltet — lättdruckna lageröl och IPA:er." },
      { name: "Norrby Bryggeri", address: "Jönköping/Värnamoregionen", note: "Leta efter flaskor på det Systembolaget som ligger närmast Vandalorum." },
    ],
    callouts: [
      { kind: "tip", title: "Beställ detta", body: "\"En fatöl, tack\" — vad som än är på fat." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "denmark",
    flag: "🇩🇰",
    region: "Danmark",
    subtitle: "Hjelholt (Fyn) & Köpenhamn",
    beer: [
      "Danmark presterar långt över sin vikt i öl. Köpenhamn i synnerhet är en av världens stora hantverksölsstäder.",
      "Mikkeller är namnet att känna till. Grundat 2006 av en gymnasiematematiklärare som brygde på hemmasatsen, distribueras Mikkeller nu i 40+ länder med barer i Köpenhamn, San Francisco, Tokyo och Bangkok. Carlsbergs ursprungliga bryggeri i Valby är också värt ett besök — arvsalternativet.",
      "Fyn är lugnare ölterritorium, men ön har en växande lokal scen. Leta efter Refsvindinge Bryghus och Svendborg Bryghus i en lokal butik eller specialaffär.",
    ],
    beerVenues: [
      { name: "Mikkeller Bar", address: "Viktoriagade 8, Vesterbro", note: "Originalet. 20 kranar, ständigt roterande utbud. Åk hit." },
      { name: "Warpigs", address: "Flæsketorvet 25, Meatpacking District", note: "Mikkelbers samarbete med texanska barbecuemästare. Amerikansk BBQ + danskt hantverksöl. Utmärkt." },
      { name: "Taphouse", address: "Lavendelstræde 15", note: "61 kranar — det största utbudet i Köpenhamn. Perfekt för att smaka sig igenom." },
      { name: "Ølbaren", address: "Æbeløgade 4", note: "Kvarterspärla, anspråkslöst, briljant flaskutbud." },
    ],
    callouts: [
      { kind: "tip", title: "Beställ detta", body: "Mikkeller Drink'in the Sun (veteöl, perfekt för en varm junivkväll) · Mikkeller Beer Geek Breakfast (världsklass på havregrynsstout) · To Øl Snowball." },
      { kind: "tip", title: "Säg detta", body: "\"En Mikkeller, tak\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "hamburg",
    flag: "🇩🇪",
    region: "Hamburg",
    subtitle: "Astra, Lütt un Lütt och hamnkrogarna",
    beer: [
      "Hamburg är ingen stad som är besatt av sitt eget öl på samma sätt som Köln eller München — men den har en genuin lokal dryckeskultur värd att känna till.",
      "Astra är Hamburgs symbolöl, oskiljaktigt från stadens Kiez (rödljusdistriktet) och Hafenstraße-kulturen. Logotypen — ett hjärta med ankare — sitter på varje hörn. Ett ofiltrerat lageröl, fullständigt ärligt, rätt sak att dricka på en Hamburgpub. Lokalborna kallar det Rotlicht-Bier (rödljusöl). Holsten Pilsener är det andra Hamburg-staplarna — renare, krispigare, lättillgängligt.",
    ],
    beerVenues: [
      { name: "Altes Mädchen", address: "Lagerstraße 28b, Schanzenviertel", pilgrimage: true, note: "DET hantverksölsstället i Hamburg. Ett gammalt slakteri omvandlat till ölträdgård och bar — ~100 kranar och flaskor, foodtrucks, fantastisk stämning." },
      { name: "Ratsherrn Brauerei", address: "Lagerstraße 28b", note: "Hamburgs mest respekterade hantverksbryggeriet (samma komplex som Altes Mädchen). Pale Ale och Kellerbier är utmärkta." },
      { name: "Gröninger Privatbrauerei", address: "Ost-West-Straße 47", note: "Klassisk Hamburgsk bryggpub, brygger på plats sedan 1800-talet. Traditionell, stämningsfull, god mat." },
    ],
    wine: [
      "Hamburg är ingen vinregion, men som en välmående hamnstad har den utmärkta vinbarer och importörer. Vino-kedjan och Winzerkeller-butikerna har bra tyska Rieslings — värt att utforska om du vill ha en flaska till vägen.",
    ],
    callouts: [
      { kind: "tradition", title: "Lütt un Lütt", body: "Beställ en Lütt un Lütt — 'lite och lite' — ett litet öl parrat med ett litet snaps (klar spannmålssprit eller akvavit). Klassisk Hamburgsk arbetarklassition, särskilt i de gamla hamnkrogarna runt Speicherstadt." },
      { kind: "tip", title: "Säg detta", body: "\"Ein Astra und einen Lütten, bitte\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "cologne",
    flag: "🇩🇪",
    region: "Köln — Kölschland",
    subtitle: "Det viktigaste ölstoppet på utresan",
    beer: [
      "Kölsch är ett skyddat ölstil — genom EU:s geografiska beteckning kan det bara bryggas inom Kölns stadsgränser. Det finns ungefär 20 officiella Kölschbryggerier. Det är juridiskt definierat: klart, gyllene, överjäst, lätt humlet, serverat kallt vid 8–10°C i ett smalt 200 ml-glas kallat Stange (stång).",
      "Hur det smakar: lättare och torrare än ett lageröl, svagt fruktigt (grön äpple, päron), rent, med en lätt syrlig avslutning. Mer uppfriskande än det låter. Väldigt lätt att dricka flera Stangen utan att märka det.",
    ],
    beerVenues: [
      { name: "Früh am Dom", address: "Am Hof 12–18", note: "Precis intill katedralen. Mest berömd, ofta fullsatt, alltid värt det." },
      { name: "Gaffel am Dom", address: "Bahnhofsvorplatz 1", note: "Nära Hauptbahnhof, utmärkt Kölsch, livlig stämning." },
      { name: "Päffgen", address: "Friesenstraße 64", pilgrimage: true, note: "Purismens val. Familjedrivet sedan 1883, utan krusiduller, enastående." },
      { name: "Peters Brauhaus", address: "Mühlengasse 1", note: "Vacker interiör, utmärkt traditionell mat till Kölschen." },
      { name: "Malzmühle", address: "Heumarkt 6", note: "Nära gamla stan, utmärkt Mühlen Kölsch, klassisk känsla." },
      { name: "Sion", address: "Unter Taschenmacher 5", note: "En av de äldsta, mycket stämningsfull, nära katedralen." },
    ],
    wine: [
      "Köln ligger i korsvägen av två av Tysklands största vinregioner. Moseldalen är ungefär 90 minuter sydväst — dess branta skiffer-sluttningar producerar världens finaste Riesling: hög syra, låg alkohol, mineralisk, med aprikos- och petroleumtoner. Producenter som Egon Müller, Dr. Loosen och Joh. Jos. Prüm är världsberömda.",
      "Ahrdalen (60 km söderut) producerar oväntat utmärkt Pinot Noir — Spätburgunder. Producenter: Meyer-Näkel, Deutzerhof, Jean Stodden. Mittelrhein-klyftan norr om Koblenz är också utmärkt Rieslingland.",
    ],
    wineVenues: [
      { name: "Weinbar at Friesenplatz", note: "Solid central vinbar i Köln." },
      { name: "Jacques' Wein-Depot", note: "Flera platser i Köln — utmärkt urval av tyska och internationella flaskor." },
    ],
    callouts: [
      { kind: "tradition", title: "Köbes-systemet", body: "Din servitör (Köbes, uttalas kur-bess) bär en rund bricka med förfyllda Stangen och ersätter ditt glas automatiskt — utan att tillfrågas — i det ögonblick det är tomt. Han håller räkning med kridamarkeringar på din glasunderlägg. För att stoppa lägger du glasunderlägget ovanpå glaset. Gör du det inte fortsätter Kölschen att komma." },
      { kind: "must", title: "Beställ detta", body: "\"Einen Kölsch, bitte\" — och låt sedan Köbes sköta sitt. Fråga inte efter en ölmeny. Det finns ett öl här." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "antwerp",
    flag: "🇧🇪",
    region: "Antwerpen",
    subtitle: "Världens bästa ölland",
    beer: [
      "Belgien är inte ett ölland. Det är öllandets land. Inget annat land har producerat så många genuint distinkta, skyddade, världsklassiga stilar. I Antwerpen har du tillgång till hela spektrumet — och ett av världens stora Trappistbryggerier finns praktiskt taget runt knuten.",
      "Det man måste beställa är en bolleke — det lokala ordet för det lilla, rundbottnade klotglaset i vilket De Koninck amber ale serveras. Sätt dig på vilket traditionellt Antwerpenskt kafé som helst och be om \"een bolleke\" och du får ett utan vidare förtydliganden. Amber ale, 5,2% ABV, maltig med en ren bitter avslutning. Anspråkslöst och perfekt.",
      "Westmalle Abbey ligger 25 km nordost — en enkel omväg. Av de flesta ansett som det normgivande Trappistbryggeriets: deras Westmalle Tripel (9,5% ABV, gyllene, komplex, banan- och citrusarom, torr avslutning) uppfann i praktiken Tripel-stilen 1934. Café Trappisten ligger precis tvärs över vägen från klosterporten.",
    ],
    beerVenues: [
      { name: "Kulminator", address: "Vleminckveld 32", pilgrimage: true, note: "Grundat 1974 — över 700 öl inklusive vintagflaskor från decennier tillbaka. Trångt, stämningsfullt, helt seriöst om öl. En vallfärdsort." },
      { name: "Café Pelgrim", address: "Pelgrimstraat 10", note: "Enastående belgiskt ölurval i en vacker gammal byggnad nära katedralen." },
      { name: "Quinten Matsijs", address: "Moriaanstraat 13", note: "Historiskt brunt kafé — den fullständiga De Koninck bolleke-upplevelsen." },
      { name: "Bier Central", address: "De Keyserlei 25", note: "Enormt urval, centralt läge, bra för att smaka tvärs igenom stilar." },
      { name: "Café Trappisten", address: "Mittemot Westmalle Abbey", pilgrimage: true, note: "Hela Westmalle-sortimentet inklusive enstaka specialöl utanför kommersiell distribution. Para med deras berömda ost." },
    ],
    styles: [
      { style: "Dubbel", abv: "6–8%", about: "Mörk, karamell, torkad frukt", order: "Westmalle Dubbel · Chimay Rouge" },
      { style: "Tripel", abv: "8–10%", about: "Gyllene, kryddig, torr, bedrägligt stark", order: "Westmalle Tripel · Karmeliet" },
      { style: "Quadrupel / Dark Strong", abv: "10–12%", about: "Rik, fikon, mörkt socker, komplex", order: "Rochefort 10 · St. Bernardus Abt 12" },
      { style: "Strong Golden Ale", abv: "8%+", about: "Ljus, len, brusande", order: "Duvel — den oumbärliga" },
      { style: "Lambic / Gueuze", abv: "5–8%", about: "Viltjäst, sur, komplex", order: "Cantillon · Boon" },
      { style: "Saison", abv: "5–8%", about: "Gårdsstil, kryddig, torr", order: "Saison Dupont" },
    ],
    wine: [
      "Belgien producerar små mängder vin — mestadels från Chardonnay, Pinot Noir och hybridsorter i Hageland (Flamländska Brabant) och Hesbaye. Inte i samma klass som sitt öl, men lokala producenter som Wijndomein Domus och Het Wijngoed Donaerde är värda att känna till om man är nyfiken.",
    ],
    callouts: [
      { kind: "must", title: "Duvel", body: "Möjligen Belgiens mest firade öl — ett 8,5% starkt blekgyllene ale som bedrägligt liknar ett lageröl. Serveras i ett tulpanglas med ett tjockt skumhuvud. Farligt lättdrucket i förhållande till sin styrka. Ett av världens stora öl." },
      { kind: "tip", title: "Säg detta", body: "\"Een bolleke, alsjeblieft\"" },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "normandy",
    flag: "🇫🇷",
    region: "Normandie — Bayeux",
    subtitle: "Glöm ölet. Glöm vinet. Drick cider, calvados, pommeau.",
    relatedTownIds: ["bayeux", "honfleur"],
    cider: [
      "Normandie producerar inget vin. Knappt något öl heller. Vad man producerar — med sekel av hantverk och några av Europas finaste fruktträdgårdar — är cider, calvados och pommeau. Dessa tre drycker bildar ett komplett universum och är lika regionalt specifika som Kölsch eller Champagne. Lämna inte Normandie utan att ha druckit alla tre.",
    ],
    styles: [
      { style: "🍏 Cidre Brut", abv: "4–5%", about: "Torr. Långsamt jäst av blandningar av bittra, söta och syrliga äppelsorter — upp till 38 kultivarer på ett enda jordbruk. Utmärkt till smakrik mat, ost, charkuterier.", order: "AOP Pays d'Auge på etiketten garanterar traditionell produktion" },
      { style: "🍏 Cidre Demi-sec", abv: "4–5%", about: "Halvtorr, mer tillgänglig", order: "Bra till crêpes" },
      { style: "🍎 Calvados Fine / VS", abv: "40%+", about: "Minst 2 år. Ung, frisk, eldig.", order: "Ingångsnivå Calvados" },
      { style: "🍎 Calvados VSOP", abv: "40%+", about: "4 år. Lenare, börjar utveckla komplexitet.", order: "Ett steg upp från Fine" },
      { style: "🍎 Calvados XO / Hors d'Age", abv: "40%+", about: "6+ år. Här blir calvadosen extraordinär: torkad frukt, kola, vanilj, läder.", order: "Värt att lägga pengar på. Leta efter Vieux / Old Reserve." },
      { style: "🍐 Pommeau", abv: "~17%", about: "Färskpressad äppelmust blandad med calvados, lagrad på ekfat minst 14 månader (vanligtvis 3 år). Amberfärgad, söt men inte kladdigt — äpple, vanilj, mild värme.", order: "Serveras kylt som aperitif, eller till ost / chokladdessert. En flaska är en strålande present." },
    ],
    ciderProducers: [
      { name: "Ferme de la Sapinière", address: "Saint-Laurent-sur-Mer (Omaha Beach)", pilgrimage: true, note: "Michel och Philippe Legallois odlar 38 äppelsorter och producerar cider, pommeau och calvados helt på plats. Guidade källarvisningar med provsmakning och en butik på gården. Du kör förbi på vägen D514 längs kusten till eller från Omaha." },
      { name: "Calvados Pierre Huet", address: "Cambremer (Pays d'Auge cider route)", note: "Engelska turer tis/tor 14:30. AOC Pays d'Auge. Calvados lagrad i 41 år finns att köpa." },
      { name: "Domaine Dupont", address: "Victot-Pontfol", note: "Triple-cidern — trippeljäst, 10% ABV, extraordinär." },
      { name: "Château de Breuil", address: "Le Breuil-en-Auge", note: "Vackert slott, visningar 11:00 & 17:00, bra pommeau runt 13 €." },
      { name: "Ferme de la Vallée au Tanneur", address: "Pays d'Auge", note: "Gårdsupplevelse — opastöriserad ost + ciderprovsmakning kombinerat." },
    ],
    beer: [
      "Normandie har en liten lokal ölscen, värd ett försök om du vill ha ett avbrott. Brasserie de Beaussane (lokalt normandiskt hantverksöl) och Falaise Bière (bryggt nära Vilhelm Erövrarens födelseort). Många restauranger i Bayeux har ett roterande lokalt hantverksfat.",
    ],
    callouts: [
      { kind: "tradition", title: "Trou normand", body: "Den klassiska normandiska traditionen: ett litet glas calvados serverat mellan rätterna — särskilt mellan varmrätten och desserten — för att 'skapa plats' och stimulera aptiten. Beställ det utan ursäkt." },
      { kind: "tradition", title: "Bolée", body: "På restauranger serveras cider ofta i en bolée — en traditionell keramikskål snarare än ett glas. Det är det korrekta sättet." },
      { kind: "tip", title: "Säg detta", body: "\"Un cidre brut, s'il vous plaît\" — och specificera bouteille (flaska) eller pression (fat) om du ges möjligheten." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "paris",
    flag: "🇫🇷",
    region: "Paris — Vin, vin, vin",
    subtitle: "Världens naturvinskapital",
    relatedTownIds: [],
    wine: [
      "Paris har blivit världens ledande stad för naturvin — minimal intervention, ofta biodynamiskt, ofta ofiltrerat, alltid gjort av små självständiga producenter. Formatet cave à manger (vinbutik där man också kan äta små rätter) är en parisisk uppfinning och ett av stadens stora bidrag till dryckeskulturen.",
    ],
    wineVenues: [
      { name: "Septime La Cave", address: "Rue Basfroi, 11:e arr.", pilgrimage: true, note: "Vinarmen av den hyllade restaurangen Septime. ~120 flaskor i ett litet utrymme, med tillgång till 25 000 i gruppens källare. Vinmakare som Ganevat, Houillon, Vouette & Sorbée. Kom tidigt." },
      { name: "Le Verre Volé", address: "Canal Saint-Martin, 10:e arr.", pilgrimage: true, note: "Den ursprungliga cave à manger, öppnad 2000. Flaskor längs alla väggar, bord som spiller ut på kanalterrassen i juni. Beställ ett glas och en tallrik charkuterier." },
      { name: "Le Barav", address: "Le Marais, 3:e arr.", note: "Femton år gammal — den klassiska Marais-vinbaren. Angränsande cave säljer flaskor att ta med. Uteserveringsplatser på sommaren. 6 € glas vid baren." },
      { name: "La Compagnie des Vins Surnaturels", address: "Saint-Germain-des-Prés", note: "Drivs av Experimental-cocktailgruppen. Över 700 viner, sällsynta flaskor, sofistikerad atmosfär, utmärkt mat." },
      { name: "Les Caves Legrand", address: "Galerie Vivienne, 2:a arr.", note: "Parisisk institution inne i en av stadens vackraste täckta 1800-talspassager. Vinhandel och bar kombinerat." },
      { name: "Le Goncourt", address: "Oberkampf, 11:e arr.", note: "Naturvinsfokus, utmärkt säsongsbetonad mat, livlig kvarterskänsla." },
    ],
    styles: [
      { style: "Champagne", about: "Mousserande. Som aperitif, eller hela måltiden igenom", order: "Husutbud eller leta efter grower-Champagne (RM)" },
      { style: "Bourgogne", about: "Pinot Noir / Chardonnay", order: "Premier eller Grand Cru om budgeten tillåter" },
      { style: "Loire-dalen", about: "Muscadet, Sancerre, Vouvray", order: "Perfekt till skaldjur och lätta rätter" },
      { style: "Beaujolais", about: "Gamay — utmärkt på kanna, underskattat", order: "Un pichet de Beaujolais" },
      { style: "Rhône", about: "Grenache, Syrahblandningar — fylliga", order: "Utmärkt till kött" },
      { style: "Jura", about: "Savagnin, Poulsard — ovanliga, älskade av naturvinsälskare", order: "Vin jaune om du hittar det" },
    ],
    callouts: [
      { kind: "tip", title: "Dagsutflykt — Reims", body: "45 minuter från Gare de l'Est med TGV. Veuve Clicquot (stämningsfulla kalkkritor, bokning obligatorisk) · G.H. Mumm (besöksvänligt, ingen bokning) · Taittinger (romerska kalkkritor) · Ruinart (äldsta huset, 1729, UNESCO-klassade källare). Épernays Avenue de Champagne, 40 min från Reims, samlar Moët, Pol Roger, Perrier-Jouët och Mercier längs en enda boulevard." },
      { kind: "tip", title: "Mindre producenter", body: "Côte des Blancs och Montagne de Reims är hem för hundratals récoltant-manipulants — odlare som gör sin egen Champagne. Egly-Ouriet, Benoit Lahaye, Bérèche et Fils." },
      { kind: "tip", title: "Bistrostandard", body: "\"Un pichet de rouge\" (kanna rött) eller \"un verre de blanc\" till huspriset är aldrig fel. Husvinet på en bra parisisk restaurang är nästan alltid anständigt." },
    ],
  },

  // ───────────────────────────────────────────
  {
    id: "brussels",
    flag: "🇧🇪",
    region: "Bryssel — Hemvägen via Waterloo",
    subtitle: "Värt en omväg för ett enda mål framför allt",
    relatedTownIds: ["waterloo"],
    beer: [
      "Hemvägen via Waterloo sätter dig nära Bryssel. Om du har några timmar över är det värt det för ett enda mål framför allt — Cantillon.",
    ],
    beerVenues: [
      { name: "Cantillon Brewery", address: "Rue Gheude 56, Anderlecht", pilgrimage: true, note: "Ett av världens viktigaste bryggerier. Cantillon gör enbart lambic och gueuze: viltjästa öl inokulerade av vild jäst från Bryssels luft, lagrade på ekfat i 1–3 år. Surt, komplext, ibland funky, olikt allt annat i ölvärlden. Bryggeriet är ett levande museum (öppet de flesta dagar, liten inträdesavgift). Gå runt i produktionen, smaka i provsmakningsrummet. Gueuze, Kriek (körsbär), Framboise (hallon), säsongsbetonade lambics. Omistligt för alla som tar öl på allvar." },
      { name: "Delirium Café", address: "Impasse de la Fidélité 4, centrum", note: "Innehar Guinness världsrekord för det största kommersiellt tillgängliga ölutbudet — över 3 000 öl. Turistigt men genuint imponerande som spektakel." },
      { name: "Moeder Lambic", address: "Place Fontainas 8, Saint-Gilles", note: "Det seriösa alternativet. 50 kranar, kurerat belgiskt och internationellt utbud, inga gimmicks, fantastisk stämning." },
    ],
    callouts: [
      { kind: "tip", title: "Säg detta", body: "\"Une gueuze, s'il vous plaît\"" },
    ],
  },
];

export type QuickReferenceRow = {
  stop: string;
  order: string;
  phrase: string;
};

export const drinksQuickReference: QuickReferenceRow[] = [
  { stop: "Stockholm", order: "Lokalt hantverks-IPA eller pale ale", phrase: "\"En fatöl, tack\"" },
  { stop: "Köpenhamn", order: "Mikkeller på fat", phrase: "\"En Mikkeller, tak\"" },
  { stop: "Hamburg", order: "Astra + Lütt un Lütt", phrase: "\"Ein Astra und einen Lütten, bitte\"" },
  { stop: "Köln", order: "Kölsch (Früh eller Päffgen)", phrase: "\"Einen Kölsch, bitte\"" },
  { stop: "Antwerpen", order: "Bolleke De Koninck", phrase: "\"Een bolleke, alsjeblieft\"" },
  { stop: "Bayeux / Normandie", order: "Cidre Brut + Pommeau som aperitif", phrase: "\"Un cidre brut, s'il vous plaît\"" },
  { stop: "Parisisk vinbar", order: "Husets naturvin / ett glas vad de rekommenderar", phrase: "\"Un verre de votre choix, s'il vous plaît\"" },
  { stop: "Bryssel", order: "Cantillon Gueuze", phrase: "\"Une gueuze, s'il vous plaît\"" },
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
    title: "Kölsch på Päffgen, Köln",
    where: "Friesenstraße 64, Köln",
    body: "Det renaste uttrycket av stadens ölkultur, serverat av en Köbes som inte väntar på att du ska be.",
  },
  {
    rank: 2,
    title: "Westmalle Tripel på Café Trappisten",
    where: "Mittemot Westmalle Abbey, nära Antwerpen",
    body: "Tvärs över vägen från klostret som uppfann stilen — drick den där den föddes 1934.",
  },
  {
    rank: 3,
    title: "Pommeau på Ferme de la Sapinière",
    where: "Saint-Laurent-sur-Mer, Omaha Beach",
    body: "Normandisk äppelbrännvinsaperitif, några meter från stranden där 1st Division landsteg.",
  },
  {
    rank: 4,
    title: "Cantillon Gueuze i Bryssel",
    where: "Rue Gheude 56, Anderlecht",
    body: "Viltjäst lambic från bryggeriet som gör det bäst — ett levande museum och provsmakningsrum.",
  },
  {
    rank: 5,
    title: "Ett glas på Septime La Cave eller Le Verre Volé, Paris",
    where: "11:e & 10:e arrondissementet",
    body: "Cave à manger med naturvin i sitt esse — Paris bidrag till världens dryckeskultur.",
  },
];

export const drinksByTownId = drinkStops.reduce<Record<string, DrinkStop[]>>((acc, stop) => {
  for (const tid of stop.relatedTownIds ?? []) {
    if (!acc[tid]) acc[tid] = [];
    acc[tid].push(stop);
  }
  return acc;
}, {});
