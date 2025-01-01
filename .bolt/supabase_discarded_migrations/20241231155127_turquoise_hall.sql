/*
  # Create costs table and add initial data

  1. New Tables
    - `costs`
      - `id` (uuid, primary key)
      - `country` (text, unique)
      - `low` (numeric)
      - `mid` (numeric) 
      - `high` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `costs` table
    - Add policy for authenticated users to read costs data
*/

-- Create costs table
CREATE TABLE IF NOT EXISTS costs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country text UNIQUE NOT NULL,
  low numeric NOT NULL,
  mid numeric NOT NULL,
  high numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE costs ENABLE ROW LEVEL SECURITY;

-- Add RLS policy
CREATE POLICY "Allow public read access"
  ON costs
  FOR SELECT
  TO PUBLIC
  USING (true);

-- Insert initial data
INSERT INTO costs (country, low, mid, high)
VALUES
  ('greece', 50, 100, 200)
ON CONFLICT (country) 
DO UPDATE SET
  low = EXCLUDED.low,
  mid = EXCLUDED.mid,
  high = EXCLUDED.high;