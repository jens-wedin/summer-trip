import type { LatLng } from "../types";

export type NormandySiteTheme = "us" | "uk" | "canadian" | "shared";

export type NormandySite = {
  id: string;
  name: string;
  area: string;
  coords: LatLng;
  theme: NormandySiteTheme;
  category: "beach" | "airborne" | "battery" | "cemetery" | "museum" | "city" | "harbour";
  why: string;
  timeNeeded: string;
};

export type NormandySection = {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  body: string[];
  image?: { src: string; caption: string };
  pullQuote?: string;
  pullQuoteAttribution?: string;
};

export const normandyHeroImage = {
  src: "https://images.unsplash.com/photo-1669861491679-7864c9705891?w=1600&auto=format&fit=crop&q=80",
  caption: "Normandiekusten — där de allierade landstigningstrupperna gick i land den 6 juni 1944.",
};

export const bayeuxBaseImage = {
  src: "https://images.unsplash.com/photo-1666286487652-460b05f89842?w=1600&auto=format&fit=crop&q=80",
  caption: "Bayeux katedral — stadens andliga hjärta och vår bas under tre nätter.",
};

export const normandyTimeline: { date: string; event: string }[] = [
  { date: "May 10, 1940", event: "Germany invades France via the Ardennes" },
  { date: "Jun 14, 1940", event: "German troops enter Paris — occupation begins" },
  { date: "Jun 6, 1944 · 00:16", event: "British 6th Airborne takes Pegasus Bridge — first liberated piece of France" },
  { date: "Jun 6, 1944 · dawn", event: "D-Day — Allied landings on five Normandy beaches" },
  { date: "Jun 7, 1944", event: "Bayeux liberated — first French city freed" },
  { date: "Jun 12, 1944", event: "Beachheads linked into a continuous front ~30km deep — 'Front Line June 12'" },
  { date: "Jun 26, 1944", event: "Cherbourg falls — first deep-water port in Allied hands" },
  { date: "Jul 9, 1944", event: "Caen finally falls after seven weeks" },
  { date: "Jul 25, 1944", event: "Operation Cobra — American breakout at St-Lô" },
  { date: "Aug 1, 1944", event: "Patton's Third Army activated, races eastward" },
  { date: "Aug 19–25, 1944", event: "Paris uprising and Liberation" },
  { date: "May 8, 1945", event: "Germany surrenders — V-E Day" },
];

export const dDayCommandStructure = [
  { role: "Supreme Allied Commander", name: "General Dwight D. Eisenhower" },
  { role: "21st Army Group", name: "General Bernard Montgomery" },
  { role: "US First Army", name: "Lt. Gen. Omar Bradley", note: "Utah & Omaha" },
  { role: "↳ US VII Corps", name: "Maj. Gen. J. Lawton Collins", note: "Utah sector" },
  { role: "↳ US V Corps", name: "Maj. Gen. Leonard T. Gerow", note: "Omaha sector" },
  { role: "British Second Army", name: "Lt. Gen. Miles Dempsey", note: "Gold, Juno, Sword" },
  { role: "↳ British XXX Corps", name: "Lt. Gen. Gerard Bucknall", note: "Gold sector" },
  { role: "↳ British I Corps", name: "Lt. Gen. John Crocker", note: "Juno & Sword sectors" },
  { role: "Airborne — US (Utah flank)", name: "US 82nd & 101st Airborne Divisions" },
  { role: "Airborne — British (Sword flank)", name: "British 6th Airborne Division" },
  { role: "Utah Beach", name: "US 4th Infantry Division" },
  { role: "Omaha Beach", name: "US 1st & 29th Infantry Divisions" },
  { role: "Gold Beach", name: "British 50th Infantry Division" },
  { role: "Juno Beach", name: "Canadian 3rd Infantry Division" },
  { role: "Sword Beach", name: "British 3rd Infantry Division" },
];

export const germanDefendingUnits = [
  { unit: "709th Infantry Division", sector: "Cotentin / Cherbourg", note: "Static coastal division — defended Utah" },
  { unit: "91st Infantry Division", sector: "Inland Cotentin", note: "Drop zone for US 82nd Airborne — heavy paratroop fighting" },
  { unit: "243rd Infantry Division", sector: "Western Cotentin", note: "Coastal defence west of Utah" },
  { unit: "6th Parachute Regiment", sector: "Carentan area", note: "Lt. Col. von der Heydte — fought 101st Airborne for Carentan" },
  { unit: "352nd Infantry Division", sector: "Omaha & western Gold", note: "Veteran division moved up weeks before D-Day, undetected — caused Omaha bloodbath" },
  { unit: "716th Infantry Division", sector: "Gold, Juno, Sword", note: "Static division thinly spread across the British/Canadian sectors" },
  { unit: "21st Panzer Division", sector: "South of Caen", note: "The only Panzer division to counterattack on D-Day — nearly reached the coast between Sword and Juno" },
  { unit: "711th Infantry Division", sector: "East of the Orne", note: "Faced British 6th Airborne around Pegasus Bridge" },
  { unit: "30th Mobile Brigade (Schnelle)", sector: "Reserve south of St-Lô", note: "Bicycle-mobile reserve — too light to stop an armoured breakout" },
];

