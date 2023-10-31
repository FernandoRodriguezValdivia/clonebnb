'use client';

import { useFilter } from '@/context/FilterProvider';
import { TYPES } from '@/reducers/filterReducer';

export const ButtonAllCategories = () => {
  const { filter, dispatchFilter } = useFilter();

  const categoryFiltered = (e) => {
    const category = e.target.value;
    dispatchFilter({ type: TYPES.CATEGORY, payload: category });
    e.preventDefault();
  };

  const catAll = parseInt(filter.category);

  return (
    <button
      className={`min-w-max text-center flex gap-2 pt-3 pb-1 px-1 opacity-70 text-xs font-bold hover:opacity-100 ${
        catAll === 0 && 'opacity-100'
      }`}
      type="button"
      onClick={categoryFiltered}
      value={0}
    >
      Todos
    </button>
  );
};
