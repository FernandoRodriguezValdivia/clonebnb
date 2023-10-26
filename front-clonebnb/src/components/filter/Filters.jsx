import { Categories } from "./Categories";
import { Search } from "./Search";

export const Filters = async ()=>{
  return (
    <section className="mb-6 gap-8 grid justify-center justify-items-center">
      <Search/>
      <Categories/>
    </section>
  );
}