export const germanCommanders = [
  { name: "Adolf Hitler", role: "Supreme Commander (OKW)", whereOnDDay: "Asleep at Berghof until noon; refused to release Panzer reserves until 4pm" },
  { name: "Gerd von Rundstedt", role: "Commander-in-Chief West (OB West)", whereOnDDay: "At HQ — no authority over Panzers without Hitler's approval" },
  { name: "Erwin Rommel", role: "Commander, Army Group B", whereOnDDay: "At home in Herrlingen for his wife's 50th birthday" },
  { name: "Friedrich Dollmann", role: "Commander, 7th Army (Normandy)", whereOnDDay: "At war games in Rennes; returned on news of landings" },
  { name: "Leo Geyr von Schweppenburg", role: "Commander, Panzer Group West", whereOnDDay: "At HQ near Paris; reserves locked under OKW control" },
  { name: "Edgar Feuchtinger", role: "Commander, 21st Panzer Division", whereOnDDay: "The one Panzer commander who fought on D-Day" },
];

export const normandySections: NormandySection[] = [
  {
    id: "overview",
    kicker: "Avsnitt N · Normandie",
    title: "Den längsta dagen",
    lead:
      "Den 6 juni 1944 korsade mer än 156 000 allierade soldater Engelska kanalen och tvingade sig i land på fem normandiska stränder. Det var historiens största sjöburna invasion — det ögonblick då kriget i väst vände, och början på slutet för det nazistockuperade Europa. Åttiofyra år senare finns bunkrarna, stränderna och kyrkogårdarna kvar — och vi bor tre nätter i den enda normandiska stad som klarade sig undan förstörelsen: Bayeux.",
    body: [
      "Bayeux befriades den 7 juni 1944 — en dag efter landstigningarna. Eftersom staden föll så snabbt slapp den de bombningar som lade merparten av Normandie i ruiner. Medeltidscentrum, korsvirkesfasader och den romansk-gotiska katedralen är i allt väsentligt desamma som Vilhelm Erövrarens samtida kände igen dem. Charles de Gaulle höll sitt första tal på befriad fransk mark här den 14 juni 1944.",
      "Från Bayeux kan man köra västerut mot Omaha, Pointe du Hoc och den amerikanska krigskyrkogården; österut mot Gold, Arromanches, Juno, Sword och Pegasus Bridge; eller inåt landet till Mémorial de Caen och Sainte-Mère-Église. Vi har bokat Bayeux Shuttles brittisk-amerikanska D-dagsupplevelse fredagen den 26 juni — se turschemat nedan.",
      "Vad som följer är fältguiden: tidslinjen, de tyska försvaren (och varför de brast), de luftburna operationerna som öppnade natten, de fem stränderna i ordning, Omaha i detalj, och de sex veckor av bocage-strider som förbinder stränderna med befrielsen av Paris.",
    ],
    pullQuote:
      "Invansionens första 24 timmar blir avgörande. För de allierade såväl som för Tyskland kommer det att bli den längsta dagen.",
    pullQuoteAttribution: "Fältmarskalk Erwin Rommel, maj 1944",
  },
  {
    id: "german-defences",
    image: {
      src: "https://images.unsplash.com/photo-1667505078203-87883b974e37?w=1600&auto=format&fit=crop&q=80",
      caption: "En bevarad bunker från andra världskriget — del av Atlantvallens befästningar.",
    },
    kicker: "Kapitel I · Den andra sidan",
    title: "Varför Atlantvallen bröt samman",
    lead:
      "Tyskland var inte oförberett. Atlantvallen var det största byggnadsprojektet i historien. Rommel hade slitit sig till utmattning för att förstärka stränderna. Det som fällde dem var en förlamad befälsstruktur, en ödesdigert strategisk meningsskiljaktighet, en Führer som vägrade frigöra sina pansarreserver, och ett allierat vilseledningsoperation så briljant att tyskarna höll kvar sina bästa trupper i väntan på en invasion som aldrig kom.",
    body: [
      "Från 1942 och framåt pumpade Tyskland resurser in i Atlantvallen — en befästningskedja som sträckte sig 3 200 kilometer från Norge till Pyrenéerna. Sjutton miljoner kubikmeter betong. 1,2 miljoner ton stål. I juni 1944 hade över 13 000 befästningar byggts. På papperet ogenomtränglig. I verkligheten måste Vallen skydda en så ofantlig sträcka att ett verkligt sammanhängande försvar var omöjligt. Von Rundstedt kallade den privat för 'en dimbildning i Hitlers feodala fantasivärld.'",
      "När Rommel övertog befälet över Armégrupp B i slutet av 1943 blev han chockad av vad han fann. Han fördubblade minorna från 2 miljoner till 6,5 miljoner på sju månader. Strandhinder — stålbockar, belgiska grindar, träpålar — drevs ned i sanden för att förstöra landningsbåtar. 'Rommels sparris' — höga pålar — planterades i fält för att sönderriva glidflygplan. Låglänta områden översvämmades för att dränka fallskärmsjägare. Kustbatterier vid Merville, Longues-sur-Mer, Pointe du Hoc, Maisy, Azeville och Crisbecq förstärktes och kunde bestryka havet på 30 kilometers avstånd.",
      "Men den tyska befälsstrukturen i väst var ett virrvarr av överlappande befogenheter. Von Rundstedt hade, trots titeln Överbefälhavare Väst, ingen makt över flottan eller flygvapnet. Rommel kunde gå förbi honom direkt till Hitler. Och de avgörande pansarreserverna — de enda styrkor som kunde kasta tillbaka de allierade i havet — låg under OKW:s direkta kontroll, det vill säga Hitler personligen måste godkänna deras förflyttning.",
      "Det mest ödesdigra meningsutbytet ägde rum innan en enda soldat hade landstigit. Rommel, som i Nordafrika bevittnat hur ökenluftflyget krossat hans pansarförband, ville ha varje pansardivision inom anfallsavstånd från kusten — redo att motanfalla inom timmar, medan de allierade fortfarande var oorganiserade. Von Rundstedt argumenterade för ortodox doktrin: håll pansarna samlade som centralreserv, långt nog inåt landet för att vara säkra från marinstridkrafternas eld. Hitler delade skillnaden och saboterade bägge strategierna. Av tio pansardivisioner i väst var bara en — den 21:a — i position att strida på D-dagen.",
      "På morgonen den 6 juni befann sig Rommel i Herrlingen för att fira sin hustrus 50-årsdag. Hitler sov på Berghof — hans stab vägrade väcka honom. Han vaknade vid lunchtid, vid det laget hade de allierade varit i land i sju timmar. Övertygad av Operation Fortitude om att Normandie var ett skendrag, frigav han blott två divisioner kl. 16. Von Rundstedt avgick kort därefter och skall ha skrivit till OKW: 'Vad ska jag göra? Slut fred, ni dårar.'",
      "Operation Fortitude var mästerdraget. En fiktiv 1st US Army Group (FUSAG) — uppblåsbara gummistridsvagnar, fejkad radiotrafik, general George Patton synligt placerad i 'befäl' — övertygade Hitler om att den verkliga invasionen skulle landa vid Pas-de-Calais. Varenda tysk spion i Storbritannien hade vänts av MI5; den spanske dubbelagenten GARBO ledde ett fiktivt nätverk av 27 underagenter vars rapporter ingick i 62 separata underrättelsebedömningar från den tyska överbefälsstaben. Tyskarna belönade GARBO med Järnkorset. Hitler höll den 15:e armén — mer än 200 000 man — vid Pas-de-Calais i sju veckor, i väntan på en invasion som aldrig kom.",
      "Och luft och hav var redan förlorade. Totalt antal tyska sorties över Normandie på D-dagen: ungefär 100. Allierade sorties: mer än 14 000. Kriegsmarine var en skugga. Utan lufttäckning eller marinstöd var det enda som kunde ha stoppat de allierade ett omedelbart pansarmotanfall under de första timmarna. Det motanfallet kom aldrig.",
    ],
    pullQuote: "Vad ska jag göra? Slut fred, ni dårar.",
    pullQuoteAttribution: "Fältmarskalk Gerd von Rundstedt, efter sin avskedning",
  },
  {
    id: "airborne",
    image: {
      src: "https://images.unsplash.com/photo-1567507203066-6f1180e2ad29?w=1600&auto=format&fit=crop&q=80",
      caption: "En fallskärm mot öppen himmel — en bild som väcker minnet av de luftburna hoppen bakom stränderna på D-dagen.",
    },
    kicker: "Kapitel II · 00:16",
    title: "De luftburna operationerna",
    lead:
      "Innan den första landningsbåten nudde sanden hade striden redan börjat. I mörkret den 6 juni 1944 hoppade tre luftburna divisioner ned bakom fiendens linjer — den hittills största luftburna operationen i historien.",
    body: [
      "Utah Beach låg vid basen av Cotentin-halvön, förbunden med resten av Normandie av ett fåtal smala vägar över översvämmad marsmark. Vid Sword Beach behövde broarna över Orne och Caen-kanalen säkras. Lösningen: sätt ned fallskärmsjägare och glidflygplanssoldater i timmarna före gryningen för att erövra flankerna, skära av tyska förbindelser och hålla positionerna tills de sjöburna styrkorna nådde fram.",
      "US 82nd Airborne — 'All American' — hade i uppdrag att inta Sainte-Mère-Église och säkra övergångarna vid Merderet. Nedkastet spreds katastrofalt över ett stort område på grund av molntäcke och luftvärnseld. Många landade mil från sina målområden; somliga drunknade i de översvämmade fälten. Menig John Steele fastnade med fallskärmen i kyrktornet i Sainte-Mère-Église; han hängde där i två timmar och spelade död medan striden rasade under honom. Han överlevde. En attrapp av en fallskärmsjägare hänger fortfarande från tornet till hans minne.",
      "US 101st Airborne — 'Screaming Eagles' — hade ett specifikt taktiskt uppdrag: säkra de fyra utfarterna från Utah Beach. Om dessa vägar inte röjdes innan de sjöburna infanteristerna anlände, skulle den 4:e divisionen vara instängd på sanden. Precis som 82:an var nedkastet kaotiskt. Men i smågrupper kämpade sig fallskärmsjägarna fram till målen. Vägarna röjdes i tid — direkt avgörande för Utahs relativa framgång.",
      "British 6th Airborne hade förmodligen det mest precisa uppdraget. Klockan 00:16 den 6 juni — fem timmar före de sjöburna landstigningarna — landade sex Horsa-glidflygplan som bars av soldater ur Oxfordshire and Buckinghamshire Light Infantry tyst i mörkret intill Caen-kanalens bro vid Bénouville. Anfallet tog tio minuter. Bron togs intakt. Det var den första biten av ockuperat Frankrike som befriades på D-dagen.",
      "Major John Howard, som ledde anfallet på bron som sedermera fick namnet Pegasus Bridge, mötte Lord Lovats kommandosoldater som kom för att avlösa honom senare på morgonen — marscherande till tonerna av en ensam skotsk säckpipsspelare, Bill Millin, som spelade längs stranden och vägbanan under eld. Millin sa senare att tyskarna inte sköt honom för att de trodde han var galen. Den ursprungliga Pegasus Bridge finns nu på Mémorial Pegasus-museet i närheten, perfekt bevarad. Café Gondrée vid kanalen — det första hus som befriades i Frankrike — drivs fortfarande av samma familj.",
    ],
  },
  {
    id: "five-beaches",
    image: {
      src: "https://images.unsplash.com/photo-1669861491732-567dbf11d17c?w=1600&auto=format&fit=crop&q=80",
      caption: "Normandie: en lång strandbåge under klipporna.",
    },
    kicker: "Kapitel III · 80 kilometer",
    title: "De fem stränderna",
    lead:
      "Operation Overlord delade upp Normandiekusten i fem anfallssektorer som sträckte sig ungefär 80 kilometer från väster till öster. Varje strand hade sin egen karaktär — sin egen terräng, sina egna försvarare, sin egen historia.",
    body: [
      "Utah Beach (USA, längst i väster): Vid basen av Cotentin-halvön. Ett navigeringsfel på morgonen den 6 juni visade sig vara en välsignelse — landningsbåtarna drev söderut och gick i land där försvaren var svagare än avsett. Brigadgeneral Theodore Roosevelt Jr., son till presidenten, var den högst rankade officeren i den första vågen. När hans män insåg att de var på fel plats sa Roosevelt: 'Vi börjar kriget härifrån.' Han tilldelades Medal of Honor och dog av hjärtattack fem veckor senare. Ungefär 197 amerikanska förluster — den lyckligaste av de fem.",
      "Omaha Beach (USA, 'Blodiga Omaha'): En nästan-katastrof. Stranden flankerades av 50-meter höga klippor, perfekt positionerade för tyska försvarare. Bombningen före gryningen missade sina mål. Merparten av de amfibiska DD-stridsvagnarna sjönk i det grova havet. Den veteranerfarna tyska 352:a infanteridivisionen hade förflyttats till sektorn veckor före D-dagen, oupptäckt av allierad underrättelsetjänst. Förband led katastrofala förluster under de första minuterna. Vid lunchtid övervägde högre chefer kortvarigt att överge stranden. Smågrupper av soldater, på eget initiativ, hittade vägar upp längs klipporna. Ungefär 2 000 amerikanska förluster enbart den 6 juni — fem gånger fler än på någon annan strand.",
      "Gold Beach (Storbritannien, i mitten): Riktad mot Arromanches — den planerade platsen för en av två prefabricerade Mulbryhamnar som skulle försörja hela den allierade armén. Landstigningarna gick bättre än vid Omaha, även om det striddes hårt kring den tyska stödpunkten vid Le Hamel. Vid kvällen hade brittiska styrkor nått utkanten av Bayeux — som intogs utan förstörelse dagen därpå.",
      "Juno Beach (Kanada): Centrerad kring Courseulles-sur-Mer och Bernières-sur-Mer. Svåra förluster i de första vågorna — rev utanför kusten försenade landstigningarna och trängde ihop männen under eld. Men kanadensarna tryckte längre inåt landet på D-dagen än någon annan allierad styrka och nådde nästan Caen-Bayeux-vägen vid kvällen.",
      "Sword Beach (Storbritannien, längst i öster): Närmast Caen — D-dagens viktigaste strategiska mål. Den brittiska 3:e divisionen landsteg och tryckte inåt landet men bromsades av 21:a pansardivisionen — dagens enda bepansrade motanfall. Dess kvällsanfall nådde nästan kusten mellan Sword och Juno, den djupaste tyska framryckningen under hela dagen. Britterna nådde 6th Airbornés positioner vid Pegasus Bridge men hann inte fram till Caen. Staden föll inte förrän i juli.",
      "Sammantaget gav de fem stränderna de allierade ett brohuvud på 80 kilometer när den 6 juni var slut. De var ännu inte förenade — det fanns luckor, särskilt mellan Utah och Omaha — men invasionen hade lyckats. Inom en vecka var brohuvudena konsoliderade. Inom en månad hade över en miljon man landstigit i Normandie.",
    ],
  },
  {
    id: "omaha",
    image: {
      src: "https://images.unsplash.com/photo-1683375807467-867f866753fa?w=1600&auto=format&fit=crop&q=80",
      caption: "Blicken ned mot havet från klipphöjden ovanför stranden — den typ av terräng den första vågen vid Omaha var tvungen att bestiga.",
    },
    kicker: "Kapitel IV · Den blodigaste kusten",
    title: "Omaha — Två sorters människor",
    lead:
      "Av de fem D-dagsstränderna är Omaha unik. Det var det närmaste ett misslyckande som de allierade upplevde den 6 juni — och det var här dagens överlägset svåraste förluster drabbade dem.",
    body: [
      "Omaha är en sex kilometer lång halvmåne av sand, flankerad i bägge ändar av klippor och med branta höjder på upp till 50 meter i ryggen. Det fanns bara fem smala utfarter — 'raviner' — från stranden, och tyskarna hade täckt var och en av dem. Till skillnad från de andra stränderna fanns det nästan inget skydd på Omaha. De män som tog sig i land fann sig på plan, öppen sand utan annan väg än framåt — mot elden.",
      "Flera faktorer samverkade till att göra det katastrofalt. Terrängen gynnade försvaret: höjderna gav de tyska försvararna vid Widerstandsnester — motståndsboerna WN62 och WN65 — fritt skjutfält över hela stranden. Bombningen före gryningen missade sina mål helt; bomberna föll mil inåt landet. Merparten av DD-stridsvagnarna sköts ut alltför långt ut i det grova havet — 27 av 29 i ett bataljonsförband sjönk, och infanteriet landsteg utan pansarstöd. Försvararna, den tyska 352:a infanteridivisionen, hade förflyttats till sektorn bara veckor före D-dagen, oupptäckt.",
      "Klockan 06:30 föll ramperna på landningsbåtarna. Många drunknade omedelbart under tyngden av sin utrustning. De som nådde vattenlinjen skars ned på sanden. Vid 08:00 var läget kritiskt. Kroppar täckte vattenlinjen. Överlevande sökte skydd bakom de metallhinder tyskarna hade ställt ut på stranden. Officerare och underofficerare sköts ned under de första minuterna. Stranden var, med en befälhavares ord, 'ett eldtäcke.'",
      "Det var inte ett enda heroiskt ögonblick som räddade Omaha — det var dussintals små sådana. Spridda grupper av män, utan befäl och förtvivlade, hittade vägar upp längs klipphöjderna. Jagare seglade farligt nära land och sköt på rakt håll mot tyska ställningar. Rangers besteg klipporna vid Pointe du Hoc. Överste George Taylor vid 1:a divisionen samlade sina män med de ord som blev dagens valspråk. Vid lunchtid höll man på att inta höjderna. Vid kvällen existerade ett grunt, otryggt brohuvud.",
      "Två kilometer väster om Omaha var tvungna USA:s Rangers att, under eld, bestiga 30 meter lodräta klippor vid Pointe du Hoc med kättinghaker och stegar, för att förstöra ett batteri med räckvidd att beskjuta både Utah och Omaha. Av 225 Rangers som landsteg var bara 90 fortfarande stridsdugliga två dagar senare. När de nådde toppen fann de att kanonerna hade flyttats. De lokaliserade dem gömda i ett fält och förstörde dem med termitgranater. Det kraterprickiga bergkrönet lämnas exakt i det skick striden efterlämnade det.",
      "Den amerikanska krigskyrkogården i Normandie ovanför Omaha rymmer 9 387 vita kors och Davidsstjärnor på ett välskött bergkrön. Flertalet gravar som syns från kyrkogårdens utsiktspunkt markerar män som föll under veckorna efter D-dagen, men de som föll just den 6 juni finns bland dem.",
    ],
    pullQuote:
      "På den här stranden stannar bara två slags människor: de döda, och de som kommer att dö.",
    pullQuoteAttribution: "Överste George Taylor, USA:s 1:a infanteridivision, 6 juni 1944",
  },
  {
    id: "to-paris",
    image: {
      src: "https://images.unsplash.com/photo-1683960784024-0ad47f7d0522?w=1600&auto=format&fit=crop&q=80",
      caption: "Det lummiga normandiska landskapet på vägen inåt landet från stränderna mot Paris.",
    },
    kicker: "Kapitel V · Bron till Paris",
    title: "Från Normandie till Champs-Élysées",
    lead:
      "D-dagen var inte slutet — det var en början. Sex veckors brutala strider i den normandiska landsbygden skilde landstigningarna den 6 juni från befrielsen av Paris den 25 augusti.",
    body: [
      "Efter det att stränderna säkrats förväntade sig de allierade en snabb framryckning. Istället sprang de rakt in i bocagen — Normandies urgamla häcklandskap. Det var inte trädgårdshäckar. Den normandiska bocagen bestod av täta jordvallar, ofta två meter höga, toppade med tjocka rötter och växtlighet som vuxit i hundratals år. Varje fält var en liten fästning. Stridsvagnarna kunde inte se över dem. Infanteriet kunde inte bryta sig igenom dem. Artilleriet kunde inte avfyra med precision mot dem.",
      "Det brittiska målet på D-dagen hade varit Caen — en stad med 60 000 invånare, en viktig vägknut och nyckeln till den allierade vänsterflänken. Caen var tänkt att falla den 6 juni. Istället höll den ut i nästan två månader. Montgomery sjösatte en rad stora offensiver — Perch, Epsom, Charnwood, Goodwood — alla utformade för att inta eller kringgå Caen och dra det tyska pansaret mot den brittiska sektorn. Det var delvis strategi: genom att hålla elitpansardivisionerna bundna i striderna mot britterna möjliggjorde man det amerikanska genombrottet. Caen föll äntligen den 9 juli, stora delar av staden sönderbombade till ruin.",
      "Operation Cobra — genombrottet — inleddes den 25 juli med en massiv flygnedkastning av bomber kring Saint-Lô, följd av det nyaktiverade amerikanska trupperna under Pattons tredje armé. Inom dagar rusade amerikanskt pansar genom öppen terräng. Inom en vecka hade Pattons stridsvagnar svängt söderut och sedan österut och omringat merparten av den tyska armén i Frankrike.",
      "När Patton svängde österut och britterna och kanadensarna tryckte söderut, slöt sig två allierade arméer kring den tyska Armégrupp B nära Falaise. Inringade i en krympande ficka led tyskarna sitt svåraste nederlag i väst sedan D-dagen. Ungefär 50 000 tyskar togs till fånga och ytterligare 10 000 dödades i Falaisepåsen. Vägarna var täppta av förstörda fordon. Allierat flygvapen omöjliggjorde rörelser i dagsljus. Den tyska armén i Frankrike upphörde i praktiken att existera som en sammanhållen stridsstyrka. Vägen till Paris låg öppen.",
      "Resten är historien vi berättar i Paris-avsnittet: de Gaulle som sätter press på Eisenhower, motståndsrörelsen som reser sig den 19 augusti, Leclercks franska 2:a bepansrade division som rusar mot staden, och von Choltitz kapitulation på Hôtel Meurice den 25 augusti. När du står på Omaha Beach och sedan promenerar längs Champs-Élysées, vandrar du längs samma berättelse — bara 300 kilometer och 80 dagar isär.",
    ],
  },
];

