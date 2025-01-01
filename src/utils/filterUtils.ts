// Utility functions for filtering destinations
export function getBestTimeOptions() {
  return [
    { value: 'spring', label: 'March-May', months: ['March', 'April', 'May'] },
    { value: 'summer', label: 'June-August', months: ['June', 'July', 'August'] },
    { value: 'fall', label: 'September-November', months: ['September', 'October', 'November'] },
    { value: 'winter', label: 'December-February', months: ['December', 'January', 'February'] }
  ];
}

export function getDurationCategory(duration: string): string {
  const days = parseInt(duration.split('-')[1]?.trim().replace(' days', '') || '0');
  if (days <= 7) return 'short';
  if (days <= 14) return 'medium';
  return 'long';
}

export function getBestTimeSeason(timeRange: string): string {
  const months = timeRange.split('-');
  const startMonth = months[0].trim();
  
  const seasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    fall: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February']
  };

  for (const [season, seasonMonths] of Object.entries(seasons)) {
    if (seasonMonths.includes(startMonth)) {
      return season;
    }
  }
  
  return 'all-year';
}