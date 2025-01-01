import { supabase } from './client';

export interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  link: string;
  island: string;
  country: string;
}

export async function getSeychellesLocations(): Promise<Location[]> {
  try {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .eq('country', 'seychelles')
      .order('name');

    if (error) {
      console.error('Error fetching Seychelles locations:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error in getSeychellesLocations:', error);
    return [];
  }
}

export async function getGreeceCosts() {
  try {
    const { data, error } = await supabase
      .from('costs')
      .select('low, mid, high')
      .eq('country', 'greece')
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching Greece costs:', error);
    return null;
  }
}