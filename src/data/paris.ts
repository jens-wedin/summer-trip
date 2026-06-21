import type { LatLng } from "../types";

export type HistoricSiteTheme = "napoleon" | "wwii" | "both";

export type HistoricSite = {
  id: string;
  name: string;
  address: string;
  arrondissement: string;
  coords: LatLng;
  theme: HistoricSiteTheme;
  why: string;
  timeNeeded: string;
  connects: string[];
};

export type ParisSection = {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  body: string[];
  image?: { src: string; caption: string };
  pullQuote?: string;
  pullQuoteAttribution?: string;
};

export const parisHeroImage = {
  src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&auto=format&fit=crop&q=80",
  caption: "Eiffeltornet i gyllene timme — Paris, den eviga huvudstaden.",
};

export const parisSitesMapImage = {
  src: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1600&auto=format&fit=crop&q=80",
  caption: "Notre-Dame de Paris på Île de la Cité.",
};

export const parisHistoricSites: HistoricSite[] = [
  // Napoleon
  {
    id: "invalides",
    name: "Les Invalides & Napoleons grav",
    address: "129 Boulevard de Fontenoy",
    arrondissement: "7th",
    coords: [48.8559, 2.3127],
    theme: "both",
    why: "Napoleons väldiga röda porfyrsarkofag under en gyllene kupol — genuint rörande. Rymmer även världens mest imponerande samling av fransk militärhistoria och en särskild avdelning om andra världskriget (Frankrikes fall, Motståndsrörelsen, de Gaulle, befrielsen).",
    timeNeeded: "2–3 tim",
    connects: ["Napoleon Bonaparte", "Napoleons militära arv", "Paris under andra världskriget"],
  },
  {
    id: "arc-triomphe",
    name: "Arc de Triomphe",
    address: "Place Charles de Gaulle",
    arrondissement: "8th",
    coords: [48.8738, 2.295],
    theme: "both",
    why: "Beställd av Napoleon 1806 för att hedra hans Grande Armée. 660 slag och 128 generaler är inhuggna i murarna. Den eviga lågan för den okände soldaten brinner därinunder — tänd av de Gaulle efter befrielsen 1944. Gå i hans fotspår nedför Champs-Élysées.",
    timeNeeded: "1 tim",
    connects: ["Napoleons Paris", "Befrielsen av Paris 1944"],
  },
  {
    id: "louvre",
    name: "Louvren",
    address: "Rue de Rivoli",
    arrondissement: "1st",
    coords: [48.8606, 2.3376],
    theme: "napoleon",
    why: "Napoleon förvandlade detta kungliga palats till världens främsta museum och fyllde det med konst från sina fälttåg. De egyptiska antikvisiteterna är direkt kopplade till hans egyptiska expedition 1798.",
    timeNeeded: "Minst en halv dag",
    connects: ["Napoleons Paris"],
  },
  {
    id: "vendome",
    name: "Vendômekolonnen",
    address: "Place Vendôme",
    arrondissement: "1st",
    coords: [48.8676, 2.3294],
    theme: "napoleon",
    why: "Gjuten av brons från 1 250 kanoner tagna vid Austerlitz. Reliefer slingrar sig uppför kolonnen och avbildar 1805 års fälttåg i detalj.",
    timeNeeded: "20 min (utomhus)",
    connects: ["Napoleons Paris", "Napoleons militära arv"],
  },
  {
    id: "pere-lachaise",
    name: "Père Lachaise",
    address: "16 Rue du Repos",
    arrondissement: "20th",
    coords: [48.8619, 2.3936],
    theme: "both",
    why: "Napoleon anlade denna kyrkogård 1804 som ett av Paris första moderna offentliga begravningsplatser. Spöklikt vackert — gravar tillhörande Chopin, Oscar Wilde, Jim Morrison, Édith Piaf och många motståndskämpar.",
    timeNeeded: "2 tim",
    connects: ["Napoleons Paris", "Franska Motståndsrörelsen i Paris"],
  },
  {
    id: "ecole-militaire",
    name: "École Militaire",
    address: "1 Place Joffre",
    arrondissement: "7th",
    coords: [48.852, 2.3045],
    theme: "napoleon",
    why: "Den militärakademi där Napoleon studerade och tog examen 1785 — uppgifterna säger att han klarade det på ett år i stället för tre. Fortfarande aktiv militärskola — endast exteriören kan beses. Alldeles bredvid Les Invalides och Champ de Mars.",
    timeNeeded: "20 min (exteriör)",
    connects: ["Napoleon Bonaparte"],
  },
  {
    id: "notre-dame",
    name: "Notre-Dame",
    address: "Île de la Cité",
    arrondissement: "4th",
    coords: [48.853, 2.3499],
    theme: "both",
    why: "Napoleon kröntes till kejsare här 1804. Överlevde andra världskriget eftersom von Choltitz vägrade förstöra den. Efter branden 2019 restaurerad och återöppnad december 2024.",
    timeNeeded: "1–2 tim",
    connects: ["Napoleon Bonaparte", "Befrielsen av Paris 1944"],
  },

  // WWII
  {
    id: "shoah",
    name: "Mémorial de la Shoah",
    address: "17 Rue Geoffroy-l'Asnier",
    arrondissement: "4th",
    coords: [48.8543, 2.3554],
    theme: "wwii",
    why: "Frankrikes viktigaste Förintelseminnesmärke. Namnmuren (76 000 judiska deporterade från Frankrike), graven för den okände judiske martyren, arkiv och ett gripande museum. Fri entré.",
    timeNeeded: "2–3 tim",
    connects: ["Tysk ockupation 1940–1944", "Paris under andra världskriget"],
  },
  {
    id: "vel-dhiv",
    name: "Vel' d'Hiv-minnesmärket",
    address: "8 Boulevard de Grenelle",
    arrondissement: "15th",
    coords: [48.8536, 2.2884],
    theme: "wwii",
    why: "Platsen för Vélodrome d'Hiver, där 13 000 judar hölls inlåsta inför deportation i juli 1942. Här höll Chirac 1995 sitt tal där han erkände Frankrikes ansvar. Enkelt och mäktigt.",
    timeNeeded: "30 min",
    connects: ["Tysk ockupation 1940–1944"],
  },
  {
    id: "pantheon",
    name: "Panthéon",
    address: "Place du Panthéon",
    arrondissement: "5th",
    coords: [48.8462, 2.3464],
    theme: "wwii",
    why: "Jean Moulin — Motståndsrörelsens store enande kraft — vilar här. Liksom Voltaire, Rousseau, Victor Hugo och Marie Curie. Magnifik neoklassisk arkitektur från 1700-talet.",
    timeNeeded: "1,5 tim",
    connects: ["Franska Motståndsrörelsen i Paris"],
  },
  {
    id: "meurice",
    name: "Hôtel Meurice",
    address: "228 Rue de Rivoli",
    arrondissement: "1st",
    coords: [48.8651, 2.3284],
    theme: "wwii",
    why: "Här kapitulerade den tyske militärguvernören general von Choltitz den 25 augusti 1944 — och beseglade Paris överlevnad. Numera ett lyxhotell; man kan promenera förbi eller ta en kaffe i lobbybaren.",
    timeNeeded: "15 min (förbipasserande)",
    connects: ["Befrielsen av Paris 1944"],
  },
  {
    id: "hotel-de-ville",
    name: "Hôtel de Ville",
    address: "Place de l'Hôtel de Ville",
    arrondissement: "4th",
    coords: [48.8566, 2.3522],
    theme: "wwii",
    why: "Här höll de Gaulle sitt berömda tal — 'Paris! Paris förorättat! Paris söndrat! Paris martyriserat! Men Paris befriat!' — den 25 augusti 1944.",
    timeNeeded: "30 min",
    connects: ["Befrielsen av Paris 1944"],
  },
  {
    id: "prefecture",
    name: "Polisprefekturen",
    address: "Île de la Cité",
    arrondissement: "4th",
    coords: [48.8549, 2.3473],
    theme: "wwii",
    why: "Här inleddes Parisupproret i augusti 1944 — poliser med koppling till Motståndsrörelsen intog byggnaden, hissade trikoloren och utlöste sex dagars gatustridigheter.",
    timeNeeded: "15 min (exteriör)",
    connects: ["Befrielsen av Paris 1944", "Franska Motståndsrörelsen i Paris"],
  },
];

