'use client';

import { useFilter } from '@/context/FilterProvider';
import { TYPES } from '@/reducers/filterReducer';

export const ButtonAllCategories = () => {
  const { filter, dispatchFilter } = useFilter();

  const categoryFiltered = (e) => {
    const category = e.target.value;
    const allCategories = parseInt(category)
    dispatchFilter({ type: TYPES.CATEGORY, payload: allCategories });
    e.preventDefault();
  };

  const catAll = filter.category;

  return (
    <button
      className={`min-w-max text-center flex gap-2 pt-3 pb-1 px-1 text-xs font-bold hover:opacity-100 ${
        catAll === 0 ? 'opacity-100' : 'opacity-60'
      }`}
      type="button"
      onClick={categoryFiltered}
      value={0}
    >
      Todos
    </button>
  );
};
