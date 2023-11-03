'use client';

import { useFilter } from '@/context/FilterProvider';
import { TYPES } from '@/reducers/filterReducer';
import { MdOutlineOtherHouses } from 'react-icons/md';

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
      className={`grid grid-rows-2 justify-items-center gap-2 min-w-max text-center pt-3 px-1 text-xs font-semibold hover:opacity-100 ${
        catAll === 0 ? 'opacity-100 border-b-2 border-black' : 'opacity-60'
      }`}
      type="button"
      onClick={categoryFiltered}
      value={0}
    >
      <MdOutlineOtherHouses className="text-[1.4rem] pointer-events-none" />
      Todos
    </button>
  );
};
