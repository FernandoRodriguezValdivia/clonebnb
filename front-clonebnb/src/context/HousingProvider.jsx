'use client'

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { housingReducer, initHousingState } from "@/reducers/housingReducer";
import { useFilter } from "./FilterProvider";
import { useSession } from "next-auth/react";

const HousingContext = createContext()

export function useHousing(){
  return useContext(HousingContext)
}

export const HousingProvider =({children}) =>{
  const [housing, dispatchHousing] = useReducer(housingReducer, initHousingState)
  const [ isLoadingHousing, setIsLoadingHousing ] = useState(true)
  const [ isLoadingWish, setIsLoadingWish ] = useState(true)
  const [ wishList, setWishList] = useState([])
  const {filter} = useFilter()
  const { data: session } = useSession()
  const token = session?.user?.data?.token
  const categoryId = filter.category;

  const setHousing = (stays) => {
    dispatchHousing({ type: 'GET_DATA', payload: stays });
  }
  
  const getWishList = async () => {
    try {
      setIsLoadingWish(true)
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
      const wishList = data.data.wishList.map( (stay) => ({...stay, isFavorite: true}));
      setWishList(wishList)
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setIsLoadingWish(false)
    }
  };

  const removeWish = async (idStay) => {
    if( token ) {
      await fetch(`https://c14-04-m-node-react-production.up.railway.app/api/v1/wish/removeStay/${idStay}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      });
      await getWishList()
    } else {
      alert('inicie sesion')
    }
  }

  const addWish = async (idStay) => {
    if( token ) {
      await fetch(`https://c14-04-m-node-react-production.up.railway.app/api/v1/wish/addStay`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({stayId: Number(idStay)})
      });
      await getWishList()
    } else {
      alert('inicie sesion')
    }
  }

  useEffect(() => {
    if(token){
      getWishList()
    } else {
      setWishList([])
      setIsLoadingWish(false)
    }
  },[token])

  useEffect(() => {
    const resData = async () => {
      try {
        setIsLoadingHousing(true)
        const response = await fetch(
          `https://c14-04-m-node-react-production.up.railway.app/api/v1/stays/getAllStays?page=1&size=20${
            categoryId > 0 && `&category=${categoryId}`
          }`
        );
        const data = await response.json();
        setHousing(data.data.stays)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setIsLoadingHousing(false)
      }
    };
    resData();
  }, [categoryId]);

  useEffect(() => {
    if( !isLoadingHousing && !isLoadingWish ){
      const newHousing = housing.map( ( stay ) => {
        const isFavorite = wishList.some( wish => wish.id === stay.id )
        return {
          ...stay,
          isFavorite,
        }
      })
      setHousing(newHousing)
    }
  }, [ isLoadingHousing, isLoadingWish])

  return(
    <HousingContext.Provider value={{housing, setHousing, wishList, removeWish, addWish}}>
      {children}
    </HousingContext.Provider>
  )
}