export const parisSections: ParisSection[] = [
  {
    id: "overview",
    kicker: "Avsnitt P · Paris i historien",
    title: "En stad av imperium och minne",
    lead:
      "Paris är lager på lager av historia. För Nelson löper två av dessa lager djupast: Napoleons kejserliga stad — boulevarder, kolonner, plundringens museer — och de fyra åren 1940 till 1944 när hakkorsbaneret vajade från Eiffeltornet. Det här avsnittet är fältguiden.",
    body: [
      "Nästan allt man förknippar med 'klassiska Paris' bär Napoleons fingeravtryck: Arc de Triomphe, Vendômekolonnen, Rue de Rivoli, det omorganiserade Louvren, till och med den moderna gatunumreringen och Père Lachaise. Han styrde inte bara Europa — han byggde om huvudstaden för att se ut som världens huvudstad.",
      "Drygt ett sekel senare levde samma stad i 1 533 dagar under tysk ockupation. Hitlers enda utrikesresa var ett fyratimmars gryningsbesök i juni 1940. Vel' d'Hiv-razzia i juli 1942 lät fransk polis arrestera 13 000 av sina egna grannar. Och i augusti 1944 reste sig staden, de Gaulle promenerade på Champs-Élysées och general von Choltitz vägrade lyda ordern om att bränna allt.",
      "Läs vidare per tema, ta sedan kartan nedan och gå ut i staden.",
    ],
  },
  {
    id: "napoleon-bio",
    image: {
      src: "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=1600&auto=format&fit=crop&q=80",
      caption: "Les Invalides — Napoleons sista viloplats under den gyllene kupolen.",
    },
    kicker: "Kapitel I · Mannen",
    title: "Napoleon Bonaparte",
    lead: "1769–1821 · Styrde Frankrike 1799–1814, kortvarigt 1815 (De hundra dagarna).",
    body: [
      "Född den 15 augusti 1769 i Ajaccio på Korsika — ett år efter att Frankrike förvärvat ön från Genua. Korsikan till börden, fransmannen till bildning och ärelystnad. Han tog examen från École Militaire i Paris 1785 (byggnaden finns kvar — se kartan).",
      "Han steg genom franska revolutionens kaos, utmärkte sig vid belägringen av Toulon 1793 och blev general vid tjugofyra års ålder. Statskuppen den 18 Brumaire (9 november 1799) gjorde honom till förste konsul. År 1804 krönte han sig till kejsare i Notre-Dame — han tog kronan ur påve Pius VII:s händer och satte den på sitt eget huvud, ett avsiktligt budskap om att hans makt kom från honom själv, inte kyrkan.",
      "Han skapade den napoleonska lagkodexen (fortfarande grundläggande i många länders rättssystem), byggde ett imperium över större delen av kontinentala Europa, omformade Paris totalt och vann de flesta av de dussintals stora slag han utkämpade.",
      "Efter den katastrofala invasionen av Ryssland 1812 vände turen. Koalitionen trängde tillbaka; Paris föll i mars 1814; Napoleon förvisades till Elba. Han flydde i februari 1815 under De hundra dagarna, besegrades avgörande vid Waterloo den 18 juni 1815 och förvisades till Saint Helena i södra Atlanten. Han dog där den 5 maj 1821, 51 år gammal.",
      "År 1840 fördes hans kvarlevor tillbaka till Frankrike i det storstilade Retour des Cendres. Han vilar nu i ett magnifikt sarkofag på Les Invalides — en av världens mest imponerande gravar.",
    ],
    pullQuote:
      "Omöjligt är ett ord som bara finns i dårarnas ordbok.",
    pullQuoteAttribution: "tillskriven Napoleon Bonaparte",
  },
  {
    id: "napoleon-paris",
    image: {
      src: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600&auto=format&fit=crop&q=80",
      caption: "Arc de Triomphe — Napoleons monument över Grande Armée.",
    },
    kicker: "Kapitel II · Huvudstaden",
    title: "Napoleons Paris",
    lead:
      "Napoleon föreställde sig Paris som världens huvudstad och satte sin vision i sten, järn och marmor. Det mesta som turister igenkänner som 'klassiska Paris' bär hans fingeravtryck.",
    body: [
      "När Napoleon kom till makten var Paris fortfarande till stor del en medeltida stad — smala gränder, bristfällig sanitet, ingen sammanhängande plan. Han föreställde sig breda triumfboulevarderna, magnifika monument och infrastruktur värdig ett kejsardöme. Han uppgavs ha sagt att han ville göra Paris till 'något fabulöst, något kolossalt, något som världen aldrig sett'.",
      "Arc de Triomphe beställdes 1806 för att hedra Grande Armée efter Austerlitz. Det tog trettio år att bygga; Napoleon såg aldrig den färdiga bågen. Vendômekolonnen uppfördes mellan 1806 och 1810 av nedsmält brons från 1 250 fiendekanoner tagna vid Austerlitz, med Trajanuskolonnen i Rom som förebild.",
      "Rue de Rivoli uppkallades efter hans seger över Österrike 1797 — dess enhetliga arkadliknande fasad ett avsiktligt uttryck för ordning, modernitet och kejserlig grandeur. La Madeleine beordrades omvandlas från kyrka till en äretemple för hans armé. Pont d'Iéna och Pont d'Austerlitz bär fortfarande namnen på hans största segrar.",
      "Han förvandlade Louvren från kungligt palats till världens främsta museum och fyllde det med konst — somliga skulle säga byte — från sina fälttåg. Den egyptiska samlingen är direkt kopplad till hans egyptiska expedition 1798. Han öppnade Père Lachaise 1804 som en modern, hygienisk kyrkogård utanför stadens centrum.",
      "Bortom monumenten: Canal de l'Ourcq förde friskt vatten till Paris, femton nya offentliga fontäner anlades och det moderna systemet för fasadnumrering infördes. Många projekt var ofullbordade när han föll — men Arc de Triomphe, Louvren, Père Lachaise och gatunätet bestod.",
    ],
  },
  {
    id: "napoleon-military",
    image: {
      src: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=1600&auto=format&fit=crop&q=80",
      caption: "Hôtel des Invalides — militärmuseet och imperiets långa skugga.",
    },
    kicker: "Kapitel III · Slagen",
    title: "Napoleons militära arv",
    lead:
      "Under sjutton år utkämpade Napoleon mer än sextio slag — och vann de allra flesta — och ritade om Europas karta.",
    body: [
      "Före Napoleon följde europeiska arméer stelnade 1600-talstaktiker. Han förändrade krigskonsten i grunden: hastighet och överraskning (hans arméer levde av landet och rörde sig snabbare än någon väntat); kårssystemet (självförsörjande kårer som kunde strida självständigt tills huvudstyrkan anlände); koncentration av kraft (att samla överväldigande styrka på en enda avgörande punkt); och psykologisk krigföring (han förstod att moral och momentum ofta var lika avgörande som antal).",
      "Austerlitz, den 2 december 1805 — hans mästerverk. Inför Rysslands och Österrikes samlade arméer låtsades han svaghet på sin högra flank, lockade fienden dit och slog sedan igenom deras försvagade centrum. Vendômekolonnen och Arc de Triomphe hedrar båda minnet av detta slag.",
      "Jena-Auerstedt, den 14 oktober 1806 — den preussiska armén krossad på en enda dag. Pont d'Iéna i Paris är uppkallad efter detta slag. Wagram, juli 1809 — över 300 000 soldater i strid; Österrike tvingades till freden i Schönbrunn.",
      "Ryssland, 1812 — den katastrofala vändpunkten. Han marscherade 600 000 man in i Ryssland; färre än 100 000 kom tillbaka. Ryssarna undvek avgörande slag, retirerade och brände Moskva för att frånta honom förnödenheter. Leipzig, oktober 1813 — det största slaget i europeisk historia före första världskriget; över 600 000 soldater, fyra dagar, avgörande koalitionsseger.",
      "Waterloo, den 18 juni 1815 — det sista slaget. Efter hemkomsten från Elba mötte han Wellingtons angloallierade armé och Blüchers preussare. Wellington höll Napoleon stången hela dagen tills preussiska förstärkningar anlände; den franska armén bröt samman. (Waterloo ligger i Belgien — vi stannar vid Lejonkullen på dag 11 på hemvägen.)",
      "Det mänskliga priset: uppskattningsvis 3–6 miljoner soldater dödade och möjligen ytterligare 3 miljoner civila. Frankrike förlorade en generation. År 1814 värvade han pojkar ner i 15-årsåldern.",
    ],
  },
  {
    id: "wwii-overview",
    image: {
      src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1600&auto=format&fit=crop&q=80",
      caption: "Parisertak — staden som genomlevde ockupationen.",
    },
    kicker: "Kapitel IV · 1940–1944",
    title: "Paris under andra världskriget",
    lead:
      "Från juni 1940 till augusti 1944 levde Paris under nazitysk ockupation — fyra år som lämnade djupa ärr i stadens minne och själ.",
    body: [
      "Tysklands invasion av Frankrike inleddes den 10 maj 1940 och kringgick Maginotlinjen via Ardennerskogen i ett djärvt pansargenombrott. Den franska armén, tagen på sängen, kollapsade med häpnadsväckande hastighet. I början av juni, med tyska styrkor nära inpå, flydde den franska regeringen från Paris. Den 13 juni 1940 förklarades Paris som 'öppen stad' — det vill säga franska styrkor skulle inte försvara den, för att skona den från förstörelse. Tyska trupper marscherade genom Arc de Triomphe och ned på Champs-Élysées den 14 juni 1940.",
      "Frankrike kapitulerade formellt den 22 juni 1940. Vapenstilleståndet undertecknades i samma järnvägsvagn som använts för den tyska kapitulationen 1918 — en avsiktlig förödmjukelse. Landet delades upp: en ockuperad zon (norra Frankrike, inklusive Paris) under direkt tyskt styre och en fri zon / Vichy-Frankrike i söder, styrt av det kollaboratöristiska regimen under marskalk Philippe Pétain.",
      "Ockupationen skapade både kollaboration och motstånd, ofta i samma stad — ibland i samma familj. Fransk polis verkställde ofta tyska order — mest ökänt under Vel' d'Hiv-razzian i juli 1942, då franska gendarmer greps över 13 000 judar. Samtidigt riskerade tusentals sina liv i motståndsrörelsens nätverk.",
      "Befrielsen kom i augusti 1944, efter D-dagslanding­arna den 6 juni 1944. När De allierade bröt ut ur Normandie reste sig Paris folk, och general Leclercs franska 2:a pansardivisionen rusade mot staden. Paris befriades den 25 augusti 1944. Charles de Gaulles promenad ned på Champs-Élysées dagen därpå blev en av 1900-talets mest ikoniska bilder.",
      "Frankrikes uppgörelse med ockupationen var lång och smärtsam. I decennier betonade den officiella berättelsen motståndet och tonade ned kollaborationen. Det dröjde till 1995 innan president Jacques Chirac formellt erkände den franska statens roll i deportationen av judar — ett historiskt ögonblick av nationellt sanningssägande.",
    ],
  },
  {
    id: "occupation",
    image: {
      src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1600&auto=format&fit=crop&q=80",
      caption: "En gammal parisisk gata — vardagslivet under skuggan.",
    },
    kicker: "Kapitel V · Vardagslivet",
    title: "Tysk ockupation 1940–1944",
    lead: "1 533 dagar under tyskt styre. Hur såg det faktiskt ut på gatorna?",
    body: [
      "Tyska soldater intog Paris den 14 juni 1940 i en kuslig stillhet. Staden var halvtom — miljontals parisare hade flytt söderut i invasionens kaos, l'Exode. Hitler själv flög till Paris den 23 juni 1940 för en kort gryningsvisit: Opéra Garnier, Eiffeltornet, Sacré-Cœur, Napoleons grav på Les Invalides. Han ska ha sagt: 'Det var drömmen i mitt liv att se Paris.' Han lämnade efter några timmar och återvände aldrig. Hakkorset vajade från Eiffeltornet.",
      "Vardagslivet präglades av brist, utegångsförbud och fruktan. Parisare måste vara inomhus klockan 23. Maten var hårt ransonerad — 1942 konsumerade den genomsnittlige parisaren ungefär hälften av förkrigstidens kalorier. Svarta marknader blomstrade. Alla bar legitimationshandlingar; vägspärrar var vanliga. Tyskarna beslagtog hotell och storstadsbyggnader (Hôtel Meurice blev tysk militärguvernörs högkvarter; Musée du Jeu de Paume användes för att sortera plundrad konst). Klockorna ställdes om till Berlintid.",
      "Förföljelsen av judar var det mörkaste kapitlet. Redan de första veckorna tvingades judar registrera sig, bära gula stjärnor och förbjöds från parker, restauranger, teatrar och vissa tunnelbanevagnar. Judiska affärer märktes ut och beslagtogs.",
      "Vel' d'Hiv-razzian, den 16–17 juli 1942 — på tyska order, men genomförd av fransk polis — innebar att mer än 13 150 judiska män, kvinnor och barn greps runt om i Paris i en enda operation. Familjerna fördes till Vélodrome d'Hiver i 15:e arrondissementet och hölls där i dagar under fruktansvärda förhållanden. Därifrån till transitläger (främst Drancy) och sedan Auschwitz-Birkenau. Färre än 100 vuxna överlevde. Vélodrome d'Hiver revs 1959; ett minnesmärke reser sig på platsen i dag.",
      "Paradoxalt nog upprätthöll Paris ett kulturliv. Teatrar, kaféer och biografer hölls öppna — tyskarna uppmuntrade detta som ett tecken på normalitet. Simone de Beauvoir och Jean-Paul Sartre skrev i Saint-Germain. Édith Piaf uppträdde för både franska arbetare och tyska soldater. Picasso stannade under hela ockupationen, delvis skyddad av sitt internationella rykte. Mot 1943–44 hårdnade ockupationen: STO tvingade franska män till arbete i Tyskland; repressalierna för motståndsaktioner blev brutala.",
    ],
  },
  {
    id: "resistance",
    image: {
      src: "https://images.unsplash.com/photo-1581262177000-8139a463e531?w=1600&auto=format&fit=crop&q=80",
      caption: "Panthéon — där Jean Moulins aska vilar bland republikens hjältar.",
    },
    kicker: "Kapitel VI · Underjorden",
    title: "Franska Motståndsrörelsen i Paris",
    lead:
      "Aldrig en enda organisation — en konstellation av nätverk, individer och rörelser förenade av övertygelsen att ockupation var oacceptabelt.",
    body: [
      "Den 18 juni 1940 — fyra dagar efter att tyska trupper intog Paris — sände en relativt okänd fransk general vid namn Charles de Gaulle ett upprop i BBC Radio från London. Nästan ingen hörde det då. Men under de följande åren blev '18 junis upprop' Motståndsrörelsens grundläggande myt. De Gaulle ledde Fria Frankrike från London och samordnade med brittisk underrättelsetjänst (SOE) för att stödja nätverken inne i Frankrike.",
      "Motståndsarbetet i Paris var splittrat, hemlighetfullt och farligt. Nätverk arbetade i celler om 5–10 personer som ofta inte kände till andra cellers medlemmar. Om en person greps och torterades kunde de bara avslöja en handfull andra. Verksamheten omfattade: underrättelseinhämtning (fotografering av tyska installationer, information smugglad till London); sabotage (skärning av telefonkablar, urspårning av tåg, förstöring av bränsleupplag); underjordisk press (Combat, Libération, Défense de la France); flyktvägar (hjälp till allierade flygare och judar att ta sig till Spanien eller Schweiz); och gömda förföljda personer, i synnerhet judiska barn.",
      "År 1942 var Motståndsrörelsen splittrad och uppsliten av interna stridigheter. De Gaulle skickade Jean Moulin tillbaka in i Frankrike för att förena de stora rörelserna under en enda samordnande struktur, Conseil National de la Résistance. Moulin var en tidigare prefekt som redan visat extraordinärt mod — när tyskarna försökte tvinga honom att underteckna ett dokument som gav senegalesiska franska trupper skulden för tyska illdåd vägrade han och försökte ta sitt eget liv hellre än att lyda. Han lyckades ena Motståndsrörelsen 1943, men förråddes, greps och torterades av Gestapo under Klaus Barbie i juni 1943. Han dog kort därefter utan att röja sina hemligheter. Hans aska vilar i Panthéon.",
      "Tusentals parisare riskerade sina liv för att gömma judiska familjer, i synnerhet barn. Efter Vel' d'Hiv-razzian gömde nätverk av präster, nunnor, bönder, lärare och vanliga medborgare barn i barnhem, kloster och privata hem — ofta med förfalskade dokument. Israel har erkänt tusentals fransmän som 'Rättfärdiga bland folken'.",
      "Kvinnor spelade en avgörande roll men förbisågs ofta i senare historieskrivning. De kunde röra sig friare än männen (som riskerade att tvångsrekryteras till arbete i Tyskland), vilket gjorde dem idealiska som kurirer, sambandspersoner och underrättelseoperatörer. Lucie Aubrac hjälpte sin man Raymond att fly från Gestapos fångenskap. Berty Albrecht var medgrundare av Combat-nätverket och dog i tysk fångenskap 1943. Madeleine Riffaud, en 20-årig student, mördade en tysk officer på en bro i Paris 1944.",
    ],
    pullQuote:
      "Frankrike har förlorat ett slag. Men Frankrike har inte förlorat kriget.",
    pullQuoteAttribution: "Charles de Gaulle, 18 juni 1940",
  },
  {
    id: "liberation",
    image: {
      src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1600&auto=format&fit=crop&q=80",
      caption: "Champs-Élysées mot Arc de Triomphe — rutten för de Gaulles marsch den 26 augusti 1944.",
    },
    kicker: "Kapitel VII · Augusti 1944",
    title: "Befrielsen av Paris",
    lead:
      "En av andra världskrigets mest dramatiska och känsloladdade händelser — en stad med fem miljoner invånare befriad efter 1 500 dagars ockupation.",
    body: [
      "Den 6 juni 1944 — D-dagen. De allierade landsteg på Normandies stränder. I veckor rasade brutala strider i häckarna och bocagen. I slutet av juli bröt amerikanerna igenom vid Avranches och svepte österut. I mitten av augusti var tyska styrkor i Frankrike på väg att krascha. Paris var inringat. De enda frågorna var när, hur våldsamt det skulle bli och — avgörande — vem som skulle komma dit först.",
      "Eisenhowers ursprungliga plan var att kringgå Paris — att befria det skulle innebära att föda fem miljoner människor och styra om resurser från framryckningen mot Tyskland. Men de Gaulle vägrade. Han förstod att om amerikanska styrkor befriade Paris kunde Frankrikes politiska framtid formas i Washington snarare än i Paris. Han behövde franska styrkor för att befria den franska huvudstaden och han behövde vara där personligen. Han pressade Eisenhower uthålligt. När Parisupproret började den 19 augusti gav Eisenhower äntligen vika och beordrade general Philippe Leclercs franska 2:a pansardivision att framrycka.",
      "Parisupproret, 19–25 augusti. Motståndsrörelsen hade förberett sig. Den 15 augusti strejkade tunnelbanearbetare, poliser och postanställda i Paris. Den 18–19 augusti restes barrikader runtom i staden — tusentals gatstenar rycktes upp, bilar vältes omkull, stenplattor stapelrades. Forces Françaises de l'Intérieur (FFI) intog polisprefekturen, Hôtel de Ville och senaten. Gatustrider rasade intensiva och blodiga. Ungefär 1 600 FFI-stridande och 2 400 civila dödades under upproret.",
      "Den tyske befälhavaren i Paris, general Dietrich von Choltitz, innehade Hitlers direkta order: om Paris inte kunde hållas skulle det förstöras. Eiffeltornet skulle sprängas. Notre-Dame, Louvren, broarna över Seinen — allt förberett för rivning. Den 25 augusti, med Leclercs stridsvagnar på gatorna och sin ställning hopplös, kapitulerade von Choltitz på Hôtel Meurice i stället för att verkställa förstörelseordern. Hans motiv är fortfarande omdebatterade: äkta moraliska betänkligheter, pragmatisk insikt om att kriget var förlorat, eller fruktan för att ställas inför rätta som krigsförbrytare. Oavsett anledningen — Paris överlevde. Hitler, då han fick nyheten om kapitulationen, ska ha skrikit: 'Brinner Paris?' Det gjorde det inte.",
      "Klockan 21:22 den 25 augusti undertecknade von Choltitz kapitulationen på polisprefekturen. Den kvällen och nästa morgon bröt Paris ut i jubel. Folkmassor strömmade ut på gatorna. Främlingar omfamnade och grät. Vin dök upp ur gömställen. Kyrkklockor ringde över hela staden — Notre-Dames klockor slog an tonen.",
      "Den 26 augusti 1944 ledde Charles de Gaulle en triumferande procession ned på Champs-Élysées från Arc de Triomphe till Notre-Dame. Miljoner stod längs gatan. I takt med att han gick — lång, samlad, vägrade att springa även då skott smällde — sände de Gaulle ett politiskt budskap lika mycket som ett symboliskt: Frankrike befriades inte av utomstående. Frankrike befriade sig självt. Promenaden ned på Champs-Élysées är en av 1900-talets mest ikoniska bilder.",
    ],
    pullQuote:
      "Paris! Paris förorättat! Paris söndrat! Paris martyriserat! Men Paris befriat!",
    pullQuoteAttribution: "Charles de Gaulle, 25 augusti 1944",
  },
];

