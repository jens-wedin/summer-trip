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
    kicker: "Section N · Normandy",
    title: "The Longest Day",
    lead:
      "On June 6, 1944, more than 156,000 Allied soldiers crossed the English Channel and forced their way ashore on five Normandy beaches. It was the largest seaborne invasion in history, the moment the war in the West turned, and the beginning of the end for Nazi-occupied Europe. Eighty-two years later, the bunkers, beaches, and cemeteries are still there — and we are staying three nights in the one Norman town that survived intact: Bayeux.",
    body: [
      "Bayeux was liberated on June 7, 1944 — one day after the landings. Because it fell so quickly, it escaped the bombing that flattened most of Normandy. Its medieval centre, half-timbered houses, and Romanesque-Gothic cathedral are essentially as William the Conqueror's contemporaries would have recognized them. Charles de Gaulle gave his first speech on liberated French soil here on June 14, 1944.",
      "From Bayeux you can drive west to Omaha, Pointe du Hoc, and the American Cemetery; east to Gold, Arromanches, Juno, Sword, and Pegasus Bridge; or inland to the Mémorial de Caen and Ste-Mère-Église. We're booked on the Bayeux Shuttle's British/American D-Day Experience on Friday June 26 — see the tour schedule below.",
      "What follows is the field guide: the timeline, the German defences (and why they failed), the airborne operations that opened the night, the five beaches in order, Omaha in detail, and the six weeks of bocage fighting that connect the beaches to the liberation of Paris.",
    ],
    pullQuote:
      "The first 24 hours of the invasion will be decisive. For the Allies, as well as Germany, it will be the longest day.",
    pullQuoteAttribution: "Field Marshal Erwin Rommel, May 1944",
  },
  {
    id: "german-defences",
    image: {
      src: "https://images.unsplash.com/photo-1667505078203-87883b974e37?w=1600&auto=format&fit=crop&q=80",
      caption: "A surviving WWII concrete bunker — part of the Atlantic Wall fortifications.",
    },
    kicker: "Chapter I · The Other Side",
    title: "Why the Atlantic Wall Failed",
    lead:
      "Germany was not unprepared. The Atlantic Wall was the largest construction project in history. Rommel had worked himself to exhaustion strengthening the beaches. What undid them was a paralysed command structure, a fatal strategic disagreement, a Führer who refused to release his reserves, and an Allied deception so brilliant that the Germans held back their best troops waiting for an invasion that never came.",
    body: [
      "From 1942 onward, Germany poured resources into the Atlantic Wall — a chain of fortifications stretching 2,000 miles from Norway to the Pyrenees. Seventeen million cubic metres of concrete. 1.2 million tons of steel. By June 1944, over 13,000 fortifications had been built. On paper, impenetrable. In reality, the Wall had to cover such a vast length that true continuous defence was impossible. Von Rundstedt himself privately called it 'a figment of Hitler's cloud cuckoo land.'",
      "When Rommel took command of Army Group B in late 1943, he was appalled by what he found. He doubled mines from 2 million to 6.5 million in seven months. Beach obstacles — steel hedgehogs, Belgian gates, wooden stakes — were driven into the sand to wreck landing craft. 'Rommel's asparagus' — tall stakes — were planted in fields to shred gliders. Low-lying areas were flooded to drown paratroopers. Coastal batteries at Merville, Longues-sur-Mer, Pointe du Hoc, Maisy, Azeville, and Crisbecq were reinforced and capable of firing 30km out to sea.",
      "But the German command in the West was a tangle of overlapping authorities. Von Rundstedt, despite being Commander-in-Chief West, had no authority over the navy or air force. Rommel could appeal over his head to Hitler. And the crucial Panzer reserves — the only forces capable of throwing the Allies back into the sea — sat under OKW's personal control, meaning Hitler himself had to authorise their movement.",
      "The most consequential argument took place before a single soldier landed. Rommel, who had watched the Desert Air Force destroy his armour in North Africa, wanted every Panzer division within striking distance of the coast — ready to counterattack within hours, while the Allies were still disorganised. Von Rundstedt argued for orthodox doctrine: keep the Panzers concentrated as a central reserve, far enough inland to be safe from naval gunfire. Hitler split the difference and wrecked both strategies. Of ten Panzer divisions in the West, only one — the 21st — was in position to fight on D-Day.",
      "On the morning of June 6, Rommel was in Herrlingen for his wife's 50th birthday. Hitler was asleep at the Berghof — his staff refused to wake him. He woke around noon, by which time the Allies had been ashore for seven hours. Convinced by Operation Fortitude that Normandy was a feint, he released just two divisions at 4pm. Von Rundstedt resigned shortly afterwards, famously writing to OKW: 'What shall I do? Make peace, you fools.'",
      "Operation Fortitude was the masterstroke. A fictitious 1st US Army Group (FUSAG) — inflatable rubber tanks, fake radio traffic, General George Patton placed visibly in 'command' — convinced Hitler that the real invasion would land at Pas-de-Calais. Every German spy in Britain had been turned by MI5; the Spanish double agent GARBO ran a fictional network of 27 sub-agents whose reports were included in 62 separate German High Command intelligence assessments. The Germans awarded GARBO the Iron Cross. Hitler kept the 15th Army — over 200,000 men — at Pas-de-Calais for seven weeks, waiting for an invasion that never came.",
      "And the air and sea were already lost. Total Luftwaffe sorties over Normandy on D-Day: around 100. Allied sorties: more than 14,000. The Kriegsmarine was a shadow. Without air cover or naval support, the only thing that could have stopped the Allies was immediate armoured counterattack in the first hours. That counterattack never came.",
    ],
    pullQuote: "What shall I do? Make peace, you fools.",
    pullQuoteAttribution: "Field Marshal Gerd von Rundstedt, after his dismissal",
  },
  {
    id: "airborne",
    image: {
      src: "https://images.unsplash.com/photo-1567507203066-6f1180e2ad29?w=1600&auto=format&fit=crop&q=80",
      caption: "A canopy against open sky — evoking the airborne drops behind the beaches on D-Day.",
    },
    kicker: "Chapter II · 00:16 Hours",
    title: "The Airborne Operations",
    lead:
      "Before the first landing craft touched sand, the battle had already begun. In the darkness of June 6, 1944, three airborne divisions dropped behind enemy lines — the largest airborne operation in history up to that point.",
    body: [
      "Utah Beach sat at the base of the Cotentin Peninsula, connected to the rest of Normandy by a handful of narrow causeways over flooded marshland. Sword Beach needed the Orne River and Caen Canal bridges secured. The solution: drop paratroopers and glider infantry in the hours before dawn to seize the flanks, cut German communications, and hold until the seaborne forces arrived.",
      "The US 82nd Airborne — 'All American' — was tasked with capturing Ste-Mère-Église and securing the Merderet River crossings. The drop was scattered disastrously over a wide area due to cloud cover and anti-aircraft fire. Many men landed miles from their drop zones; some drowned in the flooded fields. Private John Steele's parachute caught on the Ste-Mère-Église church steeple; he hung there for two hours playing dead while the battle raged below. He survived. A dummy parachute and figure still hang from the steeple in his memory.",
      "The US 101st Airborne — 'Screaming Eagles' — had a specific tactical mission: secure the four exits off Utah Beach. If those causeways weren't cleared before the seaborne infantry arrived, the 4th Division would be trapped on the sand. Like the 82nd, the drop was chaotic. But in small groups, paratroopers fought their way to the objectives. The causeways were cleared in time — directly enabling Utah's relative success.",
      "The British 6th Airborne had arguably the most precise mission. At 00:16 on June 6 — five hours before the seaborne landings — six Horsa gliders carrying men of the Oxfordshire and Buckinghamshire Light Infantry touched down silently in the dark beside the Caen Canal bridge at Bénouville. The assault took ten minutes. The bridge was taken intact. This was the first piece of occupied France liberated on D-Day.",
      "Major John Howard, who led the assault on what would be renamed Pegasus Bridge, met Lord Lovat's commandos relieving him later that morning — marching to the sound of a lone Scottish piper, Bill Millin, who played his pipes along the beach and causeway under fire. Millin later said the Germans didn't shoot him because they thought he was mad. The original Pegasus Bridge is now in the Mémorial Pegasus museum nearby. The Café Gondrée beside the canal — the first house liberated in France — is still run by the same family.",
    ],
  },
  {
    id: "five-beaches",
    image: {
      src: "https://images.unsplash.com/photo-1669861491732-567dbf11d17c?w=1600&auto=format&fit=crop&q=80",
      caption: "Normandy: a long sweep of beach beneath the cliffs.",
    },
    kicker: "Chapter III · 80 Kilometres",
    title: "The Five Beaches",
    lead:
      "Operation Overlord divided the Normandy coastline into five assault sectors stretching roughly 80 kilometres west to east. Each beach had its own character — its own terrain, its own defenders, its own story.",
    body: [
      "Utah Beach (US, westernmost): On the base of the Cotentin Peninsula. A navigation error on the morning of June 6 turned into a blessing — the landing craft drifted south and came ashore where the defences were weaker than intended. Brig. General Theodore Roosevelt Jr., son of the President, was the highest-ranking officer in the first wave. When his men realised they were in the wrong place, Roosevelt said: 'We'll start the war from right here.' He won the Medal of Honor and died of a heart attack five weeks later. Around 197 American casualties — the most successful of the five.",
      "Omaha Beach (US, 'Bloody Omaha'): A near-disaster. The beach was flanked by 50-metre bluffs perfectly positioned for German defenders. The pre-dawn bombing missed its targets. Most of the amphibious DD Sherman tanks sank in rough seas. The veteran German 352nd Infantry Division had moved to the sector weeks before D-Day, undetected by Allied intelligence. Companies suffered catastrophic losses in the first minutes. By midday, senior commanders briefly considered abandoning the beach. Small groups of soldiers, on individual initiative, found ways up the bluffs. Roughly 2,000 American casualties on June 6 alone — five times any other beach.",
      "Gold Beach (UK, central): Targeted at Arromanches — the planned site for one of two prefabricated Mulberry harbours that would supply the entire Allied army. Landings went better than Omaha, though there was fierce fighting around the German strongpoint at Le Hamel. By evening, British forces had reached the outskirts of Bayeux — taken without destruction the following day.",
      "Juno Beach (Canadian): Centred on Courseulles-sur-Mer and Bernières-sur-Mer. Heavy casualties in the initial waves — offshore reefs delayed the landings and bunched men together under fire. But the Canadians pushed further inland on D-Day than any other Allied force, almost reaching the Caen-Bayeux road by evening.",
      "Sword Beach (UK, easternmost): Nearest to Caen — the key strategic objective for D-Day. The British 3rd Division landed and pushed inland, but were slowed by the 21st Panzer Division — the only armoured counterattack of the day. Its evening counterattack nearly reached the coast between Sword and Juno, the deepest German penetration of the entire day. The British reached the 6th Airborne's positions at Pegasus Bridge but fell short of Caen. The city wouldn't fall until July.",
      "Combined, the five beaches gave the Allies an 80km foothold by the end of June 6. They were not yet linked up — there were gaps, especially between Utah and Omaha — but the invasion had succeeded. Within a week, the beachheads were consolidated. Within a month, over a million men had landed in Normandy.",
    ],
  },
  {
    id: "omaha",
    image: {
      src: "https://images.unsplash.com/photo-1683375807467-867f866753fa?w=1600&auto=format&fit=crop&q=80",
      caption: "Looking down to the sea from the bluffs above the beach — the kind of ground the first wave at Omaha had to climb.",
    },
    kicker: "Chapter IV · The Bloodiest Shore",
    title: "Omaha — Two Kinds of People",
    lead:
      "Of the five D-Day beaches, Omaha stands apart. It was the closest thing to failure the Allies experienced on June 6 — and it produced the highest casualties of the day by far.",
    body: [
      "Omaha is a 6-kilometre crescent of sand, flanked at both ends by cliffs and backed by steep bluffs up to 50 metres high. There were only five narrow exits — 'draws' — off the beach, and the Germans had every one covered. Unlike the other beaches, there was almost no cover on Omaha. Men who made it ashore found themselves on flat, open sand, with nowhere to go but forward — into fire.",
      "Several factors combined to make it catastrophic. The terrain favoured the defence: bluffs gave German defenders at the Widerstandsnester — resistance nests WN62 and WN65 — clear fields of fire across the entire beach. The pre-dawn bombing missed its targets entirely; bombs fell miles inland. Most of the DD Sherman tanks were launched too far out in rough seas — 27 of 29 in one battalion sank, and the infantry landed without armoured support. The defenders, the German 352nd Infantry Division, had moved to the sector just weeks before D-Day, undetected.",
      "At 6:30am, the ramps of the landing craft dropped. Many drowned immediately under the weight of their equipment. Those who reached the waterline were cut down on the sand. By 8am the situation was critical. Bodies littered the waterline. Survivors sheltered behind the metal obstacles the Germans had seeded the beach with. Officers and NCOs were killed in the first minutes. The beach was, in one commander's words, 'a sheet of fire.'",
      "It was not a single heroic moment that saved Omaha — it was dozens of small ones. Scattered groups of men, leaderless and terrified, found paths up the bluffs. Destroyers sailed dangerously close to shore and fired point-blank into German positions. Rangers scaled the cliffs at Pointe du Hoc. Colonel George Taylor of the 1st Division rallied his men with the famous words that became the motto of the day. By midday, the bluffs were being taken. By evening, a shallow, precarious beachhead existed.",
      "Two kilometres west of Omaha, US Army Rangers had to scale 100 feet of sheer cliffs at Pointe du Hoc under fire, using grappling hooks and ladders, to destroy a battery capable of firing on both Utah and Omaha. Of 225 Rangers who landed, only 90 were still able to fight two days later. When they reached the top, they found the guns had been moved. They located them hidden in a field and destroyed them with thermite grenades. The cratered cliff-top is left exactly as the fighting left it.",
      "The Normandy American Cemetery above Omaha holds 9,387 white crosses and Stars of David on a perfectly maintained clifftop. Most of the graves visible from the cemetery's overlook mark men who fell in the weeks after D-Day, but those who fell on June 6 itself are among them.",
    ],
    pullQuote:
      "Two kinds of people are staying on this beach: the dead, and those who are going to die.",
    pullQuoteAttribution: "Colonel George Taylor, US 1st Infantry Division, June 6, 1944",
  },
  {
    id: "to-paris",
    image: {
      src: "https://images.unsplash.com/photo-1683960784024-0ad47f7d0522?w=1600&auto=format&fit=crop&q=80",
      caption: "The lush Norman countryside on the road inland from the beaches toward Paris.",
    },
    kicker: "Chapter V · The Bridge to Paris",
    title: "From Normandy to the Champs-Élysées",
    lead:
      "D-Day was not the end — it was a beginning. Six weeks of brutal fighting in the Norman countryside separated the June 6 landings from the liberation of Paris on August 25.",
    body: [
      "After the beaches were secured, the Allies expected to advance rapidly. Instead, they ran straight into the bocage — the ancient hedgerow country of Normandy. These were not garden hedges. The Norman bocage consisted of dense earthen banks, often two metres tall, topped with thick roots and vegetation that had grown for centuries. Each field was a small fortress. Tanks couldn't see over them. Infantry couldn't push through them. Artillery couldn't fire accurately into them.",
      "The British objective on D-Day had been Caen — a city of 60,000, a major road junction, and the key to the Allied left flank. Caen was supposed to fall on June 6. Instead, it held out for nearly two months. Montgomery launched a series of major offensives — Perch, Epsom, Charnwood, Goodwood — each designed to take or bypass Caen and draw German armour onto the British sector. This was partly strategy: by keeping the elite Panzer divisions fighting the British, it made the American breakout possible. Caen finally fell on July 9, much of it reduced to rubble by Allied bombing.",
      "Operation Cobra — the breakout — began on July 25 with a massive aerial carpet-bombing around St-Lô, followed by the unleashing of Patton's newly activated US Third Army. Within days, American armour was racing through open country. Within a week, Patton's tanks had swept south and then east, encircling the bulk of the German army in France.",
      "As Patton swung east and the British and Canadians pressed south, two Allied armies closed around German Army Group B near Falaise. Caught in a shrinking pocket, the Germans suffered their worst defeat in the West since D-Day itself. Roughly 50,000 Germans were taken prisoner and another 10,000 killed in the Falaise Pocket. The roads were choked with destroyed vehicles. Allied airpower made movement impossible by day. The German army in France effectively ceased to exist as a coherent fighting force. The road to Paris was open.",
      "The rest is the story we tell in the Paris section: de Gaulle pressuring Eisenhower, the Resistance rising on August 19, Leclerc's French 2nd Armored Division racing to the city, and von Choltitz's surrender at the Hôtel Meurice on August 25. When you stand on Omaha Beach and then walk down the Champs-Élysées, you are walking the same story — just 300 kilometres and 80 days apart.",
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
