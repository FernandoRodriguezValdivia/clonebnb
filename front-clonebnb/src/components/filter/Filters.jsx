import { Categories } from "./Categories";
import { Search } from "./Search";

export const Filters = ()=>{
  return (
    <section className="w-full fixed top-36 sm:top-20 z-20 bg-white mb-6 gap-7 py-4 px-6 grid justify-items-center max-w-screen-2xl">
      <Search />
      <Categories />
    </section>
  );
}