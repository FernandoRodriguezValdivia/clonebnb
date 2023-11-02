'use client'

import { useFilter } from "@/context/FilterProvider";
import { TYPES } from "@/reducers/filterReducer";
import { IconsCategories } from "./IconsCategories";

export const ButtonCategory = ({cat}) => {
  const { filter, dispatchFilter } = useFilter();

  const categoryFiltered = (e) => {
    const category = e.target.value;
    const newCatSelected = parseInt(category);
    dispatchFilter({ type: TYPES.CATEGORY, payload: newCatSelected });
    e.preventDefault();
  };

  const categorySelect = filter.category;
  return (
    <button
      className={`min-w-max grid grid-rows-2 justify-items-center gap-2 pt-3 px-1 text-xs font-semibold hover:opacity-100 ${
        categorySelect === cat.id ? 'opacity-100' : 'opacity-60'
      }`}
      type="button"
      onClick={categoryFiltered}
      value={cat.id}
    >
      <IconsCategories catId={cat.title} />
      {cat.title}
    </button>
  );
};
