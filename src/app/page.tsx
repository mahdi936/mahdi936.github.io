import HomeSection from 'src/sections/home/home';
import { Root } from 'src/types/types';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ----------------------------------------------------------------------

export default async function HomePage() {
  const response = await fetch('http://localhost:8083/api/talair'); // Use the appropriate API route
  const data = await response.json() as Root;




  return <HomeSection price={Number(data.current.geram18.p.replaceAll(',', ''))} />
}