export type ParisItineraryStop = {
  time: string;
  what: string;
  note?: string;
};

export const parisTwoDayItinerary: { day: string; theme: string; stops: ParisItineraryStop[] }[] = [
  {
    day: "Dag 1",
    theme: "Napoleons Paris",
    stops: [
      { time: "Morgon", what: "Les Invalides", note: "Napoleons grav + Musée de l'Armée" },
      { time: "Middag", what: "École Militaire & Pont d'Iéna", note: "Promenad via Champ de Mars" },
      { time: "Eftermiddag", what: "Louvren", note: "Egyptiska samlingarna + napoleonska gallerier" },
      { time: "Kväll", what: "Vendômekolonnen & promenad på Rue de Rivoli" },
    ],
  },
  {
    day: "Dag 2",
    theme: "Paris under andra världskriget",
    stops: [
      { time: "Morgon", what: "Mémorial de la Shoah" },
      { time: "Middag", what: "Île de la Cité → Notre-Dame → Hôtel de Ville", note: "Där de Gaulle höll sitt berömda tal" },
      { time: "Eftermiddag", what: "Promenad på Champs-Élysées", note: "Från Arc de Triomphe nedåt — tänk på den 26 augusti 1944" },
      { time: "Kväll", what: "Vel' d'Hiv-minnesmärket", note: "En stillsam, reflekterande avslutning på dagen" },
    ],
  },
];

