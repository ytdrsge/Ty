export interface Rogue {
  code: string;
  name: string;
  threat: string;
  domain: string;
  colorFrom: string;
  colorTo: string;
}

// Original archetypes inspired by the classic "rogues gallery" trope of
// street-level web-slinger stories — generic villain concepts, not
// depictions of any specific copyrighted character.
export const rogues: Rogue[] = [
  {
    code: "FILE 01",
    name: "The Goblin",
    threat: "Aerial sabotage, chemical ordnance",
    domain: "Rooftops & industrial parks",
    colorFrom: "#3d2a0c",
    colorTo: "#07070a"
  },
  {
    code: "FILE 02",
    name: "Doc Tentacle",
    threat: "Mechanized limbs, fusion tech",
    domain: "Research district",
    colorFrom: "#1a2f14",
    colorTo: "#07070a"
  },
  {
    code: "FILE 03",
    name: "The Symbiote",
    threat: "Shape-shifting, enhanced strength",
    domain: "Sewers & back alleys",
    colorFrom: "#0c0c14",
    colorTo: "#07070a"
  },
  {
    code: "FILE 04",
    name: "Vulture King",
    threat: "Flight tech, salvage weaponry",
    domain: "Bridges & scrapyards",
    colorFrom: "#2a2410",
    colorTo: "#07070a"
  },
  {
    code: "FILE 05",
    name: "Sandstorm",
    threat: "Mass manipulation, erosion",
    domain: "Construction sites",
    colorFrom: "#332911",
    colorTo: "#07070a"
  }
];

export const powers = [
  {
    eyebrow: "Physiology",
    title: "Proportional strength & speed",
    body: "Reflexes and raw power scaled far beyond human limits, tuned for split-second street-level combat."
  },
  {
    eyebrow: "Instinct",
    title: "A sense that warns of danger",
    body: "A precognitive tingle at the base of the skull, firing milliseconds before harm arrives."
  },
  {
    eyebrow: "Engineering",
    title: "Wrist-mounted web fluid",
    body: "A self-designed adhesive compound, fired from mechanical shooters and dissolving within the hour."
  }
];

export const stats = [
  { value: 847, suffix: "", label: "Rescues logged this year" },
  { value: 4, suffix: "ms", label: "Average danger-sense reaction time" },
  { value: 200, suffix: "ft", label: "Longest recorded single swing" },
  { value: 12, suffix: "", label: "Boroughs patrolled nightly" }
];
