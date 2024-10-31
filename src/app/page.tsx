import HomeSection from 'src/sections/home/home';
import { Root } from 'src/types/types';
export const dynamic = 'force-dynamic';
export const revalidate = 1;

// ----------------------------------------------------------------------

export default async function HomePage() {
  const response = await fetch('http://localhost:8083/api/talair', { cache: 'no-cache' });
  const data = await response.json() as Root;


  return <HomeSection price={data.price * 1000} />
}
