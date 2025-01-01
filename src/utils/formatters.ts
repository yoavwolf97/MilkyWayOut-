export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatCountryName(name: string): string {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}