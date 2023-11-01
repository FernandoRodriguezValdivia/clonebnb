import { ImageContainer } from "@/components/detailcard/ImageContainer";
import { InfoCardDetail } from "@/components/detailcard/InfoCardDetail";
import {  ReservationProvider } from "@/context/ReservationProvider";

async function getDetails(id) {
  const res = await fetch(
    `https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getStayById/${id}`,
    { cache: 'no-store' }
  );

  return res.json();
}

export default async function Detail({params}){
  const {id} = params;
  const response = await getDetails(id);
  const detail = response.data.stay

  return (
    <ReservationProvider>


    <section className="absolute z-40 bg-white sm:z-0 pb-28 sm:pb-8 sm:relative sm:top-32 top-0 flex justify-center flex-wrap md:flex-nowrap gap-14 md:gap-12 lg:justify-between max-w-screen-2xl mx-auto">
      <ImageContainer detail={detail} />
      <InfoCardDetail detail={detail} />

    </section>
    </ReservationProvider>
  );
}