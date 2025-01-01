export interface Destination {
  name: string;
  planet: 'earth' | 'mars';
  description: string;
  duration: string;
  difficulty: number;
  costRange: {
    min: number;
    max: number;
  };
  bestTime: string;
  climate: string;
  activities: string[];
}