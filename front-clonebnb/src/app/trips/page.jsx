import { TripList } from "@/components/tripList/TripList";

export default function Trips(){
  return (
    <section className="m-auto mt-44 sm:mt-32 px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl">
      <h2 className="mb-8 text-xl font-semibold">Your Trips history</h2>
      <TripList/>
    </section>
  );
}