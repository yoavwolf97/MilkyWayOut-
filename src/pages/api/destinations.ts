import { destinations } from '../../data/destinations';

export const GET = () => {
  return new Response(JSON.stringify(destinations), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}