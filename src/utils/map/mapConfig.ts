export interface MapConfig {
  center: [number, number];
  zoom: number;
  tileLayer: {
    url: string;
    attribution: string;
  };
}

export const MAP_CONFIG: MapConfig = {
  center: [-4.6827, 55.4804],
  zoom: 10,
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '© OpenStreetMap contributors'
  }
};