import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCountryCosts(country: string) {
  const { data, error } = await supabase
    .from('countries')
    .select('low, mid, high')
    .eq('country', country.toLowerCase())
    .single();

  if (error) {
    console.error('Error fetching country costs:', error);
    return null;
  }

  return data;
}