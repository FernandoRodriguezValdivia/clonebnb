'use client'

import Link from "next/link";
import { HousingCard } from "@/components/content/HousingCard";
import { useHousing } from "@/context/HousingProvider";

export default function Wishlist(){
  const { wishList } = useHousing()

  if( wishList.length > 0 ){
    return (
      <section className="grid grid-cols-auto gap-6 justify-items-center mt-36">
      {
        wishList.map((stay) => (
          <HousingCard key={stay.id} stay={stay} />
        ))
      }
    </section>
    )
  }

  return (
    <section className="grid justify-items-center mt-36">
      <p>Agregue elementos a su lista de deseos desde <Link className="font-bold" href="/">Home</Link></p>
    </section>
  );
}