export const normandySites: NormandySite[] = [
  // US sector
  {
    id: "ste-mere-eglise",
    name: "Ste-Mère-Église",
    area: "Inland from Utah",
    coords: [49.4083, -1.3164],
    theme: "us",
    category: "airborne",
    why: "First French town liberated on D-Day — taken by the US 82nd Airborne in the early hours of June 6. A mannequin of paratrooper John Steele still hangs from the church steeple. The Airborne Museum has an original WACO glider and a C-47.",
    timeNeeded: "2 hours",
  },
  {
    id: "utah",
    name: "Utah Beach",
    area: "Cotentin Peninsula",
    coords: [49.4147, -1.1761],
    theme: "us",
    category: "beach",
    why: "Westernmost beach. Most successful landing of the five — only ~197 American casualties. Modern museum built around a German bunker, with an original landing craft and Sherman tank.",
    timeNeeded: "1.5 hours",
  },
  {
    id: "pointe-du-hoc",
    name: "Pointe du Hoc",
    area: "Between Utah and Omaha",
    coords: [49.3961, -0.9886],
    theme: "us",
    category: "battery",
    why: "The most dramatic D-Day site in existence. US Rangers scaled 100ft cliffs under fire to destroy a German battery. Bunkers, observation posts, and shell craters left exactly as the fighting left them — a lunar landscape.",
    timeNeeded: "1 hour",
  },
  {
    id: "omaha",
    name: "Omaha Beach",
    area: "Vierville → Colleville",
    coords: [49.3697, -0.8755],
    theme: "us",
    category: "beach",
    why: "'Bloody Omaha' — the closest thing to failure on June 6. Walk the sand where the 1st and 29th Divisions landed. The bluffs above — where German machine guns cut men down — are still there.",
    timeNeeded: "1.5 hours",
  },
  {
    id: "american-cemetery",
    name: "Normandy American Cemetery",
    area: "Colleville-sur-Mer",
    coords: [49.3585, -0.8514],
    theme: "us",
    category: "cemetery",
    why: "9,387 white crosses and Stars of David on a clifftop above Omaha. The visitor centre is excellent — individual stories of the fallen. The Garden of the Missing lists 1,557 names of those whose remains were never found. Free entry.",
    timeNeeded: "1.5–2 hours",
  },

  // British sector
  {
    id: "longues",
    name: "Longues-sur-Mer Battery",
    area: "Coast west of Arromanches",
    coords: [49.3447, -0.6928],
    theme: "uk",
    category: "battery",
    why: "The only Atlantic Wall battery in the area with its guns still in situ in their original casemates. Fired on the fleet on D-Day before being silenced. Stage 5 on the Bayeux Shuttle tour.",
    timeNeeded: "45 min",
  },
  {
    id: "arromanches",
    name: "Arromanches & Mulberry B",
    area: "Gold Beach",
    coords: [49.3398, -0.6219],
    theme: "uk",
    category: "harbour",
    why: "Remains of the prefabricated Mulberry Harbour — codenamed Port Winston — still visible offshore. The Allies towed an entire harbour across the Channel and assembled it here. The 360° cinema combines archive footage with modern images of the same locations.",
    timeNeeded: "2 hours",
  },
  {
    id: "gold",
    name: "Gold Beach (Asnelles)",
    area: "British centre",
    coords: [49.3408, -0.595],
    theme: "uk",
    category: "beach",
    why: "British 50th Infantry Division. Three objectives on D-Day: capture Arromanches, link up with Canadians at Juno, and push inland to take Bayeux — done the very next day.",
    timeNeeded: "30 min (drive-by)",
  },
  {
    id: "sword",
    name: "Sword Beach",
    area: "Ouistreham",
    coords: [49.289, -0.258],
    theme: "uk",
    category: "beach",
    why: "Easternmost beach, nearest to Caen. The British 3rd Division landed and pushed inland but were slowed by the 21st Panzer Division — the only armoured counterattack on D-Day.",
    timeNeeded: "1 hour",
  },
  {
    id: "pegasus",
    name: "Pegasus Bridge",
    area: "Bénouville",
    coords: [49.2421, -0.2745],
    theme: "uk",
    category: "airborne",
    why: "Captured at 00:16 on June 6 by British glider troops — the first piece of occupied France liberated on D-Day. The original bridge sits in the Mémorial Pegasus museum, perfectly preserved. The Café Gondrée beside the canal was the first house liberated in France — still run by the granddaughter of the original owners.",
    timeNeeded: "1.5 hours",
  },
  {
    id: "merville",
    name: "Merville Battery",
    area: "East of Sword Beach",
    coords: [49.2697, -0.198],
    theme: "uk",
    category: "battery",
    why: "Captured by British 6th Airborne in the night assault — a daring operation against a heavily fortified position whose guns threatened Sword Beach. Now a small but evocative museum with original casemates intact.",
    timeNeeded: "1 hour",
  },
  {
    id: "bayeux-cemetery",
    name: "Bayeux War Cemetery & Memorial",
    area: "Bayeux",
    coords: [49.273, -0.71],
    theme: "uk",
    category: "cemetery",
    why: "Largest British WWII military cemetery in France — 4,648 graves. Opposite, the Bayeux Memorial bears the names of 1,808 soldiers with no known grave. Latin inscription: 'We, whom William conquered, set free the native land of the conqueror.' Free, always open.",
    timeNeeded: "1 hour",
  },

  // Canadian sector
  {
    id: "juno",
    name: "Juno Beach & Centre",
    area: "Courseulles-sur-Mer",
    coords: [49.3318, -0.4569],
    theme: "canadian",
    category: "beach",
    why: "Canadian 3rd Infantry Division pushed further inland on D-Day than any other Allied force. The Juno Beach Centre is Canada's national memorial — Canada lost over 5,000 men in Normandy.",
    timeNeeded: "2 hours",
  },
  {
    id: "bernieres",
    name: "Bernières-sur-Mer · The Canadian House",
    area: "Queen Red sector, Juno",
    coords: [49.3367, -0.4213],
    theme: "canadian",
    category: "beach",
    why: "The half-timbered villa right on the seafront — first house liberated by Canadian forces on D-Day, used as a temporary HQ. Reginal Polish-Canadian regiment landed here. The building still stands and is plaqued.",
    timeNeeded: "30 min",
  },
  {
    id: "beny-cemetery",
    name: "Canadian War Cemetery, Bény-sur-Mer",
    area: "Inland from Juno (15 min)",
    coords: [49.2855, -0.4424],
    theme: "canadian",
    category: "cemetery",
    why: "2,049 Canadian graves in immaculate rows — the resting place of most Canadians killed in the early weeks of the Normandy campaign. Quieter and less visited than the American or British cemeteries. The Canadian counterpart to Colleville.",
    timeNeeded: "1 hour",
  },
  {
    id: "abbaye-ardenne",
    name: "Abbaye d'Ardenne",
    area: "West of Caen",
    coords: [49.2105, -0.4112],
    theme: "canadian",
    category: "cemetery",
    why: "12th-century Norman abbey where 20 Canadian POWs were executed by the 12th SS Panzer Division 'Hitlerjugend' on 7–17 June 1944. A memorial garden lists their names. One of the most sobering sites in the Canadian sector.",
    timeNeeded: "45 min",
  },

  // Shared
  {
    id: "ver-sur-mer",
    name: "Normandy British Memorial",
    area: "Ver-sur-Mer (overlooking Gold)",
    coords: [49.3406, -0.5345],
    theme: "uk",
    category: "cemetery",
    why: "Memorial bearing the names of all 22,442 soldiers who died on D-Day and during the Battle of Normandy with no known grave. Three nine-foot bronze infantrymen by David Williams-Ellis. Stage 2 on the Bayeux Shuttle tour.",
    timeNeeded: "30 min",
  },
  {
    id: "memorial-caen",
    name: "Mémorial de Caen",
    area: "Caen (40km from Bayeux)",
    coords: [49.1976, -0.3849],
    theme: "shared",
    category: "museum",
    why: "The most comprehensive WWII museum in Normandy — and one of the finest war museums in Europe. Covers the entire war, from totalitarianism through D-Day to the Cold War. Built on the site of the German military HQ for Normandy. Allow at least half a day.",
    timeNeeded: "Half day",
  },
  {
    id: "memorial-bayeux",
    name: "Mémorial de la Bataille de Normandie",
    area: "Bayeux",
    coords: [49.2738, -0.709],
    theme: "shared",
    category: "museum",
    why: "Best overview of the entire Normandy campaign — from D-Day through the Falaise Pocket. Vehicles, weapons, uniforms, personal stories. Worth 2–3 hours, especially before or after the shuttle tour.",
    timeNeeded: "2–3 hours",
  },
  {
    id: "bayeux-cathedral",
    name: "Cathédrale Notre-Dame de Bayeux",
    area: "Bayeux centre",
    coords: [49.2745, -0.7038],
    theme: "shared",
    category: "city",
    why: "Heart of the city. Romanesque 11th-century crypt, Gothic 13th-century nave. The Bayeux Tapestry was originally made for this cathedral — hung inside on feast days. Free entry. Extraordinary even without the Tapestry.",
    timeNeeded: "1 hour",
  },
  {
    id: "bayeux-tapestry",
    name: "Bayeux Tapestry Museum (CLOSED)",
    area: "Bayeux",
    coords: [49.2747, -0.7044],
    theme: "shared",
    category: "city",
    why: "⚠️ CLOSED Sept 2025 → Oct 2027 for major renovation. The Tapestry will not be on display during your July 2026 visit. May be loaned to the British Museum in London.",
    timeNeeded: "Closed",
  },
];

