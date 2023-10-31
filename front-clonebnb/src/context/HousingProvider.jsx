'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { housingReducer, initHousingState } from "@/reducers/housingReducer";
import { useFilter } from "./FilterProvider";

const HousingContext = createContext()

export function useHousing(){
  return useContext(HousingContext)
}

export const HousingProvider =({children}) =>{
  const [housing, dispatchHousing] = useReducer(housingReducer, initHousingState)
  const {filter} = useFilter()

  const categoryId = filter.category;

  useEffect(() => {
    const resData = async () => {
      try {
        const response = await fetch(
          `https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getAllStays?page=1&size=10${
            categoryId > 0 && `&category=${categoryId}`
          }`
        );
        const data = await response.json();
        dispatchHousing({ type: 'GET_DATA', payload: data.data.stays });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    resData();
  }, [categoryId]);

  return(
    <HousingContext.Provider value={{housing}}>
      {children}
    </HousingContext.Provider>
  )
}