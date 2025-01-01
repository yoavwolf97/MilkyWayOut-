import type { Location } from '../../lib/supabase/queries';
import type { MapConfig } from './mapConfig';

declare global {
  interface Window {
    L: any;
  }
}

export async function initializeMap(
  locations: Location[], 
  mapConfig: MapConfig,
  containerId: string
): Promise<void> {
  if (!locations?.length) {
    console.warn('No locations found for the map');
    return;
  }

  const map = window.L.map(containerId).setView(mapConfig.center, mapConfig.zoom);

  window.L.tileLayer(mapConfig.tileLayer.url, {
    attribution: mapConfig.tileLayer.attribution
  }).addTo(map);

  locations.forEach(location => {
    const popupContent = document.getElementById(`marker-${location.id}`)?.innerHTML;
    if (!popupContent) return;

    const marker = window.L.marker([location.coordinates.x, location.coordinates.y])
      .addTo(map)
      .bindPopup(popupContent);

    marker.on('mouseover', function() {
      this.openPopup();
    });
  });
}