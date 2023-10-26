'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { housingReducer, initHousingState } from "@/reducers/housingReducer";

const HousingContext = createContext()

export function useHousing(){
  return useContext(HousingContext)
}


export const HousingProvider =({children}) =>{
  const [housing, dispatchHousing] = useReducer(housingReducer, initHousingState)

  useEffect(() => {
    const resData = async () => {
      try {
        const response = await fetch(
          'https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getAllStays?page=1&size=10'
        );
        const data = await response.json();
        dispatchHousing({ type: 'GET_DATA', payload: data.data.stays });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    resData();
  }, []);

  return(
    <HousingContext.Provider value={{housing}}>
      {children}
    </HousingContext.Provider>
  )
}