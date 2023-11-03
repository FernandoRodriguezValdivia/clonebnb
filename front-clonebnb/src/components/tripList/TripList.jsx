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
      function convertirFecha(fecha) {
        // Parsea la fecha del formato "YYYY-MM-DD"
        const fechaParseada = new Date(fecha);
        fechaParseada.setDate(fechaParseada.getDate() + 1);
      
        // Obtiene los componentes de la fecha
        const año = fechaParseada.getFullYear();
        const mes = String(fechaParseada.getMonth() + 1).padStart(2, '0'); // Mes va de 0 a 11
        const dia = String(fechaParseada.getDate()).padStart(2, '0');
        const horas = String(fechaParseada.getHours()).padStart(2, '0');
        const minutos = String(fechaParseada.getMinutes()).padStart(2, '0');
        const segundos = String(fechaParseada.getSeconds()).padStart(2, '0');
      
        // Obtiene el offset de zona horaria en minutos y lo convierte a horas
        const offset = -fechaParseada.getTimezoneOffset() / 60;
      
        // Construye la cadena de fecha en el formato deseado
        const fechaFormateada = `${año}-${mes}-${dia}T${horas}:${minutos}:${segundos}.000${offset >= 0 ? '+' : '-'}${String(Math.abs(offset)).padStart(2, '0')}:00`;
      
        return fechaFormateada;
      }

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
          setTrips(reservations.map( reservation => {
            const newReservation = {
              id: reservation.id,
              checkin: convertirFecha(reservation.startDate),
              checkout: convertirFecha(reservation.endDate),
              persons: reservation.quantityVisitors,
              price: reservation.totalPrice
            }
            return newReservation}));
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
      getTrips()
    }
  },[token])

  // console.log(trips);

  const tripsList = [
    {
      checkin: '2023-08-02T11:13:50.000-05:00',
      checkout: '2023-11-02T18:18:50.000-05:00',
      persons: 4,
      price: 200
    },
    {
      checkin: '2023-06-02T10:13:50.000-05:00',
      checkout: '2023-06-02T20:18:50.000-05:00',
      persons: 2,
      price: 100
    },
    {
      checkin: '2023-08-02T19:13:50.000-05:00',
      checkout: '2023-10-02T10:18:50.000-05:00',
      persons: 1,
      price: 80
    },
    {
      checkin: '2023-10-02T15:13:50.000-05:00',
      checkout: '2023-11-02T18:18:50.000-05:00',
      persons: 1,
      price: 65
    },
    {
      checkin: '2023-01-02T11:13:50.000-05:00',
      checkout: '2023-02-02T20:18:50.000-05:00',
      persons: 2,
      price: 50
    },
    {
      checkin: '2023-07-02T17:30:50.000-05:00',
      checkout: '2023-08-02T09:20:50.000-05:00',
      persons: 3,
      price: 90
    }
  ];

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