import { ButtonAllCategories } from "./ButtonAllCategories";
import { ButtonCategory } from "./ButtonCategory";

async function getCategories() {
  const res = await fetch(
    'https://c14-04-m-node-react-production.up.railway.app/api/v1/category/getCategory',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Categories = async () => {
  const response = await getCategories();
  const categories = response.data.categories;

  return (
    <div className="w-full flex xl:justify-center gap-5 mb-1 overflow-x-auto scroll-style">
      <ButtonAllCategories/>
      {categories.map((cat) => (
        <ButtonCategory key={cat.id} cat={cat}/>
      ))}
    </div>
  );
};
