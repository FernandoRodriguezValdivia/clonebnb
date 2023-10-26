export const DescriptionCard = ({stay}) =>{
  return (
    <div className="absolute w-11/12 bg-white bottom-2 rounded-1xs px-2 py-1 shadow overflow-hidden">
      <h2
        className="line-clamp-1 text-base font-medium md:text-sm"
        title={stay.titulo}
      >
        {stay.titulo}
      </h2>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p className="line-clamp-1 text-xs mt-1">
          {stay.provincia},{stay.ciudad},{stay.pais}
        </p>
      </div>
      <div className="flex justify-end mt-1">
        <p className="whitespace-nowrap font-semibold leading-tight">
          <span className="text-sm">$ </span>
          <span className="text-base">{stay.tarifa}</span>
          <span className="text-xs"> / Noche</span>
        </p>
      </div>
    </div>
  );
}