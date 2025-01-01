import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from './config';

if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.key) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);