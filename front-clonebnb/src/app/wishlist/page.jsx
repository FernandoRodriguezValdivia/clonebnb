'use client'

import { useHousing } from "@/context/HousingProvider";

export default function Wishlist(){
  const {housing} = useHousing()

  return (
    <section className="grid grid-cols-auto gap-6 justify-items-center mt-36">
      <p>Without accommodations :/</p>
    </section>
  );
}