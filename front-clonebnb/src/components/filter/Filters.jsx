import { Categories } from "./Categories";
import { Search } from "./Search";

export const Filters = async ()=>{
  return (
    <section className="fixed top-36 sm:top-24 z-20 bg-white mb-6 gap-8 px-4 grid justify-items-center">
      <Search/>
      <Categories/>
    </section>
  );
}