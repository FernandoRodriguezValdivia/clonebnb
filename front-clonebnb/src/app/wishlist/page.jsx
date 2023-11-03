'use client'

import Link from "next/link";
import { HousingCard } from "@/components/content/HousingCard";
import { useHousing } from "@/context/HousingProvider";

export default function Wishlist(){
  const { wishList } = useHousing()

  return (
    <main className="m-auto px-5 pb-5 md:px-8 md:pb-8 mt-24 max-w-screen-2xl">
      <h2 className="text-xl sm:text-3xl font-semibold">Lista de deseos</h2>
      {wishList.length > 0 && <p className="text-sm mb-8 text-gray">{wishList.length} guardado</p>}
      <section className="grid grid-cols-auto gap-6">
        {wishList.length > 0 ? (
          wishList.map((stay) => <HousingCard key={stay.id} stay={stay} />)
        ) : (
          <p className="col-span-2 mt-8">
            Agregue elementos a su lista de deseos desde
            <Link className="font-semibold underline ml-2" href="/">
              Home
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}