export const normandyCategoryLabels: Record<NormandySite["category"], string> = {
  beach: "Strand",
  airborne: "Luftburet",
  battery: "Tyskt batteri",
  cemetery: "Kyrkogård / Memorial",
  museum: "Museum",
  city: "Stadsmiljö",
  harbour: "Mulberryhamnen",
};

export const normandyThemeLabel: Record<NormandySiteTheme, string> = {
  us: "USA-sektorn",
  uk: "Brittisk sektor",
  canadian: "Kanadensisk sektor",
  shared: "Gemensamt / stad",
};

// Per-sector content colors with light + dark variants. Dark variants are
// lifted-lightness equivalents so each sector stays distinguishable on the
// cocoa-paper background.
export const normandyThemeColor: Record<
  "light" | "dark",
  Record<NormandySiteTheme, string>
> = {
  light: {
    us:       "#8b1a1a",
    uk:       "#1a3a5a",
    canadian: "#b04020",
    shared:   "#5a3a1a",
  },
  dark: {
    us:       "#d97a5a",
    uk:       "#7a9bb8",
    canadian: "#e08060",
    shared:   "#a89880",
  },
};

// Bayeux base info
export type BayeuxRestaurant = {
  name: string;
  rating?: string;
  bib?: boolean;
  category: "restaurant" | "cafe";
  note: string;
  closed?: string;
};

