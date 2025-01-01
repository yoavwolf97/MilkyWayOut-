import { supabase } from './client';

export interface CostData {
  low: number;
  mid: number;
  high: number;
}

export async function getCountryCosts(country: string): Promise<CostData | null> {
  if (!country) {
    throw new Error('Country parameter is required');
  }

  try {
    const { data, error } = await supabase
      .from('costs')
      .select('low, mid, high')
      .eq('country', country.toLowerCase())
      .single();

    if (error) {
      console.error(`Error fetching costs for ${country}:`, error);
      throw error;
    }

    if (!data) {
      console.warn(`No cost data found for ${country}`);
      return null;
    }

    return {
      low: Number(data.low),
      mid: Number(data.mid),
      high: Number(data.high)
    };
  } catch (error) {
    console.error('Unexpected error in getCountryCosts:', error);
    throw error;
  }
}