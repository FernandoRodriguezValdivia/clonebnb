'use client'

import { useFilter } from "@/context/FilterProvider";
import { HousingCard } from "./HousingCard";
import { useHousing } from "@/context/HousingProvider";

export const Accommodations = () => {
  const {housing} = useHousing()
  const { filter } = useFilter()

  const filterStays = housing.filter((stays) => {
    return (
      (!filter.search || stays.titulo.toLowerCase().includes(filter.search.toLowerCase())) &&
      (!filter.category || stays.category === filter.category)
    );
  });

  return (
    <section className="relative grid grid-cols-auto gap-6 justify-items-center mt-36">
      {filterStays.length === 0 && <p className="line-clamp-1 min-w-[200px]">No se encontraron resultados</p>}
      {filterStays.map((stay) => (
        <HousingCard key={stay.id} stay={stay} />
      ))}
    </section>
  );
};
