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
    visitContext: "Dag 11 · ons 1 juli · middagsstopp på vägen Paris → Roermond",
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
    id: "roermond",
    slug: "roermond",
    flag: "🇳🇱",
    name: "Roermond",
    country: "Nederländerna",
    tagline: "Limburgs historiska stad vid Roer och Maas",
    visitContext: "Dag 11 · ons 1 juli · 1 natt",
    lodging: { name: "De Pastorie Bed & Breakfast", url: "https://maps.app.goo.gl/E5wpV5WBU4UDBYdV6", note: "Charmigt B&B med egen chocolaterie i gamla stan." },
    history: [
      { title: "Gammal handelsstad", body: "Roermond växte fram vid sammanflödet av floderna Roer och Maas i nederländska Limburg och blev en välmående handelsstad — tidvis medlem i Hansan. Det medeltida gatunätet och kyrkorna vittnar än idag om stadens ålder." },
      { title: "Munsterkerk", body: "Onze-Lieve-Vrouwe-Munsterkerk är en sällsynt senromansk klosterkyrka från 1200-talet, grundad som cistercienskloster. Här vilar Gerard IV av Gelre och hans hustru Margaretha — stadens grundare." },
      { title: "Pierre Cuypers stad", body: "Arkitekten Pierre Cuypers (1827–1921), mannen bakom Rijksmuseum och Amsterdams centralstation, föddes och verkade i Roermond. Hans nygotiska prägel märks i staden och långt utanför den." },
    ],
    pointsOfInterest: [
      { name: "Munsterkerk", description: "Den senromanska klosterkyrkan på Munsterplein, med sina fyra torn och åttkantiga mittparti — restaurerad av Cuypers på 1800-talet. Stadens signaturbyggnad." },
      { name: "Sint-Christoffelkathedraal", description: "Den gotiska katedralen från 1400-talet, tillägnad stadens skyddshelgon Sankt Christoffer, vars förgyllda staty kröner tornet." },
      { name: "Gamla stan och Markt", description: "Kompakt, promenadvänlig kärna med torg, kaféer och gränder mellan de två kyrkorna." },
      { name: "Designer Outlet Roermond", description: "Ett av Europas största outletcentra i utkanten av staden — en shoppingmagnet (mer Sara och Elsas gren)." },
      { name: "Maasplassen", description: "De sammanhängande sjöarna kring Maas strax utanför stan — Nederländernas största vattensportområde." },
    ],
    tips: [
      { name: "Utforska till fots", description: "Gamla stan är liten; gå mellan Munsterkerk och katedralen och slå dig ner på ett torg." },
      { name: "Choklad", description: "Staden har fina chocolaterier — B&B:et De Pastorie har till och med en egen." },
      { name: "Shopping", description: "Har du tid och håg ligger Designer Outlet strax utanför centrum." },
      { name: "Laddning", description: "Roermond ligger nära motorvägen; Superchargers finns i och kring staden." },
    ],
    deepDive: {
      title: "Roermond — vid flodernas möte",
      intro:
        "En liten historisk stad i nederländska Limburg, formad av floderna, av handeln och av en av Nederländernas mest inflytelserika arkitekter.",
      chapters: [
        {
          title: "1. Staden vid Roer",
          body: [
            "Roermond — namnet betyder ungefär 'Roermynningen' — växte fram där floden Roer möter Maas. Läget vid vattnet gjorde staden till en handelsplats och, under senmedeltiden, tidvis medlem i det tyska Hansaförbundet.",
          ],
        },
        {
          title: "2. Munsterkerk",
          body: [
            "Stadens äldsta skatt är Munsterkerk, en senromansk kyrka från 1200-talet grundad som cisterciensiskt nunnekloster av Gerard IV av Gelre. Hans och hustru Margarethas gravmonument står kvar i koret. På 1800-talet restaurerades kyrkan av stadens berömdaste son.",
          ],
        },
        {
          title: "3. Cuypers arv",
          body: [
            "Pierre Cuypers föddes i Roermond 1827 och byggde här upp sin verkstad för kyrkokonst. Han skulle bli 1800-talets store nederländske arkitekt — Rijksmuseum och Amsterdam Centraal är hans verk — och den nygotiska stil han odlade satte spår i hela landet, med början i hemstaden.",
          ],
        },
      ],
      lookFor:
        "Leta upp den förgyllda statyn av Sankt Christoffer högst upp på katedralens torn — stadens skyddshelgon, som bär Kristusbarnet över floden.",
    },
    relatedDayIds: [11, 12],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "lubeck",
    slug: "lubeck",
    flag: "🇩🇪",
    name: "Lübeck",
    country: "Tyskland",
    tagline: "Hanseförbundets drottning",
    visitContext: "Dag 12 · tor 2 juli · 1 natt",
    lodging: { name: "Top CityLine Klassik Altstadt Hotel", url: "https://www.klassik-altstadt-hotel.de", note: "Familjerum · 362 € · kort Sara 28 juni." },
    images: [
      { src: "https://images.unsplash.com/photo-1663591800789-9004bf951782?w=1600&auto=format&fit=crop&q=80", caption: "Holstentor — lutar sig lätt på sned." },
      { src: "https://images.unsplash.com/photo-1667319386140-da709d6b68d4?w=1600&auto=format&fit=crop&q=80", caption: "Lübecks silhuett av tegelspilor." },
      { src: "https://images.unsplash.com/photo-1665426677397-318ccb6f8d78?w=1600&auto=format&fit=crop&q=80", caption: "En kullerstensbelagd gata i gamla stan." },
    ],
    history: [
      { title: "Hanseförbundets kraftcentrum", body: "Lübeck var Hanseförbundets 'huvudstad' och kontrollerade handeln i Östersjön under sekler. UNESCO-världsarv." },
      { title: "Tegelgotisk arkitektur", body: "Sju kyrktorn definierar silhuetten och visar upp den unika nordeuropeiska Backsteingotik-stilen." },
      { title: "Sjöfartens port", body: "I sekler den viktigaste porten mellan Nordsjön och Östersjön." },
    ],
    pointsOfInterest: [
      { name: "Holstentor", description: "Den världsberömda dubbeltorniga stadsportalen från 1464 — Lübecks symbol. Huserar nu ett stadshistoriskt museum." },
      { name: "Marienkirche", description: "Förebild för 70 andra tegelgotiska kyrkor i Östersjöregionen. Har världens högsta tegelvalv." },
      { name: "Rådhuset (Rathaus)", description: "Ett av Tysklands äldsta och vackraste rådhus, ett monument över seklers hanseatisk rikedom." },
      { name: "Niederegger marsipan", description: "Lübeck är världens marsipanhuvudstad. Besök det ursprungliga Niederegger-kaféet för en provsmakn­ing." },
      { name: "Heilig-Geist-Hospital", description: "En av Europas äldsta sociala inrättningar, grundad 1286. Sjuksalens historiska atmosfär är enastående." },
    ],
    tips: [
      { name: "Passat", description: "Har du tid, korsa floden Trave för att se det historiska fyrmastade barkskepp Passat — en av de berömda Flying P-Linerna." },
      { name: "Rotspon", description: "Lübecks berömda rödvin, importerat från Bordeaux och lagrat på lokala ekfat — en sekellång tradition." },
      { name: "Historiska gårdar (Höfe und Gänge)", description: "Utforska de smala, dolda bostadsgångarna från huvudgatorna — några av stadens charmigaste platser." },
      { name: "Marsipanmuseet", description: "Beläget ovanför Niederegger-kaféet — en snabb och intressant titt på delikatessens historia." },
    ],
    deepDive: {
      title: "Lübeck — Hansans drottning",
      intro: "Lübeck var medeltidens New York. Som Hanseförbundets huvudstad kontrollerade det handeln för halva en kontinent.",
      chapters: [
        {
          title: "1. Hanseförbundet — medeltidens Amazon",
          body: [
            "Lübeck ledde Hanseförbundet — en sammanslutning av över 100 städer som kontrollerade all handel i Östersjön och Nordsjön. De handlade med allt: salt från Tyskland, pälsverk från Ryssland, kläde från Flandern, torkad fisk från Norge.",
            "Lübeckrätten: staden var så inflytelserik att dess rättssystem (Lübisches Recht) kopierades av över 100 andra europeiska städer.",
            "Förbundet var så mäktigt att det till och med utkämpade och vann krig mot kungar — däribland Danmarks och Norges — för att skydda sina handelsintressen.",
          ],
        },
        {
          title: "2. Tegelgotisk arkitektur",
          body: [
            "Lübeck liknar inte städer i södra Tyskland eller Frankrike. Det har en mycket specifik stil: Backsteingotik, tegelgotik.",
            "Silhuetten är berömd för sina sju kyrktorn. De rikaste köpmännen tävlade om att bygga de högsta och vackraste tegelkyrkorna.",
            "Holstentor uppfördes 1464 för att visa upp stadens rikedom och makt. Det är så ikoniskt att det en gång prydde den tyska 50-marks­sedeln.",
          ],
        },
        {
          title: "3. Marsipanlegenden",
          body: [
            "Lübeck är världens marsipanhuvudstad. Legenden säger att under en hungersnöd eller belägring 1407 tog mjölet slut. Det enda som fanns kvar i förråden var mandlar och socker. Bagarna mosade ihop dem för att baka 'bröd' — och marsipanen var född.",
            "Sedan 1806 tillverkar familjen Niederegger världens mest berömda marsipan i Lübeck.",
          ],
        },
        {
          title: "4. Nedgången",
          body: [
            "Förbundets makt bröt till slut under 1600-talet när handeln förflyttades från Östersjön till Atlanten (mot Amerika). Trettioåriga kriget var det slutliga slag som knäckte den hanseatiska dominansen.",
          ],
        },
      ],
      lookFor:
        "Studera Holstentor. Du märker att det lutar åt sidan. Eftersom det byggdes på mjuk sumpmark sjönk den massiva tegelkonstruktionen ojämnt under seklerna.",
    },
    relatedDayIds: [12, 13],
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "lund",
    slug: "lund",
    flag: "🇸🇪",
    name: "Lund",
    country: "Sverige",
    tagline: "Nordens domkyrkostad",
    visitContext: "Dag 13 · fre 3 juli · 1 natt",
    lodging: { name: "The More Hotel Lund", url: "https://www.themorehotel.se/lund/", note: "Familjerum · 2 366,85 kr · parkering via lund@themorehotel.com." },
    images: [
      { src: "https://images.unsplash.com/photo-1601215899055-017ccd00d567?w=1600&auto=format&fit=crop&q=80", caption: "Lund — tillbaka på svensk mark." },
      { src: "https://images.unsplash.com/photo-1542628682-88321d2a4828?w=1600&auto=format&fit=crop&q=80", caption: "Kullerstensbelagda gator i gamla stan." },
      { src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&auto=format&fit=crop&q=80", caption: "Lunds domkyrka — den romanska katedralen." },
    ],
    history: [
      { title: "Grundad av en dansk kung", body: "Lund grundades kring år 990 av Sven Tveskägg, då dansk kung. I nästan 700 år var det danskt — och under lång tid det andliga centrumet för hela Skandinavien." },
      { title: "Nordens ärkebiskopssäte", body: "Från 1103 och fram till reformationen var Lund säte för ärkebiskopen över hela Skandinavien — ett religiöst centrum lika betydelsefullt som Köln eller Canterbury." },
      { title: "Svenskt sedan 1658", body: "Sverige tog Skåne från Danmark i freden i Roskilde 1658. För att binda den nya provinsen till kronan grundade den svenske kungen Lunds universitet 1666 — fortfarande det näst äldsta i Sverige." },
    ],
    pointsOfInterest: [
      { name: "Lunds domkyrka", description: "Den romanska katedralen, invigd 1145 — Skandinaviens äldsta. Missa inte det medeltida astronomiska uret (Horologium mirabile Lundense) som framför vid klockan 12 och 15." },
      { name: "Kryptan", description: "Under katedralen rymmer den stora 1100-talskryptan den pelare som jätten Finn ska ha gripit om när han försökte riva ned katedralen och förvandlades till sten." },
      { name: "Kulturen", description: "Friluftsmuseum grundat 1892 — det näst äldsta i sitt slag i världen efter Stockholms Skansen. Historiska skånska bondgårdar, kyrkor och stadshusen på ett stadskvarter." },
      { name: "Lundagård och Kungshuset", description: "Den gröna parken bredvid katedralen, förankrad av Kungshuset — det gamla kungliga palatset som blev universitetets ursprungsbyggnad." },
      { name: "Botaniska trädgården", description: "Universitetets botaniska trädgård — 8 hektar formella rabatter, växthus och skuggiga bänkar. Gratis, och stadsborna äter lunch här på sommaren." },
    ],
    tips: [
      { name: "Passa uret", description: "Var inne i katedralen klockan 12.00 eller 15.00 — In Dulci Jubilo spelas, tre träkuungar tågar förbi jungfrun och riddare joustar. Det har pågått sedan 1400-talet." },
      { name: "Stortorget för fika", description: "Torget har ett antal gamla konditorier — Conditori Lundagård är det självklara. Beställ ett wienerbröd och betrakta studenterna." },
      { name: "Promenera kullerstenen", description: "Det medeltida gatunätet söder och öster om katedralen är oförändrat. Bredgatan, Adelgatan, Kiliansgatan — alla värda att vandra." },
      { name: "Mårtenstorget på lördag", description: "Lördagsmarknad på Mårtenstorget — bröd, ost, sommarens bär, blommor." },
    ],
    deepDive: {
      title: "Lund — Nordens domkyrkostad",
      intro:
        "I 700 år var Lund danskt, och under lång tid det religiösa centrumet för hela Skandinavien. Katedralen är den äldsta i Norden; universitetet är det näst äldsta i Sverige. Staden är ett kompakt, tätt lager av medeltida och tidig modern europeisk historia.",
      chapters: [
        {
          title: "1. En dansk stad i sju sekler",
          body: [
            "Lund grundades kring år 990 av Sven Tveskägg, den danske kungen som snart skulle erövra England. Ända till freden i Roskilde 1658 var det danskt — Skåne, Halland och Blekinge tillhörde alla den danska kronan.",
            "År 1103 utsåg påven Lund till säte för en ärkebiskop med auktoritet över hela Norden — Sverige, Norge, Danmark, Island, Färöarna, Grönland. I fyra hundra år lydde varje biskop i Skandinavien under Lund.",
          ],
        },
        {
          title: "2. Katedralen och jätten",
          body: [
            "Lunds domkyrka invigdes 1145. Den är en renodlad romansk katedral — rundbågar, tung sten, en storslagen dubbeltornsfasad — uppförd när stilen redan höll på att gå ur modet på andra håll i Europa.",
            "Det astronomiska uret dateras till kring 1425. När det spelar tågar tre träkuungar förbi Jungfrun och barnet, riddare joustar och orgeln spelar In Dulci Jubilo. Det monterades ned 1837, låg i bitar i 86 år och återmonterades 1923.",
            "Nere i kryptan — leta efter pelaren som greppas av en stenig jätte. Legenden: jätten Finn gick med på att bygga katedralen mot att han fick solen, månen eller biskopens ögon. Biskopen listade ut hans namn i tid, och Finn — besegrad — förvandlades till sten när han försökte riva ned katedralen. Pelaren står fortfarande kvar.",
          ],
        },
        {
          title: "3. Universitetet som politiskt projekt",
          body: [
            "När Sverige tog Skåne 1658 var befolkningen dansktalande, dansksinnad och långt ifrån nöjd med att ha bytt kung. Åtta år senare, 1666, grundade den svenske kungen Karl XI Lunds universitet — uttryckligen för att försvenska den nya provinsen.",
            "Det fungerade. Universitetet utbildade skånska barn i svenska, i svensk rätt, i den svenska kyrkan. I dag är Lund en av Sveriges två stora universitetsstäder — den andra är Uppsala — och omkring 40 000 studenter bor i en stad med 90 000 invånare.",
          ],
        },
        {
          title: "4. Slaget vid Lund, 1676",
          body: [
            "Danskarna lämnade inte Skåne utan kamp. År 1676 landsteg en dansk armé och marscherade mot Lund. Den svenska armén mötte dem på fälten strax norr om katedralen den 4 december.",
            "Det som följde kallas ibland det blodigaste slag som någonsin utkämpats på nordisk mark. Omkring 9 000 man dog på en enda dag — mer än hälften av alla soldater på fältet. Sverige vann, och Skåne förblev svenskt.",
          ],
        },
      ],
      lookFor:
        "Var inne i katedralen klockan tolv eller tre. Det astronomiska uret spelar i ungefär tre minuter — In Dulci Jubilo på orgeln, en procession av utskurna kungar och ett stilla klickande när 600 år gamla kugghjul vrids runt. Det finns ingenting annat riktigt som det i Skandinavien.",
    },
    relatedDayIds: [13, 14],
  },
];

export const townsById = Object.fromEntries(towns.map((t) => [t.id, t]));

export function townsForDay(dayId: number): Town[] {
  return towns.filter((t) => t.relatedDayIds.includes(dayId));
}
