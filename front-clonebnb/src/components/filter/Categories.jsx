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
    <div className="w-full justify-self-start flex gap-5 mb-4 overflow-x-auto scroll-style">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="flex flex-col gap-2 pt-3 pb-1 px-1 opacity-70 hover:opacity-100"
        >
          <span className="min-w-max text-xs font-bold">{cat.title}</span>
        </button>
      ))}
    </div>
  );
};
