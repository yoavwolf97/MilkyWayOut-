/*
  # Create travel costs table

  1. New Tables
    - `costs`
      - `id` (uuid, primary key)
      - `name` (text, unique) - Country name
      - `low` (numeric) - Budget daily cost
      - `mid` (numeric) - Average daily cost
      - `high` (numeric) - Luxury daily cost
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `costs` table
    - Add policy for public read access
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS costs;

-- Create new costs table
CREATE TABLE costs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  low numeric NOT NULL,
  mid numeric NOT NULL,
  high numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE costs ENABLE ROW LEVEL SECURITY;

-- Create read policy
CREATE POLICY "Anyone can read costs"
  ON costs
  FOR SELECT
  TO anon
  USING (true);

-- Insert initial data
INSERT INTO costs (name, low, mid, high)
VALUES ('greece', 50.00, 100.00, 200.00)
ON CONFLICT (name) DO UPDATE
SET low = EXCLUDED.low,
    mid = EXCLUDED.mid,
    high = EXCLUDED.high;