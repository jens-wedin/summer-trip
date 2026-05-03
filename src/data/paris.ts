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
      caption: "Arc de Triomphe — Napoleon's monument to the Grande Armée.",
    },
    kicker: "Chapter II · The Capital",
    title: "Napoleon's Paris",
    lead:
      "Napoleon imagined Paris as the capital of the world, and backed the vision with stone, iron, and marble. Most of what tourists recognize as 'classic Paris' has his fingerprints on it.",
    body: [
      "When Napoleon came to power, Paris was still largely a medieval city — narrow streets, poor sanitation, no coherent plan. He envisioned wide triumphal boulevards, grand monuments, and infrastructure worthy of an empire. He said he wanted Paris to become 'something fabulous, something colossal, something unknown before our time.'",
      "The Arc de Triomphe was commissioned in 1806 to honour the Grande Armée after Austerlitz. It took thirty years to complete; Napoleon never saw the finished arch. The Vendôme Column was built between 1806 and 1810 from the melted-down bronze of 1,250 enemy cannons captured at Austerlitz, modelled on Trajan's Column in Rome.",
      "Rue de Rivoli was named after his 1797 victory over Austria — its arcaded uniform façade a deliberate statement of order, modernity, imperial grandeur. La Madeleine was ordered converted from a church into a Temple of Glory to honour his army. Pont d'Iéna and Pont d'Austerlitz still bear the names of his greatest victories.",
      "He transformed the Louvre from a royal palace into the world's greatest museum and filled it with art (some would say loot) from his campaigns. The Egyptian collection is directly linked to his 1798 Egyptian expedition. He opened Père Lachaise in 1804 as a modern, hygienic cemetery outside the city centre.",
      "Beyond monuments: the Canal de l'Ourcq brought fresh water to Paris, fifteen new public fountains, and the modern system of numbering buildings. Many projects were unfinished at his fall — but the Arc, the Louvre, Père Lachaise, and the street grid endured.",
    ],
  },
  {
    id: "napoleon-military",
    image: {
      src: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=1600&auto=format&fit=crop&q=80",
      caption: "Hôtel des Invalides — military museum and the long shadow of empire.",
    },
    kicker: "Chapter III · The Battles",
    title: "Napoleon's Military Legacy",
    lead:
      "Over seventeen years, Napoleon fought more than sixty battles — winning the vast majority — and reshaped the map of Europe.",
    body: [
      "Before Napoleon, European armies followed rigid 17th-century tactics. He changed warfare fundamentally: speed and surprise (his armies lived off the land, moving faster than anyone expected); the corps system (self-sufficient corps that could fight independently until the main force arrived); concentration of force (massing overwhelming power at a single decisive point); and psychological warfare (he understood morale and momentum were often as decisive as numbers).",
      "Austerlitz, December 2, 1805 — his masterpiece. Facing the combined armies of Russia and Austria, he feigned weakness on his right flank, lured the enemy in, then smashed through their weakened centre. The Vendôme Column and Arc de Triomphe both commemorate it.",
      "Jena-Auerstedt, October 14, 1806 — the Prussian army destroyed in a single day. The Pont d'Iéna in Paris is named after this battle. Wagram, July 1809 — over 300,000 soldiers engaged; Austria forced into the Peace of Schönbrunn.",
      "Russia, 1812 — the catastrophic turning point. He marched 600,000 men into Russia; fewer than 100,000 came back. The Russians refused pitched battle, retreated, and burnt Moscow to deny him supplies. Leipzig, October 1813 — the largest battle in European history before WWI; over 600,000 soldiers, four days, decisive Coalition victory.",
      "Waterloo, June 18, 1815 — the final battle. After his return from Elba, he faced Wellington's Anglo-allied army and Blücher's Prussians. Wellington held off Napoleon all day until Prussian reinforcements arrived; the French army broke. (Waterloo is in Belgium — we're stopping at the Lion's Mound on Day 11 on the way home.)",
      "Human cost: an estimated 3–6 million soldiers killed and possibly 3 million more civilians. France lost a generation. By 1814 he was conscripting boys as young as 15.",
    ],
  },
  {
    id: "wwii-overview",
    image: {
      src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1600&auto=format&fit=crop&q=80",
      caption: "Paris rooftops — the city that lived through occupation.",
    },
    kicker: "Chapter IV · 1940–1944",
    title: "Paris in WWII",
    lead:
      "From June 1940 to August 1944, Paris lived under Nazi German occupation — four years that left deep scars on the city's memory and soul.",
    body: [
      "Germany's invasion of France began on May 10, 1940, bypassing the Maginot Line through the Ardennes forest in a daring armoured thrust. The French army, caught off guard, collapsed with stunning speed. By early June, with German forces closing in, the French government fled Paris. On June 13, 1940, Paris was declared an 'open city' — meaning French forces would not defend it, to spare it from destruction. German troops marched through the Arc de Triomphe and down the Champs-Élysées on June 14, 1940.",
      "France formally surrendered on June 22, 1940. The armistice was signed in the same railway carriage used for the German surrender in 1918 — a deliberate humiliation. The country was split: an Occupied Zone (north, including Paris) directly controlled by Germany, and a Free Zone / Vichy France in the south, governed by the collaborationist regime under Marshal Philippe Pétain.",
      "The occupation produced both collaboration and resistance, often within the same city — sometimes the same family. The French police often enforced German orders — most notoriously during the Vel' d'Hiv Roundup of July 1942, when French gendarmes arrested over 13,000 Jews. At the same time, thousands risked their lives in resistance networks.",
      "Liberation came in August 1944, following the D-Day landings on June 6, 1944. As Allied forces broke out of Normandy, the people of Paris rose up, and General Leclerc's French 2nd Armored Division raced to the city. Paris was liberated on August 25, 1944. Charles de Gaulle's walk down the Champs-Élysées the following day became one of the defining images of the 20th century.",
      "France's reckoning with the occupation was slow and painful. For decades, the official narrative emphasized resistance and minimized collaboration. It was not until 1995 that President Jacques Chirac formally acknowledged the French state's role in the deportation of Jews — a historic moment of national truth-telling.",
    ],
  },
  {
    id: "occupation",
    image: {
      src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1600&auto=format&fit=crop&q=80",
      caption: "An old Parisian street — daily life under shadow.",
    },
    kicker: "Chapter V · Daily Life",
    title: "German Occupation 1940–1944",
    lead: "1,533 days under German rule. What did that actually look like on the streets?",
    body: [
      "German soldiers entered Paris on June 14, 1940, in an eerie calm. The city was half-empty — millions of Parisians had fled south in the chaos of the invasion, l'Exode. Hitler himself flew to Paris on June 23, 1940, for a brief dawn tour: the Opéra Garnier, the Eiffel Tower, Sacré-Cœur, Napoleon's tomb at Les Invalides. He reportedly said: 'It was the dream of my life to see Paris.' He left after a few hours and never returned. The swastika flew from the Eiffel Tower.",
      "Daily life was defined by scarcity, curfews, and fear. Parisians had to be off the streets by 11pm. Food was severely rationed — by 1942 the average Parisian consumed roughly half the pre-war calories. Black markets flourished. Everyone carried identity papers; checkpoints were common. Germans seized hotels and grand buildings (the Hôtel Meurice became headquarters of the German military governor; the Musée du Jeu de Paume was used to sort looted art). Clocks were moved to Berlin time.",
      "The persecution of Jews was the darkest chapter. From the first weeks, Jews were required to register, wear yellow stars, and were banned from parks, restaurants, theatres, certain metro cars. Jewish businesses were marked and seized.",
      "The Vel' d'Hiv Roundup, July 16–17, 1942 — under German orders, but carried out by French police — saw more than 13,150 Jewish men, women, and children arrested across Paris in a single operation. Families were taken to the Vélodrome d'Hiver in the 15th arrondissement and held for days in horrific conditions. From there, transit camps (primarily Drancy) and then Auschwitz-Birkenau. Fewer than 100 adults survived. The Vel' d'Hiv was demolished in 1959; a memorial stands on the site today.",
      "Paradoxically, Paris kept a cultural life. Theatres, cafés, and cinemas stayed open — the Germans encouraged this as a sign of normalcy. Simone de Beauvoir and Jean-Paul Sartre wrote in Saint-Germain. Édith Piaf performed for both French workers and German soldiers. Picasso stayed throughout, protected partly by his international fame. By 1943–44 the occupation became harsher: the STO forced French men into labour in Germany; reprisals for Resistance actions became brutal.",
    ],
  },
  {
    id: "resistance",
    image: {
      src: "https://images.unsplash.com/photo-1581262177000-8139a463e531?w=1600&auto=format&fit=crop&q=80",
      caption: "The Panthéon — where Jean Moulin's ashes rest among the Republic's heroes.",
    },
    kicker: "Chapter VI · The Underground",
    title: "French Resistance in Paris",
    lead:
      "Never a single organization — a constellation of networks, individuals, and movements united by the conviction that occupation was not acceptable.",
    body: [
      "On June 18, 1940 — four days after German troops entered Paris — a relatively unknown French general named Charles de Gaulle broadcast an appeal on BBC Radio from London. Almost nobody heard it at the time. But over the following years, the 'Appeal of June 18' became the founding myth of the Resistance. De Gaulle led the Free French Forces from London, coordinating with British intelligence (SOE) to support networks inside France.",
      "Resistance work in Paris was fragmented, secretive, and dangerous. Networks operated in cells of 5–10 people who often didn't know members of other cells. If one person was captured and tortured, they could only betray a handful of others. Activities: intelligence gathering (photographing German installations, smuggling info to London); sabotage (cutting telephone cables, derailing trains, destroying fuel depots); underground press (Combat, Libération, Défense de la France); escape networks (helping Allied airmen and Jews cross to Spain or Switzerland); hiding persecuted people, especially Jewish children.",
      "By 1942 the Resistance was fragmented and quarrelling internally. De Gaulle sent Jean Moulin back into France to unify the major movements under a single coordinating structure, the Conseil National de la Résistance. Moulin was a former prefect who had already shown extraordinary courage — when the Germans tried to force him to sign a document blaming Senegalese French troops for German atrocities, he refused and tried to kill himself rather than comply. He successfully unified the Resistance in 1943, but was betrayed, captured, and tortured by the Gestapo under Klaus Barbie in June 1943. He died shortly after, without revealing his secrets. His ashes rest in the Panthéon.",
      "Thousands of Parisians risked their lives to hide Jewish families, particularly children. After the Vel' d'Hiv Roundup, networks of priests, nuns, farmers, teachers, and ordinary citizens hid children in orphanages, convents, and private homes — often forging false documents. Israel has recognized thousands of French people as 'Righteous Among the Nations.'",
      "Women played a crucial role but were often overlooked in later histories. They could move more freely than men (who risked conscription for German labour), making them ideal couriers, liaisons, and intelligence operatives. Lucie Aubrac helped her husband Raymond escape from Gestapo custody. Berty Albrecht co-founded the Combat network and died in German custody in 1943. Madeleine Riffaud, a 20-year-old student, assassinated a German officer on a bridge in Paris in 1944.",
    ],
    pullQuote:
      "France has lost a battle. But France has not lost the war.",
    pullQuoteAttribution: "Charles de Gaulle, June 18, 1940",
  },
  {
    id: "liberation",
    image: {
      src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1600&auto=format&fit=crop&q=80",
      caption: "Champs-Élysées toward the Arc de Triomphe — the route of de Gaulle's August 26, 1944 march.",
    },
    kicker: "Chapter VII · August 1944",
    title: "Liberation of Paris",
    lead:
      "One of the most dramatic and emotional events of WWII — a city of five million freed after 1,500 days of occupation.",
    body: [
      "June 6, 1944 — D-Day. Allied forces landed on the beaches of Normandy. For weeks, brutal fighting raged in the hedgerows and bocage. By late July the Americans broke through at Avranches and began sweeping east. By mid-August, German forces in France were collapsing. Paris was encircled. The only questions were when, how violent it would be, and crucially: who would get there first?",
      "Eisenhower's original plan was to bypass Paris — liberating it would mean feeding five million people and divert resources from the advance into Germany. But de Gaulle refused. He understood that if American forces liberated Paris, France's political future might be shaped in Washington rather than Paris. He needed French forces to liberate the French capital, and he needed to be there in person. He pressured Eisenhower relentlessly. When the Paris uprising began on August 19, Eisenhower finally relented and ordered General Philippe Leclerc's French 2nd Armored Division to advance.",
      "The Paris Uprising, August 19–25. The Resistance had been preparing. On August 15, Paris metro workers, police, and postal workers struck. On August 18–19, barricades went up across the city — thousands of cobblestones torn from streets, cars overturned, paving stones stacked. The Forces Françaises de l'Intérieur (FFI) seized the Prefecture of Police, the Hôtel de Ville, the Senate. Street fighting was intense and bloody. Roughly 1,600 FFI fighters and 2,400 civilians were killed in the uprising.",
      "The German commander of Paris, General Dietrich von Choltitz, held Hitler's direct orders: if Paris could not be held, it was to be destroyed. The Eiffel Tower was to be blown up. Notre-Dame, the Louvre, the bridges over the Seine — all prepared for demolition. On August 25, with Leclerc's tanks in the streets and his position hopeless, von Choltitz surrendered at the Hôtel Meurice rather than carry out the destruction order. His motives remain debated: genuine moral scruple, pragmatic awareness that the war was lost, or fear of being tried as a war criminal. Whatever the reason — Paris survived. Hitler, receiving news of the surrender, reportedly screamed: 'Is Paris burning?' It was not.",
      "At 9:22pm on August 25, von Choltitz signed the surrender at the Prefecture of Police. That evening and the next morning, Paris erupted in joy. Crowds flooded the streets. Strangers embraced and wept. Wine appeared from hiding places. Church bells rang across the city — the bells of Notre-Dame rang first.",
      "On August 26, 1944, Charles de Gaulle led a triumphant procession down the Champs-Élysées from the Arc de Triomphe to Notre-Dame. Millions lined the streets. As he walked — tall, composed, refusing to run even when shots rang out — de Gaulle made a political statement as much as a symbolic one: France was not liberated by outsiders. France had liberated itself. The walk down the Champs-Élysées is one of the defining images of the 20th century.",
    ],
    pullQuote:
      "Paris! Paris outraged! Paris broken! Paris martyred! But Paris liberated!",
    pullQuoteAttribution: "Charles de Gaulle, August 25, 1944",
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
  // Neighbourhoods & walks
  { category: "neighbourhoods", name: "8th & 17th arrondissement", area: "Northwest", note: "Quiet, residential, beautiful — none of the tourist crush. Tall Haussmann buildings, leafy streets, easy access to Parc Monceau." },
  { category: "neighbourhoods", name: "Parc Monceau", coords: [48.8800, 2.3092], note: "Perhaps the most beautiful park in Paris. Ornate iron gates, ponds, neoclassical follies, well-dressed Parisians with dogs." },
  { category: "neighbourhoods", name: "Rue Bonaparte", area: "6th", coords: [48.8540, 2.3340], note: "Elegant restaurants and bars, small art galleries, Paris's oldest surviving church. Stop at café Bonaparte." },
  { category: "neighbourhoods", name: "Les Archives / Marais", area: "3rd & 4th", coords: [48.8597, 2.3597], note: "Hidden gardens, dogs running free, sunny park benches, antique shops. Home to the Picasso Museum." },
  { category: "neighbourhoods", name: "Île Saint-Louis", coords: [48.8517, 2.3573], note: "A stroll around this little island in the Seine — old streets, antiquarian bookshops, ice cream, slower pace." },
  { category: "neighbourhoods", name: "Palais Royal Gardens", coords: [48.8639, 2.3370], note: "Sit in a garden chair, read a book, watch Parisians. One of Paris's most underrated spots." },

  // Museums
  { category: "museums", name: "Musée des Arts Décoratifs", coords: [48.8632, 2.3326], note: "Watch their temporary exhibitions — when there's a fashion show on, unmissable." },
  { category: "museums", name: "Palais de Tokyo", coords: [48.8642, 2.2965], note: "Premier contemporary art museum, always-interesting exhibitions, excellent gift shop." },
  { category: "museums", name: "Galeries d'Anatomie Comparée et de Paléontologie", coords: [48.8438, 2.3596], note: "Extraordinary natural history museum unchanged since the 19th century. Real dinosaur skeletons, photography allowed." },
  { category: "museums", name: "Musée Picasso", coords: [48.8598, 2.3625], note: "In the beautiful Hôtel Salé in the Marais. Essential — the building alone is worth it." },
  { category: "museums", name: "Musée Rodin", wishList: true, coords: [48.8553, 2.3160], note: "Sculpture museum in gorgeous grounds. Right next to Les Invalides — easy combo with Napoleon's tomb." },

  // Cafés
  { category: "cafes", name: "Stohrer", coords: [48.8649, 2.3477], note: "Paris's oldest pâtisserie — opened 1730. Interior like an 18th-century French castle. The place for gifts to bring home." },
  { category: "cafes", name: "Buvette", coords: [48.8810, 2.3372], note: "Brilliant for breakfast or brunch. Eggs, berries, granola, lovely pastries. Rustic interior." },
  { category: "cafes", name: "Le Pain Quotidien", note: "Organic breakfast and lunch. Wonderful bread baskets, long communal tables." },
  { category: "cafes", name: "La Palette", coords: [48.8556, 2.3370], note: "Classic bar with an outdoor terrace full of roses in spring. Order a Saint-Germain elderflower spritzer." },
  { category: "cafes", name: "Early June", wishList: true, note: "Café and light restaurant with visiting guest chefs. Don't miss the cake. Country-style interior." },
  { category: "cafes", name: "Dreamin' Man", wishList: true, note: "Small coffee shop with home baking. Sit on stools outside in the sun." },
  { category: "cafes", name: "Gramme", wishList: true, note: "Breakfast café with bowls and beautiful open sandwiches, in the lively Marais." },

  // Restaurants
  { category: "restaurants", name: "Cibus", coords: [48.8666, 2.3361], note: "Tiny Italian restaurant in a wonderful Art Nouveau space. No website — call to book. Hidden gem." },
  { category: "restaurants", name: "Chez Janou", coords: [48.8569, 2.3651], note: "Cosy, welcoming bistro with great atmosphere and service. A classic." },
  { category: "restaurants", name: "Café Charlot", coords: [48.8627, 2.3618], note: "Bistro-bar with sunny terrace, indifferent staff, cool crowd. Great for watching the world go by." },
  { category: "restaurants", name: "La Briciola", coords: [48.8628, 2.3625], note: "Paris's best wood-fired pizza, around the corner from Café Charlot." },
  { category: "restaurants", name: "Clown Bar", coords: [48.8638, 2.3680], note: "Small French restaurant with natural wines and eclectic décor. Staff know their wine — ask." },
  { category: "restaurants", name: "L'As du Fallafel", coords: [48.8574, 2.3596], note: "The legendary falafel bar in the Marais. Possibly the best falafel in the world. Queue expected." },
  { category: "restaurants", name: "Mokonuts", coords: [48.8508, 2.3811], note: "Family-run lunch restaurant. Small but extraordinary menu, fantastic wines, warm atmosphere." },
  { category: "restaurants", name: "Le Servan", coords: [48.8612, 2.3818], note: "Chic, always-full restaurant. Simple, beautifully seasonal dishes. Run by two sisters — French cooking with Asian influence." },
  { category: "restaurants", name: "Ladurée Bonaparte", coords: [48.8525, 2.3343], note: "Tearoom in a Chinese-inspired setting on Rue Bonaparte. Don't miss the rose pastries." },
  { category: "restaurants", name: "Café de l'Industrie", coords: [48.8551, 2.3717], note: "Large, affordable bistro with classic French comfort food. Perfect for a big group." },
  { category: "restaurants", name: "Lolo Bistrot", wishList: true, note: "Recently opened. Lunch and dinner, food looks extraordinary. Check their Instagram." },
  { category: "restaurants", name: "Sauvage", wishList: true, note: "Trendy wine bar and restaurant with classic small plates and natural wines." },

  // Shopping
  { category: "shopping", name: "L'Objet qui parle", coords: [48.8826, 2.3398], note: "Small chaotic antique shop packed with French industrial décor, café-au-lait bowls, irresistible things." },
  { category: "shopping", name: "Le Bon Marché", coords: [48.8516, 2.3243], note: "Paris's most beautiful luxury department store. Don't miss the food hall — including a wall of fancy water." },
  { category: "shopping", name: "Bien", note: "Fully organic food shop in the Marais — snacks, French yoghurts, beautiful vegetables, natural beauty products." },
  { category: "shopping", name: "Marché aux Puces de Vanves", coords: [48.8253, 2.3038], note: "Flea market with antiques and vintage. Not cheap but always worth it. Parisians drink red wine here on Saturday mornings. Haggle." },
  { category: "shopping", name: "Merci", coords: [48.8598, 2.3686], note: "Trendy concept store with interior design, fashion, and a café. Full of tourists and must-have things." },
  { category: "shopping", name: "Mamzelle Swing", note: "Well-curated vintage boutique, focus on 1940s and 1950s clothing." },
  { category: "shopping", name: "Astier de Villatte", coords: [48.8639, 2.3375], note: "Elegant white French ceramic tableware, sold in a beautiful shop. Wandering the space is enough inspiration for the day." },
  { category: "shopping", name: "Mamie Blue", area: "Montmartre", note: "Vintage shop with something a little extra." },
  { category: "shopping", name: "Pompon", area: "St Paul", note: "Antique blouses and well-preserved dresses for the discerning buyer." },
  { category: "shopping", name: "Episode", note: "Good budget vintage. Jeans, white blouses; dig in the basement for selected pieces under 50€." },
  { category: "shopping", name: "Buly", coords: [48.8552, 2.3344], note: "200-year-old apotheque near the Seine — exquisite packaging, natural beauty products. Almost overwhelmingly beautiful." },
  { category: "shopping", name: "Paraboot femme", area: "Rue de Rivoli", coords: [48.8631, 2.3429], note: "Classic French shoemaker — boutique on Rue de Rivoli." },

  // Hotels
  { category: "hotels", name: "Grand Pigalle", coords: [48.8810, 2.3373], note: "Perfect small hotel in Pigalle. Compact rooms, great atmosphere, comfortable beds." },
  { category: "hotels", name: "Hotel Grand Amour", coords: [48.8731, 2.3559], note: "Hip, wonderfully chaotic hotel with characterful rooms and a beautiful courtyard." },
  { category: "hotels", name: "Hotel Panache", coords: [48.8731, 2.3439], note: "Small and cosy with photogenic rooms, good breakfast, family-friendly. (We're staying here.)" },

  // Day trip
  { category: "daytrip", name: "Versailles", note: "One suburban train ride away. The ultimate Marie Antoinette experience — palace, gardens, sheep on the grounds. Pack a picnic. Full-day excursion that feels like a film set." },
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
    cafes:          "#a06a30",
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
