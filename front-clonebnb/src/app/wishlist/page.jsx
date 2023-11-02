'use client'

import { HousingCard } from "@/components/content/HousingCard";
import { useHousing } from "@/context/HousingProvider";

export default function Wishlist(){
  const { wishList } = useHousing()

  return (
    <section className="grid grid-cols-auto gap-6 justify-items-center mt-36">
      {
        wishList.length > 0 ?
        wishList.map((stay) => (
          <HousingCard key={stay.id} stay={stay} />
        ))
          :<p>Without accommodations :/</p>
      }
    </section>
  );
}