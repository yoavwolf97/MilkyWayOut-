// Types for filter state
interface FilterState {
  planet: string;
  duration: string;
  bestTime: string;
}

// Initialize filter state
let filters: FilterState = {
  planet: 'earth',
  duration: '',
  bestTime: ''
};

// Get duration category based on days
function getDurationCategory(days: number): string {
  if (days <= 7) return 'short';
  if (days <= 14) return 'medium';
  return 'long';
}

// Apply all filters
function applyFilters() {
  const destinations = document.querySelectorAll('.grid-item');
  let visibleCount = 0;

  destinations.forEach(destination => {
    const element = destination as HTMLElement;
    const matchesPlanet = !filters.planet || element.dataset.planet === filters.planet;
    const matchesDuration = !filters.duration || getDurationCategory(parseInt(element.dataset.duration || '0')) === filters.duration;
    const matchesBestTime = !filters.bestTime || element.dataset.bestTime === filters.bestTime;

    const isVisible = matchesPlanet && matchesDuration && matchesBestTime;
    element.classList.toggle('hidden', !isVisible);
    if (isVisible) visibleCount++;
  });

  // Toggle "No Results" message
  const noResults = document.querySelector('.no-results');
  if (noResults) {
    noResults.classList.toggle('hidden', visibleCount > 0);
  }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Planet toggle
  const planetButtons = document.querySelectorAll('.toggle-btn');
  planetButtons.forEach(button => {
    button.addEventListener('click', () => {
      const planet = button.getAttribute('data-planet');
      if (planet) {
        filters.planet = planet;
        applyFilters();
      }
    });
  });

  // Filter dropdowns
  const filterSelects = document.querySelectorAll('.filter-select');
  filterSelects.forEach(select => {
    select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      const filterType = target.getAttribute('data-filter');
      if (filterType) {
        filters[filterType as keyof FilterState] = target.value;
        applyFilters();
      }
    });
  });

  // Reset filters button
  const resetButton = document.querySelector('.reset-filters');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      filters = {
        planet: 'earth',
        duration: '',
        bestTime: ''
      };
      
      // Reset UI
      filterSelects.forEach((select: Element) => {
        (select as HTMLSelectElement).value = '';
      });
      
      const earthButton = document.querySelector('[data-planet="earth"]');
      if (earthButton) {
        earthButton.classList.add('active');
        const marsButton = document.querySelector('[data-planet="mars"]');
        if (marsButton) marsButton.classList.remove('active');
      }

      applyFilters();
    });
  }

  // Initial filter application
  applyFilters();
});