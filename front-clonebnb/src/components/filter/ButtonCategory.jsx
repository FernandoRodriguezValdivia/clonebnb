'use client'

import { useFilter } from "@/context/FilterProvider";
import { TYPES } from "@/reducers/filterReducer";

export const ButtonCategory = ({cat}) => {
  const { filter, dispatchFilter } = useFilter();

  const categoryFiltered = (e) => {
    const category = e.target.value;
    dispatchFilter({ type: TYPES.CATEGORY, payload: category });
    e.preventDefault();
  };

  const catSelected = parseInt(filter.category);
  
  return (
    <button
      className={`min-w-max flex flex-col gap-2 pt-3 pb-1 px-1 opacity-60 text-xs font-bold hover:opacity-100 ${
        catSelected === cat.id && 'opacity-100'
      }`}
      type="button"
      onClick={categoryFiltered}
      value={cat.id}
    >
      {cat.title}
    </button>
  );
};