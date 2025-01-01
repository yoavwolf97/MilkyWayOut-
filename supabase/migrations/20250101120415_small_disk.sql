/*
  # Create Seychelles locations table

  1. New Tables
    - `locations`
      - `id` (text, primary key)
      - `name` (text)
      - `coordinates` (jsonb for storing lat/long)
      - `description` (text)
      - `link` (text)
      - `island` (text)

  2. Security
    - Enable RLS on `locations` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS locations (
  id text PRIMARY KEY,
  name text NOT NULL,
  coordinates jsonb NOT NULL,
  description text NOT NULL,
  link text NOT NULL,
  island text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON locations
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO locations (id, name, coordinates, description, link, island)
VALUES
  ('tea-factory', 'Tea Factory', '{"x": -4.6476, "y": 55.4587}', 'Visit the tea plantation with panoramic views of Mahé', '/seychelles/mahe', 'Mahe'),
  ('morne-blanc', 'Morne Blanc Trail', '{"x": -4.6392, "y": 55.4447}', 'Scenic hiking trail with breathtaking views', '/seychelles/mahe', 'Mahe'),
  ('vallee-de-mai', 'Vallée de Mai', '{"x": -4.3310, "y": 55.7422}', 'UNESCO World Heritage site with rare coco de mer palms', '/seychelles/praslin', 'Praslin'),
  ('anse-lazio', 'Anse Lazio', '{"x": -4.2934, "y": 55.7151}', 'One of the most beautiful beaches in the world', '/seychelles/praslin', 'Praslin'),
  ('tortoise-farm', 'La Digue Tortoise Farm', '{"x": -4.3587, "y": 55.8411}', 'Home to giant Aldabra tortoises', '/seychelles/la-digue', 'La Digue')
ON CONFLICT (id) DO NOTHING;