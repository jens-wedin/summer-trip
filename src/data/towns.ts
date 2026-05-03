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
    country: "Sverige",
    tagline: "Bron till kontinenten",
    visitContext: "Dag 1 · sön 21 juni · 1 natt",
    lodging: { name: "MJ's Hotel", url: "https://mjs.life", note: "Vibrant maximalistisk design, berömd frukost." },
    images: [
      { src: "https://images.unsplash.com/photo-1670244498258-d897ebf81d70?w=1600&auto=format&fit=crop&q=80", caption: "Turning Torso över Västra Hamnen." },
      { src: "https://images.unsplash.com/photo-1668884978643-28b8abcfb486?w=1600&auto=format&fit=crop&q=80", caption: "Malmöhus — renässansslottet." },
      { src: "https://images.unsplash.com/photo-1680432333629-d7a849be1713?w=1600&auto=format&fit=crop&q=80", caption: "Västra Hamnens strandlinje." },
    ],
    history: [
      { title: "Danskt ursprung", body: "Malmö var en dansk storstad ända till freden i Roskilde 1658. Korsvirkeshusen i Gamla Väster vittnar fortfarande om den danska stadsplanen." },
      { title: "Industriell omvandling", body: "Från tung hamnstad — med Kockums varv som kronjuvel — har Malmö omvandlat sig till ett centrum för teknik, design och hållbarhet." },
      { title: "Bron", body: "Öresundsbrons invigning år 2000 förändrade Malmö i grunden och återknöt staden fysiskt och kulturellt till Köpenhamn efter 350 år av separation." },
    ],
    pointsOfInterest: [
      { name: "Lilla Torg", description: "Ett kullerstensbelagt torg från 1590-talet. Välbevarade korsvirkes­hus. Bästa stället för att sitta ute och betrakta folk — om än lite turistigt." },
      { name: "Turning Torso", description: "Santiago Calatravas vridna skyskrapa — den första i sitt slag i världen. Sätter sin prägel på Västra Hamnens moderna silhuett." },
      { name: "Malmöhus", description: "Skandinaviens äldsta bevarade renässansslott. Rymmer stadsmuseum och akvarium." },
      { name: "Slottsträdgården", description: "En stor ekologisk odlingsträdgård bakom slottet med den vackra Slottsmöllan." },
      { name: "Sankt Petri kyrka", description: "Gotisk kyrka från 1300-talet med enastående akustik och ett monumentalt altarskåp." },
    ],
    tips: [
      { name: "Falafelhuvudstad", description: "Malmö är känt för sin falafel. Vill du ha en snabb och äkta lokal lunch — det är här." },
      { name: "En stad för fotgängare", description: "De flesta centrala områden är lätt promenadvänliga från MJ's." },
      { name: "Gamla Västers arkitektur", description: "Titta noga på korsvirkeskonstruktionen — det här är danskt från före 1658, inte svenskt." },
    ],
    deepDive: {
      title: "Malmö — Sundets stora pris",
      intro: "En stad klämd mellan två kungadömen. Det mest fascinerande är hur en stad kan byta hela sin identitet — språk, kultur, lojalitet — på ett par generationer.",
      chapters: [
        {
          title: "1. Den danska fästningen (1275–1658)",
          body: [
            "I över 350 år var Malmö Danmarks näst största stad. Inte bara en stad — en stormakt.",
            "Silversillens guld: under medeltiden vimlade Öresund av sill. Malmö blev oerhört rikt på att fånga, salta och sälja fisk till hela Europa — det är därför Hanseförbundet alltid höll sig i närheten.",
            "Griffonens födelse: år 1437 gav kung Erik av Pommern Malmö sitt vapen — ett silvergrifonhuvud med röd krona. I dag är den griffen symbol för hela Skåne.",
          ],
        },
        {
          title: "2. Det stora skiftet (1658)",
          body: [
            "Föreställ dig att vakna upp och bli tillsagd att du inte längre är dansk utan svensk. Efter ett katastrofalt krig för Danmark tvingade freden i Roskilde landet att överlämna Skåne — och Malmö — till Sverige.",
            "Försvenskning: de svenska kungarna litade inte på Malmöborna. De förbjöd danska böcker, förhindrade danska präster att predika och grundade Lunds universitet — strax norr om Malmö — enbart för att fostra folk till att bli 'ordentligt svenska'.",
          ],
        },
        {
          title: "3. De blodigaste striderna",
          body: [
            "Danskarna gav inte upp utan kamp. Under Malmös belägring 1677 besteg danska soldater murarna med stegar; de svenska försvararna höll dem stången i brutala närstridskamper.",
            "Som om krigen inte räckte drabbades Malmö hårt av pesten i början av 1700-talet — nästan hälften av befolkningen dog.",
          ],
        },
        {
          title: "4. Industrijätten",
          body: [
            "På 1800-talet slutade Malmö slåss och började bygga. Kockums varv blev ett av världens största; i 150 år definierades staden av hammarslag och svets.",
            "Öresundsbron (2000) återförenade Malmö med Köpenhamn och bröt 300 år av isolering från det forna danska hemmet.",
          ],
        },
      ],
      lookFor:
        "Promenera genom Gamla Väster och studera arkitekturen. Korsvirkeshusen är i klassisk dansk stil — en påminnelse om stadens liv före 1658.",
    },
    relatedDayIds: [1, 2],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "stemmen",
    slug: "stemmen",
    flag: "🇩🇪",
    name: "Stemmen",
    country: "Tyskland",
    tagline: "En stilla landsbygdshalt",
    visitContext: "Dag 2 · mån 22 juni · 1 natt",
    lodging: { name: "Hotell Landgut Stemmen", url: "https://landgut-stemmen.de/", note: "Lantgårdshotell i klassisk Niedersachsen-stil." },
    images: [
      { src: "https://images.unsplash.com/photo-1510510227760-819620981452?w=1600&auto=format&fit=crop&q=80", caption: "Lüneburger Heide i kvällsljus." },
      { src: "https://images.unsplash.com/photo-1758537469065-0b6609a85e39?w=1600&auto=format&fit=crop&q=80", caption: "Traditionellt korsvirkeshus." },
      { src: "https://images.unsplash.com/photo-1603825943244-bcd020aab41e?w=1600&auto=format&fit=crop&q=80", caption: "Torvmosse — Tister Bauernmoor." },
    ],
    history: [
      { title: "Niedersachsens charm", body: "Regionen är känd för sina böljande åkrar, traditionella tegelfarmhus och korsvirkesbyggnader." },
      { title: "Jordbrukets arv", body: "Byn har i stort sett forblivit jordbrukspräglad genom historien och bevarat ett lugnt livstempo." },
      { title: "Strategiskt läge", body: "Beläget mellan Hamburg och Bremen — en idealisk rastplats långt från de trafikerade motorvägarna." },
    ],
    pointsOfInterest: [
      { name: "Landgut Stemmen", description: "Där ni bor — ett historiskt gods omvandlat till lanthotell i regionens traditionella arkitekturstil." },
      { name: "Byliv i Niedersachsen", description: "En promenad genom byn visar Tysklands tysta sida — röda tegelhus, välskötta trädgårdar och gamla lador." },
      { name: "Naturstigar", description: "Talrika promenad- och cykelleder genom omgivande fält och skogar — perfekt att sträcka på benen efter körningen Malmö–Stemmen." },
    ],
    tips: [
      { name: "Stilla kvällar", description: "Förvänta dig en mycket fridfull kväll. Ett ställe att ladda om inför körningen mot Belgien." },
      { name: "Traditionell tysk mat", description: "Landgut Stemmen serverar regionala rätter — Schnitzel, säsongens grönsaker, lokalt öl." },
      { name: "Årtalsristningar", description: "Leta efter årtalsristningar i timmerbalkarnas i byns gamla hus. Många daterar sig till 1700-talet — ett tyst vittnesbörd om den långsamma återuppbyggnaden efter krigen." },
    ],
    deepDive: {
      title: "Stemmen — Överleva i konflikternas hjärta",
      intro:
        "Stemmen ser ut som en stilla, fridsam by i dag, men dess historia är ett fönster mot den mest förödande perioden i tysk historia: trettioåriga kriget (1618–1648).",
      chapters: [
        {
          title: "1. Trettioåriga krigets fasor",
          body: [
            "Det började som en religiös konflikt mellan katoliker och protestanter men utvecklades till en stor maktkamp över hela Europa.",
            "Niedersachsen var en genomfartsled för legoarmér — inte bara soldater utan privata arméer som 'levde av landet'. Svenska, tyska och franska trupper torterade bybor för att hitta gömt guld eller mat. 'Den svenska drycken' var en ökänd metod från denna era.",
            "Total förödelse: i delar av regionen dog mer än hälften av befolkningen i strid, hungersnöd eller pest. Byar som Stemmen krävde en enorm motståndskraft för att överleva.",
          ],
        },
        {
          title: "2. Niedersachsenhuset",
          body: [
            "Titta på de gamla byggnaderna i Stemmen — du ser Niedersachsenhaus-stilen.",
            "Ett tak för allt: dessa massiva korsvirkesbyggnader huserade traditionellt familjen, tjänstefolket och boskapen under samma tak. Den stora ladugårdsporten i gaveln — 'Groot Door' — var bred nog för en hästdragen vagn att köra rakt in och lossa hö eller säd.",
          ],
        },
        {
          title: "3. Mossarna och tranorna",
          body: [
            "Landskapet kring Stemmen präglas av torvmossarna. I århundraden skars torv ur mossarna för bränsle — ryggbrytande, blöt och farlig syssla.",
            "Det intilliggande Tister Bauernmoor är numera naturreservat — en rest av det vidsträckta, vilda landskap som omgav Stemmen i årtusenden, långt innan motorvägarna kom.",
          ],
        },
      ],
      lookFor:
        "Leta efter årtalsristningar i timmerbalkarnas i byns gamla hus. Många daterar sig till 1700- eller 1800-talet och vittnar om regionens långsamma, tålmodiga återuppbyggnad efter krigen.",
    },
    relatedDayIds: [2, 3],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "gent",
    slug: "gent",
    flag: "🇧🇪",
    name: "Gent",
    country: "Belgien",
    tagline: "Belgiens medeltida mästerverk",
    visitContext: "Dag 3 · tis 23 juni · 1 natt",
    lodging: { name: "Jam Hotel Ghent", url: "https://www.jamhotels.eu/ghent", note: "Familjerum · parkering 19€." },
    images: [
      { src: "https://images.unsplash.com/photo-1696149046277-80f86cbf3fbe?w=1600&auto=format&fit=crop&q=80", caption: "Grasleis gilleshusar längs Leie i gyllene timme." },
      { src: "https://images.unsplash.com/photo-1657571575614-1e0c6f4188f5?w=1600&auto=format&fit=crop&q=80", caption: "Gravensteen — Grevens slott." },
      { src: "https://images.unsplash.com/photo-1696149046101-3b7dd959b97c?w=1600&auto=format&fit=crop&q=80", caption: "Utsikt över gamla stan mot klockstapeln." },
    ],
    history: [
      { title: "Textilfurstendöme", body: "Under 1200- och 1300-talen var Gent en av Europas största och rikaste städer — bara Paris var större. Rikedomen byggdes på ull- och klädeshandeln." },
      { title: "Det mystiska lammet", body: "Sint-Baafskathedralen rymmer Tillbedjan av det mystiska lammet (1432) av bröderna Van Eyck — ett av historiens viktigaste och mest stulna konstverk." },
      { title: "En motståndskraftig stad", body: "Gent har överlevt ockupationer och belägringarna, ändå är medeltidskärnan anmärkningsvärt välbevarad." },
    ],
    pointsOfInterest: [
      { name: "Graslei och Korenlei", description: "Två kajer längs floden Leie — stadens vackraste platser med en rad historiska gilleshusar, somliga från 1100-talet." },
      { name: "Gravensteen", description: "Massivt vallgravslott från 1100-talet mitt i staden. Imponerande välbevarat; storslagna utsikter från bröstvärnet." },
      { name: "Sint-Baafskathedralen", description: "Häpnadsväckande blandning av romansk, gotisk och barock arkitektur. Hem för Gent-altartavlan." },
      { name: "Gents klockstapel", description: "UNESCO-världsarv. Belgiens högsta klockstapel — klättra upp för panoramautsikt." },
      { name: "Patershol", description: "Stadens äldsta kvarter — ett labyrintartat nät av smala kullerstensgränderna med mysiga restauranger och krogar." },
    ],
    tips: [
      { name: "Cuberdons (Gentnäsor)", description: "Prova de konformade lokala godisarna med hallonsmak — du ser kärror sälja dem på torgen." },
      { name: "Belgisk ölkultur", description: "Några av världens bästa ölbarer finns här. Café de Dulle Griet (du lämnar en sko som pant för en Max-öl) och Waterhuis aan de Bierkant." },
      { name: "Gentse Waterzooi", description: "Klassisk lokal höna- eller fiskgryta — Gents självklara husmanskost." },
    ],
    deepDive: {
      title: "Gent — De upproriska köpmännens stad",
      intro:
        "Under medeltiden var Gent inte bara en stad — det var en ekonomisk supermakt. 1300-talets Silicon Valley, men industrin var lyxtyg och finull.",
      chapters: [
        {
          title: "1. Ullimperiet",
          body: [
            "Ville du ha de finaste kläderna i 1300-talets Europa köpte du dem från Gent. Staden importerade enorma mängder ull från England; skickliga vävare förvandlade den till flamländskt kläde som exporterades ända till Nordafrika och Ryssland.",
            "Staden styrdes av gillen — mäktiga sammanslutningar av köpmän och hantverkare. De var så rika att de kunde bekosta egna slott och privata arméer för att hålla kungar och grever på avstånd.",
          ],
        },
        {
          title: "2. De stora stölderna av altartavlan",
          body: [
            "Tillbedjan av det mystiska lammet kallas ofta världens viktigaste målning — och den är definitivt den mest stulna.",
            "Napoleons trupper stal den och förde den till Paris. Under andra världskriget stal Hitlers agenter den och gömde den i en österrikisk saltgruva (Monuments Men hittade den till sist). Och 1934 stals en panel — De rättfärdiga domarna — och har aldrig återfunnits. En kopia sitter i katedralen i dag.",
          ],
        },
        {
          title: "3. Upprorandan — Stropdragers",
          body: [
            "Gent har alltid sagt nej till överheten. År 1540 straffade kejsar Karl V — som faktiskt var född i Gent — staden för ett skattuppror genom att tvinga stadens ledare att gå genom gatorna med snaror om halsen.",
            "Än i dag kallar sig Gents invånare Stropdragers — snorbärarna — som ett tecken på sin stolta, oberoende anda.",
          ],
        },
        {
          title: "4. Den kalvinska republiken (1577–1584)",
          body: [
            "I sju korta år bröt sig Gent loss från det spanska imperiet och upprättade sin egen självständiga republik grundad på radikal protestantism. En tid av intensiv religiös glöd och konflikt — innan Spanien återtog kontrollen.",
          ],
        },
      ],
      lookFor:
        "Promenera längs Graslei. Titta på gilleshusen — vart och ett tillhörde ett annat skrå (murarna, sädesuppmätarna, skepparna). Deras rikedom är bokstavligen inhuggna i stenfasaderna.",
    },
    relatedDayIds: [3, 4],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "honfleur",
    slug: "honfleur",
    flag: "🇫🇷",
    name: "Honfleur",
    country: "Frankrike",
    tagline: "Impressionisternas hamn",
    visitContext: "Dag 4 · ons 24 juni · 1 natt",
    lodging: { name: "L'Absinthe Hôtel", url: "https://www.absinthe.fr/en/", note: "Familjerum · historiskt hamnläge." },
    images: [
      { src: "https://images.unsplash.com/photo-1720610892502-f15aeef291f5?w=1600&auto=format&fit=crop&q=80", caption: "Vieux-Bassin — dubbelt speglad." },
      { src: "https://images.unsplash.com/photo-1617499303865-88285ac23087?w=1600&auto=format&fit=crop&q=80", caption: "Sainte-Catherines träkyrka." },
      { src: "https://images.unsplash.com/photo-1651656624013-7d8909b560eb?w=1600&auto=format&fit=crop&q=80", caption: "Pont de Normandie i skymningen." },
    ],
    history: [
      { title: "Gammal hamn", body: "En strategisk hamn i århundraden. Härifrån seglade Samuel de Champlain för att grundlägga Quebec 1608." },
      { title: "Impressionisternas fristad", body: "Stadens unika ljus och pittoreska hamn — Vieux-Bassin — lockade mästare som Eugène Boudin, Claude Monet och Camille Pissarro." },
      { title: "En motståndskraftig stad", body: "Läget och den historiska statusen skyddade staden genom seklers konflikter och lämnade den en sällsynt arkitektonisk enhetlighet — i det närmaste oskadd av andra världskrigets bomber." },
    ],
    pointsOfInterest: [
      { name: "Vieux-Bassin", description: "Honfleurs hjärta — smala skiferklädda hus, somliga sju våningar höga, speglade i vattnet." },
      { name: "Sainte-Cathérine", description: "Frankrikes största träkyrka, uppförd på 1400-talet av lokala skeppsbyggare efter hundraårskriget. Taket liknar skrovet på ett upp-och-nedvänt fartyg." },
      { name: "Eugène Boudin-museet", description: "Underbar samling av mannen som lärde Monet att måla en plein air." },
      { name: "Lieutenance", description: "Stenhus från 1500-talet vid hamnens entré — tidigare residens för kungens löjtnant som övervakade kaparnas byte." },
      { name: "Saltmagasinen (Greniers à Sel)", description: "Massiva stenbyggnader från 1600-talet ursprungligen för saltlagring vid torskfisket. Nu huserar de konstutställningar." },
    ],
    tips: [
      { name: "Normanndisk cider och Calvados", description: "Det här är hjärtat av Pays d'Auge — lämna inte utan att smaka lokal cider eller ett glas Calvados." },
      { name: "Galetter och crêpes", description: "Många utmärkta crêperier. Välj de som ligger en bit från hamnkajen för en mer äkta upplevelse." },
      { name: "Lördagsmarknad", description: "Är du där en lördag är marknaden framför Sainte-Cathérine fantastisk för lokala ostar och råvaror." },
    ],
    deepDive: {
      title: "Honfleur — Utforskare och kapare",
      intro: "Honfleur är inte bara en vacker hamn. Det var en gång porten till världen för franska flottan och historiens djärvaste upptäcktsresande.",
      chapters: [
        {
          title: "1. Hundraårskrigets fästning",
          body: [
            "Honfleurs läge vid Seinens mynning gjorde staden till ett eftertraktat byte. Engelsmännen ockuperade den i över 30 år — en vital bas för sin flotta.",
            "När engelsmännen äntligen kastades ut 1450 var staden utblottad. Man behövde en ny kyrka men hade inte råd med stenhuggare. Då byggde de lokala skeppsbyggarna en själva. Titta upp i Sainte-Cathérine — taket ser exakt ut som skrovet på ett upp-och-nedvänt träskepp. Det är Frankrikes största träkyrka.",
          ],
        },
        {
          title: "2. Mot Nya världen",
          body: [
            "Under 1500- och 1600-talen var Honfleur startpunkten för det franska utforskandet. Samuel de Champlain seglade härifrån 1608 och grundlade till slut Quebec City — hjärtat i vad som skulle bli Kanada.",
            "Utforskare från Honfleur hörde till de första européerna att nå Brasiliens kuster och Newfoundlands rika fiskegrundar.",
          ],
        },
        {
          title: "3. Kaparna (legala pirater)",
          body: [
            "Honfleur var hem för korsarer — kapare med franska kungens tillstånd att anfalla och plundra fiendens fartyg (främst engelska och spanska).",
            "Det stora stenhuset Lieutenance vid inloppet till Vieux Bassin var platsen där kungens löjtnant övervakade krigsbytet som kaparfartygen förde in.",
          ],
        },
        {
          title: "4. Impressionismens vagga",
          body: [
            "På 1800-talet förflyttades äventyret från havet till duken. Det unika sättet ljuset faller mot vattnet i Honfleur lockade målare som Claude Monet. Han och hans mentor Eugène Boudin satt på kajerna och uppfann ett helt nytt sätt att måla en plein air.",
          ],
        },
      ],
      lookFor:
        "Promenera runt Vieux Bassin. Lägg märke till att husen är mycket smala men mycket höga — upp till 7 våningar. Utrymmet kring hamnen var så dyrbart att man bara kunde bygga uppåt, inte utåt.",
    },
    relatedDayIds: [4, 5],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "bayeux",
    slug: "bayeux",
    flag: "🇫🇷",
    name: "Bayeux",
    country: "Frankrike",
    tagline: "Staden som överlevde allt",
    visitContext: "Dag 5–7 · 25–28 juni · 3 nätter",
    lodging: { name: "Airbnb Lägenhet", note: "★ 4,93 · 2 sovrum · 2 sängar · Sara betalt vid bokning." },
    images: [
      { src: "https://images.unsplash.com/photo-1635198665219-5de923df4bfb?w=1600&auto=format&fit=crop&q=80", caption: "Bayeux katedral, västra fasaden." },
      { src: "https://images.unsplash.com/photo-1720015796515-34b0ac9380cc?w=1600&auto=format&fit=crop&q=80", caption: "Medeltida gatumiljö i gamla stan." },
      { src: "https://images.unsplash.com/photo-1590338004666-9945a963493f?w=1600&auto=format&fit=crop&q=80", caption: "Normandisk bocage-landsbygd nära Bayeux." },
    ],
    history: [
      { title: "Tapetens stad", body: "Bayeux är berömt för det 70 meter långa broderade linnebandet från 1000-talet som berättar om normandernas erövring av England 1066." },
      { title: "Befriad 7 juni 1944", body: "Den första franska staden som befriades efter D-dagen. Tack vare att den föll så snabbt undslapp den bombningarna som jämnade merparten av Normandie med marken. Medeltidskärnan är i det närmaste intakt." },
      { title: "De Gaulles första tal", body: "Charles de Gaulle höll sitt första tal på befriad fransk mark här den 14 juni 1944 — tio dagar efter landstigningarna." },
    ],
    pointsOfInterest: [
      { name: "Cathédrale Notre-Dame", description: "Stadens hjärta. Romansk krypta från 1000-talet, gotiskt långskepp från 1200-talet. Tapeten tillverkades ursprungligen för denna katedral." },
      { name: "Bayeux krigskyrkogård", description: "Frankrikes största brittiska andra världskrigs-kyrkogård — 4 648 gravar. Den latinska inskriften lyder: 'Vi, som Wilhelm erövrade, befriade erövraren's hemland.'" },
      { name: "Mémorial Musée de la Bataille de Normandie", description: "Bästa översikten av hela Normandiekampanjen — fordon, vapen, uniformer, personliga berättelser. 2–3 timmar." },
      { name: "Gamla stan", description: "Korsvirkeshus längs Rue Saint-Martin och Rue Saint-Jean, gamla garverierna längs floden Aure, 1600–1700-talsmansioner kring katedralen." },
      { name: "Bayeux Broderie", description: "Brodeributik nära Tapetmuseet — säljer satser för att brodera din egen bit av Bayeux-tapeten." },
    ],
    tips: [
      { name: "⚠️ Tapeten STÄNGD", description: "Museet stängt för renovering sept 2025 → okt 2027. Planera runt det." },
      { name: "Normandisk cider", description: "Au Louis d'Or i centrum är ett bra ställe att prova lokal normandisk cider — regionens alternativ till vin." },
      { name: "Reine Mathilde Patisserie", description: "Hörnet vid katedralen. Varm choklad som ska vara enastående för en bra morgonstart." },
    ],
    deepDive: {
      title: "Bayeux — Staden som överlevde allt",
      intro:
        "Bayeux är ett mirakel av överlevnad. Medan nästan varje annan normandisk stad bombades till grunden under D-dagsoffensiven befriades Bayeux den 7 juni 1944 — bara en dag efter landstigningarna — så snabbt att staden gick nästan oskadd ur det hela.",
      chapters: [
        {
          title: "1. Tapeten — ett 70 meter långt seriealbum",
          body: [
            "Bayeux-tapeten är egentligen inget tapet — det är ett broderi. Ett 70 meter långt linneband broderat med färgad ull, som berättar historien om normandernas erövring av England 1066. Det rymmer 626 mänskliga figurer, 202 hästar, 55 hundar och 505 andra djur.",
            "Med stor säkerhet beställt av biskop Odo av Bayeux, Vilhelm Erövarens halvbror, för att rättfärdiga invasionen. Det återger normandernas version: Harald framställs som en edbrytare som fick vad han förtjänade.",
            "Mysteriet: ingen vet exakt när eller var det tillverkades. Den bästa gissningen är England, kring 1077, av anglosaxiska brodöser i tjänst hos sina nya normandiska herrar. De besegrade skapade erövarens propaganda.",
          ],
        },
        {
          title: "2. Katedralen som Vilhelm byggde",
          body: [
            "Vilhelm bevistade själv invigningen av Notre-Dame de Bayeux 1077. Bayeux-tapeten visades möjligen upp för första gången vid detta tillfälle — hängd längs långskeppet för de samlade normandiska stormännen att beundra.",
            "Kryptan och det nedre långskeppet är rent romanskt (1000-tal) — tunga rundbågar. Det övre långskeppet och tornet byggdes om i gotisk stil (1200-tal). Man kan bokstavligen se övergången mellan två arkitektoniska epoker i samma byggnad.",
          ],
        },
        {
          title: "3. Befrielsens mirakel",
          body: [
            "Den 7 juni 1944 avancerade brittiska styrkor från Gold Beach inåt landet och befriade Bayeux utan nämnvärda strider. Tyskarna hade redan dragit sig tillbaka. Medeltidskärnan skonades.",
            "Den 14 juni 1944 höll Charles de Gaulle sitt första tal på befriad fransk mark här — ett djupt symboliskt ögonblick: den första franska staden fri från fyra års ockupation.",
            "Den brittiska kyrkogårdens inskription — 'Vi, som Wilhelm erövrade, befriade erövarens hemland' — kopplar samman 1066 direkt med 1944.",
          ],
        },
        {
          title: "4. Spetsen och floden",
          body: [
            "Före krigen var Bayeux känt för något mycket skonsammare. Från 1600-talet bars fin Bayeux-spets av den franska aristokratin. Hantverket höll på att dö ut men utövas fortfarande av ett fåtal hantverkare.",
            "Den lilla floden Aure som rinner genom stadscentrum var oumbärlig för garveri- och färgeriindustrierna. De gamla garverihusens längs dess stränder är några av de mest stämningsfulla platserna.",
          ],
        },
      ],
      lookFor:
        "På Bayeux krigskyrkogård — leta efter graven av en tysk soldat begravd bland de brittiska och Commonwealth-döda. Kyrkogården rymmer soldater från båda sidor — en stilla påminnelse om att marken inte skiljer på fiender.",
    },
    relatedDayIds: [4, 5, 6, 7, 8],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "waterloo",
    slug: "waterloo",
    flag: "🇧🇪",
    name: "Waterloo",
    country: "Belgien",
    tagline: "Napoleons sista slag — 18 juni 1815",
    visitContext: "Dag 11 · ons 1 juli · middagsstopp på vägen Paris → Recklinghausen",
    images: [
      { src: "https://images.unsplash.com/photo-1586065695931-44ebab9fca13?w=1600&auto=format&fit=crop&q=80", caption: "Lejonkullen — 226 trappsteg." },
      { src: "https://images.unsplash.com/photo-1734865690020-2d5c0711b864?w=1600&auto=format&fit=crop&q=80", caption: "Slagfältet från kullen — Mont-Saint-Jean." },
      { src: "https://images.unsplash.com/photo-1734865664440-baf72f06d45a?w=1600&auto=format&fit=crop&q=80", caption: "Slagfältslandskapet nära Hougoumont." },
    ],
    history: [
      { title: "Dagen imperiet föll", body: "Napoleon — tillbaka från Elba under de hundra dagarna — mötte Wellingtons anglo-allierade armé och Blüchers prussa­rer på de böljande åkrarna söder om Bryssel. Han anföll hela dagen. Klockan 19 anlände preussarna med full kraft mot hans högra flank. Den franska armén bröt samman och flydde. Det var avgjort på några timmar." },
      { title: "Vad som följde", body: "Napoleon abdikerade fyra dagar senare. Han förvisades till den avlägsna ön Sankt Helena i södra Atlanten, där han dog 1821. Han fick aldrig återvända till Frankrike." },
      { title: "Kopplingen till Paris", body: "Allt du sett i Paris — Triumfbågen med hans slag inristade, Vendômekolonnen, graven på Les Invalides — slutar här, på dessa fält." },
    ],
    pointsOfInterest: [
      { name: "Memorial 1815 — besökscentrum och panorama", description: "1 500 m² utställningar: dioramer, uniformer, vapen, animerade kartor och ett skelett från en faktisk Waterloo-soldat funnen 2012. Avslutas med Panoramat — ett väldigt 25-meters rundmåleri från 1912 över kavalleriattackerna. 1,5–2 timmar." },
      { name: "Lejonkullen (Butte du Lion)", description: "40 meter hög konstgjord kulle krönt av ett gjutjärnlejon, uppförd 1823–1826 för att markera var prinsen av Oranien sårades. 226 branta trappsteg till toppen. 360°-utsikt med orienteringstavla. 30–45 min." },
      { name: "Gården Le Caillou — Napoleons sista högkvarter", description: "4 km söder om Lejonkullen. Personliga reliker: hans dryckesmugg, fältfilt, en hårlock i medaljong, hans diamantring och bordet där den slutliga stridsplanen drogs upp. Lugnare och mer intimt. 45 min." },
      { name: "Gården Hougoumont", description: "Slottsgården som skyddade Wellingtons högra flank — platsen för dagens våldsam­maste strider. Minneskyrka och restaurerade byggnader öppna för besökare. 30–45 min." },
      { name: "Brasserie Wellington", description: "Bryggerirestaurang med direkt utsikt över slagfältet. Ska ha god mat och en storartad miljö." },
    ],
    tips: [
      { name: "🎟️ Köp 1815 Pass — 30 € per person", description: "Täcker alla fyra huvudplatser. Besökscentret måste användas på dagen; övriga platser gäller ett år. Köps i kassan vid ankomst." },
      { name: "Ankom från nordväst", description: "Route du Lion är permanent stängd nära Lejonkullen. Kör via Braine-l'Alleud — där ligger parkeringen. Fri parkering på plats." },
      { name: "Laddning", description: "Tesla Superchargers i Bryssel — ladda före eller efter besöket." },
      { name: "Öppet dagligen", description: "Apr–sep 9.30–18.30 · okt–mar 10.00–17.00. 365 dagar om året." },
    ],
    deepDive: {
      title: "Waterloo — Ett imperiums fall",
      intro:
        "Slaget vid Waterloo var inte bara ett slag — det var den slutliga uppgörelsen mellan epokens störste fältherre och hans hårdaste motståndare, hertig Wellington.",
      chapters: [
        {
          title: "1. Söndra och härska",
          body: [
            "Napoleon var en mästare på snabbhet. Han visste att den anglo-allierade armén (Wellington) och den preussiska armén (Blücher) var för starka om de höll ihop. Hans plan var att slå ned rätt emellan dem, besegra preussarna först, sedan vända all kraft mot Wellington innan de hann återförenas.",
            "Det regnade kraftigt natten före. Napoleon sköt upp anfallet till klockan 11.30 för att låta marken torka så att de tunga kanonerna kunde röra sig. Den fördröjningen var ett ödesdigert misstag — den gav preussarna mer tid att marschera mot slagfältet.",
          ],
        },
        {
          title: "2. Wellingtons baksluttaknik",
          body: [
            "Hertig Wellington var ett defensivt geni. Han valde en lång bergsrygg — Mont-Saint-Jean — och gömde merparten av sina soldater bakom krönet.",
            "När fransmännen betraktade ryggen verkade den knappt försvarad. När de nådde toppen reste sig tusentals allierade soldater plötsligt upp och öppnade eld på nära håll.",
            "När det franska kavalleriet anföll bildade det brittiska infanteriet ihåliga fyrkanter. Hästar var för kloka för att rusa in i en mur av bajonetter och red därför runt fyrkanterna medan de prickades av musköteld.",
          ],
        },
        {
          title: "3. De tre befästa gårdarna",
          body: [
            "Wellington använde tre stora stengårdar som ankare för sin linje. Hougoumont — ett slag i slaget. Fransmännen spenderade hela dagen på att försöka ta den. Vid ett tillfälle slog de upp portarna, men britterna lyckades stänga dem igen i desperat närstrid.",
            "La Haye Sainte i centrum föll för fransmännen sent på eftermiddagen — och höll nästan på att avgöra slaget till deras fördel. Papelotte bevakade den östra flanken — och det var där preussarna till slut anlände och räddade dagen.",
          ],
        },
        {
          title: "4. Gamla garden",
          body: [
            "I solnedgångsstunden insåg Napoleon att han höll på att förlora. Han sände in sin kejserliga garde — Gamla garden, hans elitlveteraner som aldrig besegrats. Inte ens de kunde bryta igenom den allierade linjen. När de drog sig tillbaka grep paniken den övriga franska armén; ropet 'La Garde recule!' (Garden retirera!) spred sig. Slaget övergick i total flykt.",
          ],
        },
        {
          title: "5. Sankt Helena",
          body: [
            "Napoleon flydde tillbaka till Paris och förvisades till den lilla ön Sankt Helena mitt i Atlanten, där han dog sex år senare. Europas karta ritades om, och det skulle dröja hundra år innan ett krig av denna dignitet utbröt igen.",
          ],
        },
      ],
      lookFor:
        "Besteg Lejonkullens 226 trappsteg. Från toppen ser du exakt var de två arméerna stod. Kullen är uppbyggd av jord från det faktiska slagfältet — marken du kliver på var en gång den bergsrygg Wellington försvarade.",
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
