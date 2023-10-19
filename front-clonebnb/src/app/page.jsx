import { HousingCard } from '@/components/HousingCard';

async function getStays() {
  const res = await fetch(
    'https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getAllStays?page=1&size=10'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const housing = await getStays();
  const stays = housing.data.stays;

  return (
    <main>
      <section className="grid grid-cols-auto gap-8 justify-items-center max-w-7xl m-10">
        {stays.map((stay) => (
          <HousingCard key={stay.id} stay={stay} />
        ))}
      </section>
    </main>
  );
}
