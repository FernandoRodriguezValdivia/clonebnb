'use client'

import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filterReducer';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    search: '',
    category: ''
  });

  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
