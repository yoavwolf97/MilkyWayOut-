import type { Location } from '../../lib/supabase/queries';
import type { MapConfig } from './mapConfig';

export interface MapData {
  locations: Location[];
  config: MapConfig;
}

export function getMapData(): MapData {
  const dataElement = document.getElementById('map-data');
  if (!dataElement?.textContent) {
    throw new Error('Map data not found');
  }

  try {
    return JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error('Failed to parse map data:', error);
    throw new Error('Invalid map data format');
  }
}