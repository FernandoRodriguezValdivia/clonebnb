'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { housingReducer, initHousingState } from "@/reducers/housingReducer";
import { useFilter } from "./FilterProvider";
import { useSession } from "next-auth/react";

const HousingContext = createContext()

export function useHousing(){
  return useContext(HousingContext)
}

export const HousingProvider =({children}) =>{
  const [housing, dispatchHousing] = useReducer(housingReducer, initHousingState)
  const {filter} = useFilter()
  const { data: session } = useSession()
  const token = session?.user?.data?.token
  const categoryId = filter.category;

  const setHousing = (stays) => {
    dispatchHousing({ type: 'GET_DATA', payload: stays });
  }

  useEffect(() => {
    if(token){
      const resData = async () => {
        try {
          const response = await fetch('https://c14-04-m-node-react-production.up.railway.app/api/v1/wish/getWish',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            }
          });
          const data = await response.json();
          console.log(data)
          
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
      resData();
    }
  },[token])

  useEffect(() => {
    const resData = async () => {
      try {
        const response = await fetch(
          `https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getAllStays?page=1&size=10${
            categoryId > 0 && `&category=${categoryId}`
          }`
        );
        const data = await response.json();
        setHousing(data.data.stays)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    resData();
  }, [categoryId]);

  return(
    <HousingContext.Provider value={{housing, setHousing}}>
      {children}
    </HousingContext.Provider>
  )
}