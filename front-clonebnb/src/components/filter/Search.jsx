'use client'

import { useFilter } from "@/context/FilterProvider";
import { TYPES } from "@/reducers/filterReducer";

export const Search = () =>{
  const {filter, dispatchFilter} = useFilter()

  const searchFiltered = (e) => {
    const searchBook = e.target.value;
    dispatchFilter({ type: TYPES.SEARCH, payload: searchBook });
  };

  return (
    <label className="w-full sm:max-w-sm flex items-center outline outline-1 outline-opacity rounded-2lg px-5 shadow focus-within:bg-opacity overflow-hidden">
      <div className="">
        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          stroke="#1F1F1F"
          strokeWidth="4"
          fill="none"
        >
          <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search destinations"
        value={filter.search}
        onChange={searchFiltered}
        className="w-full h-full py-3 pl-3 text-sm outline-none focus-within:bg-opacity"
      />
    </label>
  );
}