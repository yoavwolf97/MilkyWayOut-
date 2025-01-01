export const destinations = [
  {
    name: "Seychelles",
    planet: "earth",
    description: "Experience a perfect blend of adventure, nature, and relaxation through stunning islands with pristine beaches and unique wildlife.",
    duration: "7-8 days",
    difficulty: 2,
    costRange: { min: 2500, max: 6000 },
    bestTime: "April-May",
    climate: "tropical",
    activities: ["Island Hopping", "Scuba Diving", "Nature Trails", "Wildlife Viewing"]
  },
  {
    name: "Santorini",
    planet: "earth",
    description: "Experience the magic of white-washed buildings, blue domes, and stunning Aegean sunsets.",
    duration: "5-7 days",
    difficulty: 2,
    costRange: { min: 1500, max: 4000 },
    bestTime: "April-October",
    climate: "mediterranean",
    activities: ["Island Exploration", "Wine Tasting", "Photography", "Beach Activities"]
  },
  {
    name: "Japan",
    planet: "earth",
    description: "Discover the perfect blend of ancient traditions and modern innovation in Japan.",
    duration: "10-14 days",
    difficulty: 3,
    costRange: { min: 3000, max: 7000 },
    bestTime: "March-May",
    climate: "temperate",
    activities: ["Temple Visits", "Food Tours", "Cherry Blossom Viewing", "City Exploration"]
  },
  {
    name: "Vietnam",
    planet: "earth",
    description: "Journey through Vietnam's rich tapestry of culture, history, and natural beauty.",
    duration: "10-12 days",
    difficulty: 2,
    costRange: { min: 1200, max: 3000 },
    bestTime: "November-April",
    climate: "tropical",
    activities: ["Street Food Tours", "Cultural Sites", "River Cruises", "Historical Tours"]
  },
  {
    name: "Sri Lanka",
    planet: "earth",
    description: "Explore ancient temples, lush tea plantations, and pristine beaches in this tropical paradise.",
    duration: "8-10 days",
    difficulty: 2,
    costRange: { min: 1000, max: 2500 },
    bestTime: "December-March",
    climate: "tropical",
    activities: ["Tea Plantation Tours", "Wildlife Safaris", "Temple Visits", "Beach Activities"]
  },
  {
    name: "Greece",
    planet: "earth",
    description: "Experience the birthplace of Western civilization with stunning islands and ancient ruins.",
    duration: "7-10 days",
    difficulty: 2,
    costRange: { min: 2000, max: 5000 },
    bestTime: "April-October",
    climate: "mediterranean",
    activities: ["Ancient Ruins", "Island Hopping", "Mediterranean Cuisine", "Beach Activities"]
  },
  {
    name: "Olympus Mons Base Camp",
    planet: "mars",
    description: "Experience the thrill of camping at the base of the solar system's largest volcano.",
    duration: "14-21 days",
    difficulty: 5,
    costRange: { min: 500000, max: 1000000 },
    bestTime: "Mars Summer",
    climate: "extreme",
    activities: ["Volcano Hiking", "Scientific Research", "Space Photography", "Geological Exploration"]
  }
] as const;

export type Destination = typeof destinations[number];