export type ParisListing = {
  category: "neighbourhoods" | "museums" | "cafes" | "restaurants" | "shopping" | "hotels" | "daytrip";
  name: string;
  area?: string;
  note: string;
  wishList?: boolean;
  coords?: LatLng;
};

export const parisThingsToDo: ParisListing[] = [
  // Stadsdelar & promenader
  { category: "neighbourhoods", name: "8:e & 17:e arrondissementet", area: "Nordväst", note: "Lugnt, bostadspräglat, vackert — ingen turistträngsel. Höga haussmannska byggnader, lummiga gator, nära Parc Monceau." },
  { category: "neighbourhoods", name: "Parc Monceau", coords: [48.8800, 2.3092], note: "Kanske Paris vackraste park. Ornamentala järngrindar, dammar, neoklassiska lusthus, välklädda parisare med hundar." },
  { category: "neighbourhoods", name: "Rue Bonaparte", area: "6:e", coords: [48.8540, 2.3340], note: "Eleganta restauranger och barer, små konstgallerier, Paris äldsta bevarade kyrka. Stanna på café Bonaparte." },
  { category: "neighbourhoods", name: "Les Archives / Marais", area: "3:e & 4:e", coords: [48.8597, 2.3597], note: "Dolda trädgårdar, hundar på lösdrift, soliga parkbänkar, antikaffärer. Hem för Picassomuseet." },
  { category: "neighbourhoods", name: "Île Saint-Louis", coords: [48.8517, 2.3573], note: "En promenad runt denna lilla ö i Seinen — gamla gränder, antikvariatshandlar, glass, lugnare tempo." },
  { category: "neighbourhoods", name: "Palais Royals trädgårdar", coords: [48.8639, 2.3370], note: "Slå sig ner i en trädgårdsstol, läs en bok, betrakta parisarna. En av Paris mest underskattade platser." },

  // Museer
  { category: "museums", name: "Musée des Arts Décoratifs", coords: [48.8632, 2.3326], note: "Håll koll på deras tillfälliga utställningar — när det är en modeutställning är det ett måste." },
  { category: "museums", name: "Palais de Tokyo", coords: [48.8642, 2.2965], note: "Stadens främsta museum för samtidskonst, alltid intressanta utställningar, utmärkt museumshop." },
  { category: "museums", name: "Galeries d'Anatomie Comparée et de Paléontologie", coords: [48.8438, 2.3596], note: "Extraordinärt naturhistoriskt museum oförändrat sedan 1800-talet. Riktiga dinosaurieskelett, fotografering tillåten." },
  { category: "museums", name: "Musée Picasso", coords: [48.8598, 2.3625], note: "I det vackra Hôtel Salé i Marais. Oumbärligt — byggnaden ensam är värd besöket." },
  { category: "museums", name: "Musée Rodin", wishList: true, coords: [48.8553, 2.3160], note: "Skulpturmuseum i härlig trädgård. Alldeles bredvid Les Invalides — enkelt att kombinera med Napoleons grav." },

  // Kaféer
  { category: "cafes", name: "Stohrer", coords: [48.8649, 2.3477], note: "Paris äldsta konditori — öppnat 1730. Interiör som ett franskt 1700-talsslott. Rätt ställe för presenter att ta med hem." },
  { category: "cafes", name: "Buvette", coords: [48.8810, 2.3372], note: "Briljant för frukost eller brunch. Ägg, bär, granola, härliga bakverk. Rustik inredning." },
  { category: "cafes", name: "Le Pain Quotidien", note: "Ekologisk frukost och lunch. Underbara brödkorgar, långa gemensamma bord." },
  { category: "cafes", name: "La Palette", coords: [48.8556, 2.3370], note: "Klassisk bar med uteservering full av rosor på våren. Beställ en Saint-Germain fläderspritzing." },
  { category: "cafes", name: "Early June", wishList: true, note: "Kafé och lunchrestaurang med gästkockar. Missa inte kakan. Lantlig inredning." },
  { category: "cafes", name: "Dreamin' Man", wishList: true, note: "Litet kafé med hembakade godsaker. Sitt på pallar utomhus i solen." },
  { category: "cafes", name: "Gramme", wishList: true, note: "Frukostkafé med skålar och vackra smörgåsar, i det livliga Marais." },

  // Restauranger
  { category: "restaurants", name: "Cibus", coords: [48.8666, 2.3361], note: "Litet italienskt restaurang i ett underbart art nouveau-rum. Ingen hemsida — ring för att boka. Gömt pärla." },
  { category: "restaurants", name: "Chez Janou", coords: [48.8569, 2.3651], note: "Mysig, välkomnande bistro med fantastisk stämning och service. En klassiker." },
  { category: "restaurants", name: "Café Charlot", coords: [48.8627, 2.3618], note: "Bistrobar med solig uteservering, likgiltig personal, cool publik. Utmärkt för att se livet passera." },
  { category: "restaurants", name: "La Briciola", coords: [48.8628, 2.3625], note: "Paris bästa vedeldade pizza, runt hörnet från Café Charlot." },
  { category: "restaurants", name: "Clown Bar", coords: [48.8638, 2.3680], note: "Liten fransk restaurang med naturviner och eklektisk décor. Personalen kan sin vin — fråga." },
  { category: "restaurants", name: "L'As du Fallafel", coords: [48.8574, 2.3596], note: "Den legendariska falafelrestaurangen i Marais. Möjligen världens bästa falafel. Kö att vänta." },
  { category: "restaurants", name: "Mokonuts", coords: [48.8508, 2.3811], note: "Familjedriven lunchrestaurang. Liten men enastående meny, fantastiska viner, varm atmosfär." },
  { category: "restaurants", name: "Le Servan", coords: [48.8612, 2.3818], note: "Chic, alltid fullsatt restaurang. Enkla, vackert säsongsanpassade rätter. Drivs av två systrar — franskt kök med asiatisk inspiration." },
  { category: "restaurants", name: "Ladurée Bonaparte", coords: [48.8525, 2.3343], note: "Tesalong i kinesiskinspirerad miljö på Rue Bonaparte. Missa inte rosgebäcken." },
  { category: "restaurants", name: "Café de l'Industrie", coords: [48.8551, 2.3717], note: "Stor, prisvärd bistro med klassisk fransk husmanskost. Perfekt för ett större sällskap." },
  { category: "restaurants", name: "Lolo Bistrot", wishList: true, note: "Nyöppnat. Lunch och middag, maten ser enastående ut. Kolla deras Instagram." },
  { category: "restaurants", name: "Sauvage", wishList: true, note: "Trendigt vinbar och restaurang med klassiska småätter och naturviner." },

  // Shopping
  { category: "shopping", name: "L'Objet qui parle", coords: [48.8826, 2.3398], note: "Litet kaotiskt antikvitetshandlar fullastat med fransk industriell décor, café-au-lait-skålar och omoståndbara saker." },
  { category: "shopping", name: "Le Bon Marché", coords: [48.8516, 2.3243], note: "Paris vackraste lyxvaruhus. Missa inte matavdelningen — inklusive en hel vägg av exklusivt vatten." },
  { category: "shopping", name: "Bien", note: "Helt ekologisk livsmedelsbutik i Marais — mellanmål, franska yoghurtar, vackra grönsaker, naturliga skönhetsprodukter." },
  { category: "shopping", name: "Marché aux Puces de Vanves", coords: [48.8253, 2.3038], note: "Loppmarknad med antikviteter och vintage. Inte billigt men alltid värt det. Parisarna dricker rödvin här på lördagsmorgnar. Pruta." },
  { category: "shopping", name: "Merci", coords: [48.8598, 2.3686], note: "Trendigt konceptsstore med inredning, mode och ett kafé. Fullt av turister och saker man måste ha." },
  { category: "shopping", name: "Mamzelle Swing", note: "Välkurerad vintageboutique med fokus på 1940- och 1950-talsplagg." },
  { category: "shopping", name: "Astier de Villatte", coords: [48.8639, 2.3375], note: "Elegant vit fransk keramik, sålt i en vacker butik. Att bara vandra runt i lokalen ger tillräcklig inspiration för dagen." },
  { category: "shopping", name: "Mamie Blue", area: "Montmartre", note: "Vintagebutik med lite extra." },
  { category: "shopping", name: "Pompon", area: "St Paul", note: "Antika blusar och välbevarade klänningar för den kräsne köparen." },
  { category: "shopping", name: "Episode", note: "Bra budgetvintage. Jeans, vita blusar; leta i källaren efter utvalda plagg under 50 €." },
  { category: "shopping", name: "Buly", coords: [48.8552, 2.3344], note: "200-årig apoteksboutique nära Seinen — utsökt förpackning, naturliga skönhetsprodukter. Nästan överväldigande vackert." },
  { category: "shopping", name: "Paraboot femme", area: "Rue de Rivoli", coords: [48.8631, 2.3429], note: "Klassisk fransk skomaker — boutique på Rue de Rivoli." },

  // Hotell
  { category: "hotels", name: "Grand Pigalle", coords: [48.8810, 2.3373], note: "Perfekt litet hotell i Pigalle. Kompakta rum, fantastisk atmosfär, bekväma sängar." },
  { category: "hotels", name: "Hotel Grand Amour", coords: [48.8731, 2.3559], note: "Hippt, underbart kaotiskt hotell med karaktärsfulla rum och en vacker innergård." },
  { category: "hotels", name: "Hotel Panache", coords: [48.8731, 2.3439], note: "Litet och mysigt med fotogeniska rum, god frukost, barnvänligt. (Vi bor här.)" },

  // Dagsutflykt
  { category: "daytrip", name: "Versailles", note: "En pendeltågsresa bort. Den ultimata Marie Antoinette-upplevelsen — palats, trädgårdar, får på markerna. Ta med picknick. Heldagsutflykt som känns som ett filmset." },
];

