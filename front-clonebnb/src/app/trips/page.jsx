import { TripList } from "@/components/tripList/TripList";

export default function Trips(){
  return (
    <section className="m-auto mt-24 px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl">
      <h2 className="mb-8 text-xl sm:text-3xl font-semibold">
        Historial de viajes
      </h2>
      <p className="mb-4">Este es un ejemplo de tarjetas de reservacion</p>
      <TripList />
    </section>
  );
}