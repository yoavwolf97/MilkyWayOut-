import type { TravelCost } from '../data/travelCosts';

export function calculateDailyBudget(totalBudget: number, duration: number): number {
  return totalBudget / duration;
}

export function findMatchingDestinations(dailyBudget: number, costs: TravelCost[], limit: number = 5): string[] {
  return costs
    .map(country => ({
      country: country.country,
      diff: Math.abs(country.mid - dailyBudget)
    }))
    .sort((a, b) => a.diff - b.diff)
    .slice(0, limit)
    .map(match => match.country);
}