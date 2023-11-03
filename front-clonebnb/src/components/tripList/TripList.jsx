'use client'

import { useSession } from "next-auth/react";
import { TripCard } from "./TripCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export const TripList = () => {
  const { data: session } = useSession();
  const token = session?.user?.data?.token;
  const [trips, setTrips] = useState([]);

  useEffect(()=>{
    if(token){
      const getTrips = async () => {
        try {
          const response = await fetch(
            'https://c14-04-m-node-react-production.up.railway.app/api/v1/reservation/getAllReservationByVisitor',
            {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
              }
            }
          );
          const data = await response.json();
          const reservations = data.data.reservations
          setTrips(reservations);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
      getTrips()
    }
  },[token])

  return (
    <div className="grid grid-cols-auto gap-6 mt-4">
      {trips.length > 0 ? (
        trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
      ) : (
        <p className="col-span-2">
          No hay viajes reservados. ¡todavía!
          <Link className="font-semibold underline ml-2" href="/">
            Empieza a buscar
          </Link>
        </p>
      )}
    </div>
  );
}