import Link from "next/link";
import { ButtonCard } from "./ButtonCard";
import { DescriptionCard } from "./DescriptionCard";

export const HousingCard = ({stay})=>{

  return (
    <div className="flex justify-center w-full h-full aspect-square relative rounded-1xs overflow-hidden">
      <div className="absolute -top-3 right-0 sm:top-0">
        <ButtonCard />
      </div>
      <DescriptionCard stay={stay} />
      <Link href="/[id]" as={`${stay.id}`} className="w-full h-full">
        <div className="w-full h-full">
          <picture>
            <img
              className="object-cover h-full w-full"
              src={stay?.imagen[0].url}
              alt={stay?.titulo}
            />
          </picture>
        </div>
      </Link>
    </div>
  );
}