export const bayeuxRestaurants: BayeuxRestaurant[] = [
  { name: "La Rapière", rating: "★ 4.8 · #3 in Bayeux", bib: true, category: "restaurant", note: "Set inside a 15th-century building. Considered the best restaurant in Bayeux. Lunch €16–21, dinner €36–49. Book 1–2 weeks ahead.", closed: "Sun eve & Mon" },
  { name: "La Bonbonne", rating: "★ 4.8 · #2 in Bayeux", category: "restaurant", note: "Rue Saint-Jean. Small weekly-changing menu. Bistro at lunch, tea room afternoon, dining bar evening. Two courses €17.90, three courses €21. Reservations essential.", closed: "Sun & Mon" },
  { name: "L'Alcôve", rating: "★ 4.7 · #6 in Bayeux", bib: true, category: "restaurant", note: "Just behind the cathedral. Weekly-changing set menus, market-fresh and seasonal. Bright, plant-filled room. Excellent value." },
  { name: "Le Moulin de la Galette", rating: "★ 4.5 · #14 — Crêperie", category: "restaurant", note: "Set in a medieval mill house on the river — wheel still turns. Galettes, sweet crêpes, Norman cider. Terrace with river views. Good gluten-free options." },
  { name: "Le Pommier", rating: "★ 4.2 (Google) · 4.0 (TA)", category: "restaurant", note: "Traditional Norman cooking in an old stone building, cathedral views from the terrace. Strong on local seafood and seasonal meats.", closed: "Tue, Wed lunch, Thu" },
  { name: "Le Garde-Manger (Hôtel Reine Mathilde)", rating: "★ 3.9 (TA)", category: "restaurant", note: "Stone walls, brasserie atmosphere, classic Norman dishes. Serves continuously 7am–10pm every day — most useful on tour day when eating at odd hours. ~€20 à la carte." },

  { name: "Reine Mathilde Patisserie", category: "cafe", note: "Corner by the cathedral. Great hot beverages and pastries for breakfast or afternoon cake. Hot chocolate reportedly excellent." },
  { name: "Les Volets Roses", category: "cafe", note: "Lovely tea room on the way to the cathedral. French breakfast: coffee, juice, croissant, bread. Sunday brunch with Norman cheese, quiche, cakes." },
  { name: "Au Louis d'Or", category: "cafe", note: "Centrally located. Good crêpes — and a fine spot to try local Norman cider, the regional alternative to wine from the apple orchards." },
  { name: "La Maison Lemoisson", category: "cafe", note: "Solid bakery for breakfast or a mid-afternoon snack. Worth grabbing a bag of pastries on your way out to the beaches." },
];

