export interface CalculatorResult {
  dailyBudget: number;
  recommendations: Recommendation[];
}

export interface Recommendation {
  country: string;
  cost: number;
  difference: number;
}

export function calculateResults(budget: number, duration: number): CalculatorResult {
  const dailyBudget = budget / duration;
  
  return {
    dailyBudget,
    recommendations: []  // Will be populated by the API call
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}