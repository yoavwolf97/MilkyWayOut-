export interface TravelCost {
  country: string;
  low: number;
  mid: number;
  high: number;
}

export const travelCosts: TravelCost[] = [
  { country: "laos", low: 5.40, mid: 6.75, high: 13.50 },
  { country: "kazakhstan", low: 5.66, mid: 7.08, high: 14.16 },
  { country: "myanmar", low: 7.01, mid: 8.76, high: 17.52 },
  { country: "ethiopia", low: 7.90, mid: 9.87, high: 19.74 },
  { country: "ghana", low: 7.90, mid: 9.88, high: 19.76 },
  { country: "ukraine", low: 7.94, mid: 9.93, high: 19.86 },
  { country: "mongolia", low: 8.47, mid: 10.59, high: 21.18 },
  { country: "georgia", low: 9.01, mid: 11.26, high: 22.52 },
  { country: "colombia", low: 11.07, mid: 13.84, high: 27.68 },
  { country: "nepal", low: 11.87, mid: 14.84, high: 29.68 },
  { country: "burkina-faso", low: 12.26, mid: 15.32, high: 30.64 },
  { country: "india", low: 12.29, mid: 15.36, high: 30.72 },
  { country: "armenia", low: 12.45, mid: 15.56, high: 31.12 },
  { country: "cuba", low: 13.74, mid: 17.18, high: 34.36 },
  { country: "serbia", low: 14.01, mid: 17.51, high: 35.02 },
  { country: "rwanda", low: 14.18, mid: 17.73, high: 35.46 },
  { country: "malawi", low: 15.31, mid: 19.14, high: 38.28 },
  { country: "guatemala", low: 15.49, mid: 19.36, high: 38.72 },
  { country: "russia", low: 15.69, mid: 19.61, high: 39.22 },
  { country: "mali", low: 15.74, mid: 19.67, high: 39.34 },
  { country: "nicaragua", low: 15.98, mid: 19.98, high: 39.96 },
  { country: "sri-lanka", low: 16.54, mid: 20.68, high: 41.36 },
  { country: "peru", low: 17.20, mid: 21.50, high: 43.00 }
];