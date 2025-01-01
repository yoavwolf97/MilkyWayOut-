export interface TravelCost {
  country: string;
  low: number;
  mid: number;
  high: number;
}

export interface BudgetResult {
  country: string;
  averageCost: number;
  remainingBudget: number;
  feasibility: 'low' | 'medium' | 'high';
}