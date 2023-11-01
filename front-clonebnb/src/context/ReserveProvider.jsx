'use client';

import { createContext, useContext, useState } from 'react'

const ReserveContext = createContext();

export function useReserve() {
  return useContext(ReserveContext);
}

export const ReserveProvider = ({ children }) => {

  const [color, setColor] = useState('red');

  return (
    <ReserveContext.Provider value={{ color, setColor }}>
      {children}
    </ReserveContext.Provider>
  );
};
