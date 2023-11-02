'use client';

import { createContext, useContext, useState } from 'react'

const ReserveContext = createContext();

export function useReserve() {
  return useContext(ReserveContext);
}

export const ReserveProvider = ({ children }) => {

  const [getHome, setHome] = useState([]);


  const addTo  = (property) =>{
    

  }

  return (
    <ReserveContext.Provider value={{getHome, addTo}}>
      {children}
    </ReserveContext.Provider>
  );
};