// Bayeux Shuttle Tour
export type ShuttleStop = {
  stage: number;
  time?: string;
  title: string;
  location: string;
  type: "guided" | "drive-by" | "lunch" | "meet" | "return";
  body: string;
};

export const bayeuxShuttle = {
  date: "Friday 26 June 2026",
  ref: "260476",
  departure: "8:45 AM sharp · Place de Québec, Bayeux",
  duration: "8.5 hours",
  passengers: 2,
  totalPrice: "€270 (€135 pp)",
  groupSize: "Maximum 8 clients",
  language: "English only",
  transport: "Modern air-conditioned van/bus",
  sector: "Gold & Omaha (British & American)",
  contact: { phone: "+33 607 195 405", email: "bookings@bayeuxshuttle.com", url: "https://bayeuxshuttle.com/tour/british-american-dday-experience/" },
  practical: [
    "Designed so you can have breakfast at your hotel first",
    "Arrive early — they run on schedule and will not wait. No refunds if you miss departure.",
    "Free parking near Bayeux train station (10 min walk to Place de Québec). No free parking at Place de Québec itself.",
    "The itinerary may be inverted depending on traffic.",
    "No luggage on the vehicle. No wheelchairs, mobility scooters, or walking frames.",
    "Children under 4 not accepted on group tours. Every passenger needs a booked seat (no laps).",
  ],
  cancellation: "Free cancellation up to 24h before. No refund within 24h. 5% PayPal chargeback fee on refunds.",
  stops: [
    { stage: 1, time: "8:45 AM", title: "Meeting Point", location: "Place de Québec, Bayeux", type: "meet" as const, body: "Be at the departure point at least 10 minutes early. The tour leaves on schedule — no waiting." },
    { stage: 2, title: "Normandy British Memorial", location: "Ver-sur-Mer (Gold)", type: "guided" as const, body: "Names of all 22,442 soldiers who died in the Battle of Normandy with no known grave. Three nine-foot bronze infantrymen by David Williams-Ellis." },
    { stage: 3, title: "Gold Beach", location: "Asnelles", type: "drive-by" as const, body: "Drive-past with commentary. British forces here had three objectives: capture Arromanches, link up with the Canadians at Juno, and push inland to take Bayeux — the first French city liberated, the very next day." },
    { stage: 4, title: "Mulberry Harbour B", location: "Arromanches", type: "guided" as const, body: "Remains of the prefabricated harbour — Port Winston — still visible offshore. The Allies towed an entire harbour across the Channel and assembled it here." },
    { stage: 5, title: "German Atlantic Wall Battery", location: "Longues-sur-Mer", type: "guided" as const, body: "The only Atlantic Wall battery in the area with its guns still in situ in their original casemates. How it was built, manned, fired on D-Day — and how it was silenced." },
    { stage: 6, time: "~1 hour", title: "Lunch Break (not included)", location: "Choice of Bayeux or Port-en-Bessin", type: "lunch" as const, body: "Lunch is not provided. About one hour. Quick lunch only — not a long sit-down meal." },
    { stage: 7, title: "Pointe du Hoc", location: "Cliffs between Utah and Omaha", type: "guided" as const, body: "US Army Rangers scaled nearly 100 feet of sheer cliff under fire to destroy six long-range gun positions. Craters, bunkers, and observation posts left intact — a lunar landscape frozen in 1944." },
    { stage: 8, title: "Omaha Beach", location: "'Bloody Omaha'", type: "guided" as const, body: "Walk the sand. High bluffs above were lined with German machine guns. The guide describes it simply: 'very intimidating.'" },
    { stage: 9, title: "Normandy American Cemetery", location: "Colleville-sur-Mer", type: "guided" as const, body: "172 acres above Omaha. Walk the rows of white crosses and Stars of David. One of the most moving places in the world." },
    { stage: 10, time: "~17:15", title: "Return to Bayeux", location: "Place de Québec, Bayeux", type: "return" as const, body: "Return to the same departure point — not hotels." },
  ],
};
