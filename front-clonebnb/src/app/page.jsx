import { Filters } from '@/components/filter/Filters';
import { Accommodations } from '@/components/content/Accommodations';

export default function Home() {

  return (
      <main className="relative m-auto mt-40 sm:mt-28 px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl">
        <section className="flex justify-center">
          <Filters />
        </section>
        <Accommodations />
      </main>
  );
}