export const categoryLabels: Record<ParisListing["category"], { label: string; emoji: string }> = {
  neighbourhoods: { label: "Stadsdelar", emoji: "🏙️" },
  museums: { label: "Museer", emoji: "🏛️" },
  cafes: { label: "Kaféer", emoji: "🥐" },
  restaurants: { label: "Restauranger", emoji: "🍽️" },
  shopping: { label: "Shopping", emoji: "🛍️" },
  hotels: { label: "Hotell", emoji: "🏨" },
  daytrip: { label: "Dagsutflykt", emoji: "🚂" },
};

// Per-category content colors with light + dark variants. Dark variants are
// lifted-lightness equivalents so each category stays distinguishable on the
// cocoa-paper background.
export const parisListingColor: Record<
  "light" | "dark",
  Record<ParisListing["category"], string>
> = {
  light: {
    neighbourhoods: "#2d5a3d",
    museums:        "#1a3a5a",
    cafes:          "#94612b",
    restaurants:    "#8b1a1a",
    shopping:       "#5a2a5a",
    hotels:         "#7a5a1a",
    daytrip:        "#5a3a1a",
  },
  dark: {
    neighbourhoods: "#7ba88a",
    museums:        "#7a9bb8",
    cafes:          "#d4a070",
    restaurants:    "#d97a5a",
    shopping:       "#b88ab8",
    hotels:         "#c8a85a",
    daytrip:        "#a89880",
  },
};
