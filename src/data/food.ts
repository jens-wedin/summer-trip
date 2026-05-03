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
  caption: "En förhandsvisning av resan — vad som väntar under två veckor och fem länder.",
};

export const foodStops: FoodStop[] = [
  // ──────────────────────────────────────────
  {
    id: "sweden",
    flag: "🇸🇪",
    country: "Sverige",
    context: "Stockholm & vägen söderut · Dag 1",
    relatedTownIds: ["malmo"],
    image: {
      src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=1600&auto=format&fit=crop&q=80",
      caption: "Kanelbulle och kaffe — den svenska fikaritualens kärna.",
    },
    subsections: [
      {
        title: "🍽️ Mat",
        items: [
          { name: "Kanelbulle & fika", signature: true, body: "Sveriges heligaste ritual. En kanelbulle (lätt kryddad, diskret söt, smaksatt med kardemumma), ett starkt kaffe, och ingenting som kräver din uppmärksamhet på tjugo minuter. Du deltar i en nationell institution. Hitta en på närmaste konditori eller bageri längs vägen." },
          { name: "Gravad lax", body: "Saltrimmat lax, tunt skivad och serverad med hovmästarsås och knäckebröd. Ren, elegant och osvikligt svensk. Perfekt till frukost eller som förrätt." },
          { name: "Räkmacka", body: "Den öppna räksmörgåsen. Hög med färska räkor, ägg, sallad, citron och dill på vitt bröd. En klassisk svensk lunch — extra god längs kusten." },
          { name: "Köttbullar", signature: true, body: "Ja, köttbullen. Den riktiga versionen har ingenting gemensamt med IKEA:s. Serveras med krämig sås, lingonsylt och pressgurka. Beställ dem ordentligt minst en gång innan du lämnar landet." },
          { name: "Smörgåsbord", body: "Om tillfälle ges: hela uppställningen med inlagd sill, charkuterier, knäckebröd, ostar och varma rätter. En buffé i ordets bästa bemärkelse." },
        ],
      },
    ],
    drinks: [
      { name: "Akvavit / snaps", body: "Destillerad sprit smaksatt med kummin eller dill. Serveras iskylt i ett litet glas. Kraftfull. Finns på varje restaurang som serverar traditionell svensk husmanskost." },
      { name: "Svensk hantverksöl", body: "En diskret men utmärkt scen — särskilt i Stockholm och Malmö." },
      { name: "Filmjölk", body: "Drinkbar surmjölk, äts till frukost med müsli eller knäckebröd. Osvikligt svensk — du hittar den ingenstans annanstans längs rutten." },
    ],
    tip: {
      title: "I Malmö specifikt",
      body: "MJ's Hotel har en välrenommerad restaurang — ett bra val för en ordentlig svensk middag på ankomstkvällen.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "denmark",
    flag: "🇩🇰",
    country: "Danmark",
    context: "Fyn & vägen söderut · Dag 2",
    image: {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&auto=format&fit=crop&q=80",
      caption: "Flagnande wienerbröd, nyfärskt från bageriet.",
    },
    subsections: [
      {
        title: "🍽️ Mat",
        items: [
          { name: "Smørrebrød", signature: true, body: "Danmarks signaturrätter till lunch: öppen rågsbrödsmacka toppad med inlagd sill, rökt lax, rostbiff, leverpastej eller ägg med remoulad. Äts på dedikerade frokostrestaurants. Skippa aldrig en dålig version — hitta en ordentlig." },
          { name: "Stegt flæsk", signature: true, body: "Danmarks officiella nationalrätt. Krispigt stekt sidfläsk serverat med potatis och persiljesås. Kraftig, rik och djupt danskt." },
          { name: "Pølser", body: "Den danska varmkorven. Klarröda korvar i ett mjukt bröd, toppade med senap, ketchup, remoulad och lökringar. Äts stående vid vägkantens pølsevogn." },
          { name: "Wienerbrød", body: "Det som resten av världen kallar 'Danish' heter bara wienerbrød (wienerbröd) här. Flagnande, smörigt, laminerat. Äts på bagerier med morgonkaffet." },
          { name: "Frikadeller", body: "Danska köttbullar — flata biffar av gris och kalv, serverade med potatis, rödkål och sås. En ordentlig dansk husmansmiddag." },
          { name: "Koldskål", body: "En kyld kärnmjölksdessert, äts på sommaren med knapriga kammerjunkerkex flytande i den. En unikt dansk sommarupplevelse — juni är perfekt tajming." },
        ],
      },
    ],
    drinks: [
      { name: "Carlsberg / Tuborg", body: "Danmarks världsberömda lageröl. Brygges fortfarande i Köpenhamn. Beställ dem iskalla på vilken bar som helst." },
      { name: "Akvavit / snaps", body: "Liksom i Sverige, men med danska varianter smaksatta med dill, anis eller kummin. Klassiskt tillbehör till smørrebrød." },
      { name: "Gammel Dansk", signature: true, body: "En bitter likör, lätt medicinsk, till ytterlighet dansk. Dricks ofta som morgonskål eller digestif. En förvärvad smak — prova den minst en gång." },
      { name: "Kaffe", body: "Danskarna hör till världens mest kaffedrinkande folk. Utmärkt kafékutur, särskilt i Köpenhamn." },
    ],
    tip: {
      title: "Längs vägen vid Hjelholt, Fyn",
      body: "Hesselager är en liten by — ta lunch i närheten av Svendborg eller Faaborg innan du korsar till Tyskland.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "germany",
    flag: "🇩🇪",
    country: "Tyskland",
    context: "Hamburg & vidare · Dag 2 & 12",
    image: {
      src: "https://images.unsplash.com/photo-1505253468034-514d2507d914?w=1600&auto=format&fit=crop&q=80",
      caption: "Bratwurst på grillen — tyskt marknadsmåste.",
    },
    subsections: [
      {
        title: "🍽️ Hamburgs specialiteter",
        items: [
          { name: "Fischbrötchen", signature: true, body: "Hamburgs fiskbröd. Inlagd eller inrimmad sill (matjes eller bismarckhering), rå lök, cornichoner och remoulad i ett bröd. Äts vid hamnen med blicken mot Elbe. Det mest hamburgska du kan äta." },
          { name: "Franzbrötchen", body: "Hamburgs egna söta bakelse — som en utrullad kanelbulle: flagnande, sockrig, med kanel genom lagren. Unik för Hamburg. Köp en från ett Bäckerei med morgonkaffet." },
          { name: "Labskaus", body: "Traditionell sjömanskost: corned beef, potatismos och lök, toppad med rödbetor, cornichoner, sill och ett stekt ägg. Ser oroande ut, smakar utmärkt." },
          { name: "Rote Grütze", body: "Röd sommarbärpudding (röda vinbär, hallon, jordgubbar) serverad med grädde eller vaniljsås. En hamburgsk och nordtysk klassisk dessert. Perfekt i juli." },
        ],
      },
      {
        title: "🍽️ Tyska klassiker",
        items: [
          { name: "Bratwurst", body: "Grillad fläskkorv, äts från ett stånd med senap i ett bröd. Kvaliteten varierar enormt — hitta en ordentlig Metzgerei (slaktare) eller marknadsstånd." },
          { name: "Currywurst", body: "Skivad bratwurst i curryketchup. Berlins stora uppfinning, nu älskad i hela landet. Äts med pommes. En riktig gatukökslunch." },
          { name: "Schnitzel", body: "Panerad och stekt kalv eller fläsk, serverad med citron och potatissallad. Måttstocken för ett tyskt restaurangkök." },
          { name: "Kringlor (Brezel)", body: "Varm, seg, saltad. Det perfekta ölsnackset eller vägsnackset. Köp en från ett bageri på väg ut ur Hamburg." },
        ],
      },
    ],
    drinks: [
      { name: "Tyskt öl", signature: true, body: "Variationen är enorm: Pilsner, Weizen (veteöl), Dunkel (mörkt), Helles (ljus lager). I Hamburg, prova en Holsten eller utforska hantverksscenen. I Köln måste du dricka Kölsch — se Drycker-sektionen." },
      { name: "Riesling", body: "Tysklands stora vitvin, från Rhen- och Moseldalen. Torra versioner (trocken) är utmärkta till mat. Värt att söka upp på varje restaurang med en vinlista." },
      { name: "Kaffe", body: "Trots ölstereotypen dricker tyskar mer kaffe än öl. Hamburg har en stark kafékutur, med rötter i stadens sekler som kaffehandelshamn." },
    ],
    tip: {
      title: "Hamburgs fiskmarknad",
      body: "På söndagsmorgnar håller fiskmarknaden vid Altona öppet 05:00–09:30. Färsk skaldjur, högljudda handlare, rucklig stämning. Om du passerar Hamburg en söndag är det värt ett tidigt uppvaknande.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "belgium",
    flag: "🇧🇪",
    country: "Belgien",
    context: "Antwerpen & Gent · Dag 3",
    relatedTownIds: ["gent"],
    image: {
      src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=1600&auto=format&fit=crop&q=80",
      caption: "Belgiska våfflor — pålägg valfritt men uppmuntrat.",
    },
    subsections: [
      {
        title: "🍽️ Mat",
        items: [
          { name: "Frites", signature: true, body: "Belgiska pommes frites är något helt annat än franska. Skurna tjockare (1 cm), dubbelfriterade för en krispig yta och fluffigt inre, serverade i en papperstratt med sås. Bästa såsen: andalouse (majonnäs med peppar och tomat) eller bara vanlig majonnäs. Hitta Frituur No. 1 i Antwerpen. Skippa det inte." },
          { name: "Moules-frites", body: "Musslor och pommes frites — den definitiva belgiska brasserie-rätten. En gryta ångade musslor i vitt vin, vitlök och grädde, med en skål frites vid sidan. Bäst augusti–oktober när lokala musslor är i säsong (sent juni är precis i början)." },
          { name: "Stoofvlees", body: "Belgisk nötköttsgryta långsamt tillagad i mörkt öl, serverad med frites. Rik, djupt smakfull, comfort food på sin höjd. Finns i varje traditionell belgisk brasserie." },
          { name: "Belgiska våfflor", body: "Två sorter: Brysselsvåfflan (lätt, rektangulär, krispig) och Liègevåfflan (tätare, sötare, med pärlsocker karamelliserat i degen). Liègevåfflan är gatumat; Brysselversionen äts sittande." },
          { name: "Waterzooi", body: "En krämig kyckling- eller fiskgryta från Gent. Mild, värmande, väldigt belgisk." },
          { name: "Speculoos", body: "Kryddiga karamelliserade kex — kanel, nejlika, kardemumma. Finns i varje belgiskt kafé tillsammans med kaffet. Spreadvarianten (speculoospasta) är Belgiens svar på Nutella." },
          { name: "Cuberdons", body: "Lila konformade sötsaker, hallonsmakande med ett hårt skal och mjukt gelecenter. En flamländsk specialitet — köp en påse från ett marknadsstånd och ät dem nyfärska." },
          { name: "Belgisk choklad", body: "Ribban ligger helt enkelt högre här. Besök ett chokladeri i Antwerpen och köp en ask tryfflar. Värt varenda euro." },
        ],
      },
    ],
    drinks: [
      { name: "Belgisk hantverksöl", signature: true, body: "En av världens stora ölkulturer: Trippel, Dubbel, Saison, Lambic, Witbier, Trappistöl, flamländska rödbrun. De Koninck är Antwerpens egna bryggeri (1833) — deras Bolleke är lokalbefolkningens signatur. Se Drycker-sektionen för hela guiden." },
      { name: "Elixir d'Anvers", body: "En örtalikör skapad i Antwerpen 1863, prisbelönt och unik för staden. Prova ett litet glas efter middagen." },
      { name: "Jenever (belgisk gin)", body: "Föregångaren till brittisk gin, framställd av spannmålssprit med enbär. Serveras i ett litet tulpanglas, iskylt. Oude (gammal) är fylligare än jonge (ung). En äkta belgisk dryckesupplevelse." },
    ],
    tip: {
      title: "I Antwerpen",
      body: "Beställ en Bolleke De Koninck på vilket traditionellt brunt kafé som helst — den serveras i ett karakteristiskt runt glas. Det är det lokala ritualet.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "normandy",
    flag: "🇫🇷",
    country: "Frankrike — Normandie",
    context: "Bayeux & stränderna · Dag 4–7",
    intro:
      "Normandies hela kök kretsar kring fyra saker: grädde, smör, äpplen och ost. Allt annat byggs på dessa grunder.",
    relatedTownIds: ["bayeux", "honfleur"],
    image: {
      src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&auto=format&fit=crop&q=80",
      caption: "Normandisk ostbricka — camembertland.",
    },
    subsections: [
      {
        title: "🧀 De fyra normandiska ostarna (AOC)",
        intro: "Prova alla fyra under dina tre nätter — de är alla olika. Köp från en marknad och ät i rumstemperatur.",
        items: [
          { name: "Camembert de Normandie", signature: true, body: "Kungen av normandiska ostar. En äkta AOC Camembert är gjord på opastöriserad mjölk, med ett mjukt vitt skinn och ett rikt, smörigt, lätt pungent inre. Ingenting som supermarketversionen." },
          { name: "Livarot", body: "Kraftfull, washrind, med karakteristiska band av säv lindade runt den (ibland kallad 'Översten' för sina fem ränder)." },
          { name: "Pont-l'Évêque", body: "Kvadratisk, washrind, mildare än Livarot men fortfarande pungent. En av de äldsta normandiska ostarna." },
          { name: "Neufchâtel", body: "Den hjärtformade. Mjuk, blomrind, lätt svampig. Sägs ha getts till engelska soldater av normandiska flickor under hundraårskriget — därav hjärtformen." },
        ],
      },
      {
        title: "🍽️ Mat",
        items: [
          { name: "Galette complète", body: "En bovetecrêpe fylld med skinka, smält ost och ett stekt ägg. Den definitiva normandiska lunchen. Le Moulin de la Galette i Bayeux är ett bra val." },
          { name: "Cochon de Bayeux", signature: true, body: "En lokal Bayeux-specialitet: en fläskkotlett brässerad i ugn med cider, serverad med gelé. Bayeux-grisen är en urgammal ras och smaken är distinkt. Leta efter den på menyer i Bayeux specifikt." },
          { name: "Ostron (Huîtres)", body: "Normandiska ostron från Cotentinhalvön och Isigny hör till Frankrikes finaste. Beställ dem som förrätt, med citron och ett glas lokal cider." },
          { name: "Coquilles Saint-Jacques", body: "Jakobsmusslor i krämig sås, bakade i skalet. Rika, djupt normandiska, och finns på nästan varje restaurangmeny längs kusten." },
          { name: "Agneau de Pré-Salé", body: "Saltängslamm från bukten vid Mont Saint-Michel. Fåren betar på kustnära gräsmarker som översvämmas av havsvatten — köttet är naturligt saltat och unikt smaksatt. En av Frankrikes stora AOC-produkter." },
          { name: "Tarte Normande", signature: true, body: "Den normandiska äppelkakan: tunna äppelskivor på ett smörigt pajskal, med en ägg-grädde-vaniljkräm och en skvätt Calvados. Den definitiva normandiska desserten." },
          { name: "Trou Normand", body: "En mellankursgömslockare: äppelsorbet toppad med ett Calvados-hällande. Serveras mellan rätterna för att 'skapa ett hål' (trou) för mer mat. Gör det." },
        ],
      },
    ],
    drinks: [
      { name: "Cidre", signature: true, body: "Beställ cider istället för vin till maten i Normandie. Den lokala cidre bouché (flaskjäst, lätt mousserande) är strålande — leta efter brut (torr) eller demi-sec (halvtorr). Passar till allt: galetter, ostron, ost, stekt kött." },
      { name: "Calvados", signature: true, body: "Äppelbrännvin, lagrat på ekfat. Normandies stora digestif. En tioårig Calvados är len och komplex; äldre årgångar är extraordinära. Köp en flaska hos en lokal producent att ta hem." },
      { name: "Pommeau", body: "En blandning av färsk äppelmust och Calvados, försterkt och lagrat. Sött, äppelframskt, runt 17% ABV. Dricks som aperitif. Svårare att hitta utanför Normandie — missa det inte." },
    ],
    tip: {
      title: "Vid turnélunchstoppet (Etapp 6)",
      body: "Shutteln ger dig en timme i Bayeux eller Port-en-Bessin. Port-en-Bessin är en fungerande fiskeby — om du åker dit, beställ det som kom från båten den morgonen.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "paris",
    flag: "🇫🇷",
    country: "Frankrike — Paris",
    context: "Hotel Panache · Dag 8–10",
    image: {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&auto=format&fit=crop&q=80",
      caption: "Croissant och café — den parisiska morgonen.",
    },
    subsections: [
      {
        title: "🍽️ Paris nödvändigheter",
        items: [
          { name: "Croissant", signature: true, body: "Måttstocken för ett parisiskt bageri. Äts stående vid disken (au comptoir) med en café allongé. Skillnaden mellan en bra och en fantastisk croissant i Paris är påtaglig. Hitta en boulangerie med kö." },
          { name: "Steak-frites", signature: true, body: "Den klassiska parisiska brasserie-rätten. Entrecôte eller bavette, tillagad saignant (blodig) eller à point (medium), med pommes frites och bearnaisesås. Beställ den på vilken klassisk brasserie som helst." },
          { name: "Soupe à l'oignon", body: "Långsamt karamelliserad lök i oxbuljong, toppad med en krutonger och smält Gruyère, bakad tills den bubblar. En parisisk klassiker som är mycket bättre än sitt rykte på andra håll." },
          { name: "Steak tartare", body: "Rå mald nötkött, kryddad vid bordet med kapris, schalottenlök, worcestershiresås, äggula och senap. En parisisk restaurangstaple. Låter oroande, smakar extraordinärt." },
          { name: "Croque-monsieur / Croque-madame", body: "Rostad smörgås med skinka och ost, bakad med béchamel. Madamen har ett stekt ägg på toppen. Den definitiva parisiska kaféslunchen." },
          { name: "Plateau de fromages", body: "Beställ den på vilken ordentlig restaurang som helst. En parisisk ostbricka inkluderar typiskt något mjukt (Brie de Meaux), något washrind (Époisses), något lagrat (Comté) och något blå (Roquefort). Äts före eller istället för dessert." },
        ],
      },
    ],
    drinks: [
      { name: "Vin på kanna (pichet)", signature: true, body: "Att beställa en pichet de rouge eller pichet de blanc (kvarts- eller halvlitersk kanna med husets rött eller vitt) är det mest parisiska man kan göra på en restaurang eller ett kafé. Billigt, ärligt och nästan alltid mycket gott." },
      { name: "Café", body: "En café i Frankrike är ett espresso. En café crème är med ångad mjölk. En café allongé är ett långt kaffe. Beställ aldrig café au lait på en restaurang — det är en hemmafrukostdryck. Drick vid disken (au comptoir) för den autentiska upplevelsen." },
      { name: "Kir / Kir Royale", body: "Vitt vin (eller champagne till royalen) med ett stänk svartvinbärslikör (cassis). Den klassiska franska aperitiven. Beställ en på vilken kafétterrass som helst innan middagen." },
      { name: "Pastis", body: "En anissmaksatt sprit, utspädd med kallt vatten som gör den mjölkvit. Dricks som aperitif, särskilt i varmt väder. Väldigt franskt, lite beroendeframkallande." },
    ],
    tip: {
      title: "För den fullständiga Paris-matguiden",
      body: "Se Paris-sektionen — restauranger, kaféer och marknadstips från Elsa Billgrens guide.",
    },
  },

  // ──────────────────────────────────────────
  {
    id: "waterloo",
    flag: "🇧🇪",
    country: "Belgien — Waterloo",
    context: "Dag 11 · slagfältslunch på hemvägen",
    relatedTownIds: ["waterloo"],
    image: {
      src: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=1600&auto=format&fit=crop&q=80",
      caption: "Belgisk brasseriklassiker — öl och kraftig kött.",
    },
    subsections: [
      {
        title: "🍽️ Mat",
        items: [
          { name: "Brasserie Wellington — vid slagfältet", signature: true, body: "Restaurang på plats med utsikt över slagfältet. God mat, fantastisk miljö för lunch. Beställ stoofvlees met frites (belgisk nötköttsgryta med pommes frites) — passande, med tanke på att du äter där slaget som avslutade Napoleon utkämpades." },
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
  { flag: "🇸🇪", country: "Sverige", drink: "Akvavit — iskylt, litet glas, till middagen" },
  { flag: "🇩🇰", country: "Danmark", drink: "Gammel Dansk — prova den minst en gång" },
  { flag: "🇩🇪", country: "Tyskland", drink: "Kölsch i Köln · Fischbrötchen + öl i Hamburg" },
  { flag: "🇧🇪", country: "Belgien", drink: "De Koninck Bolleke — Antwerpens eget öl" },
  { flag: "🇫🇷", country: "Normandie", drink: "Calvados — regionens digestif" },
  { flag: "🇫🇷", country: "Paris", drink: "En pichet husets vin på en kafétterrass" },
];

export const foodByTownId = foodStops.reduce<Record<string, FoodStop[]>>((acc, stop) => {
  for (const tid of stop.relatedTownIds ?? []) {
    if (!acc[tid]) acc[tid] = [];
    acc[tid].push(stop);
  }
  return acc;
}, {});
