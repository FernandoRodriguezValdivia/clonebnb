import { Filters } from '@/components/filter/Filters';
import { Accommodations } from '@/components/content/Accommodations';
import { FilterProvider } from '@/context/FilterProvider';

export default async function Home() {

  return (
    <FilterProvider>
      <main className="relative m-auto px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl">
        <Filters />
        <Accommodations />
      </main>
    </FilterProvider>
  );
}
