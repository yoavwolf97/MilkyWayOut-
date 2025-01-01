/*
  # Add costs table

  1. New Tables
    - `costs` table for storing daily cost ranges by country
      - `country` (text, primary key) - Country name in lowercase
      - `low` (numeric) - Low-end daily budget
      - `mid` (numeric) - Mid-range daily budget 
      - `high` (numeric) - High-end daily budget
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on costs table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS costs (
  country text PRIMARY KEY,
  low numeric NOT NULL,
  mid numeric NOT NULL,
  high numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE costs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON costs
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO costs (country, low, mid, high)
VALUES
  ('greece', 75.00, 150.00, 300.00)
ON CONFLICT (country) DO UPDATE
SET 
  low = EXCLUDED.low,
  mid = EXCLUDED.mid,
  high = EXCLUDED.high;