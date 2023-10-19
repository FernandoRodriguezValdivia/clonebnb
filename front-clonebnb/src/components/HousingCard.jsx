import Image from "next/image";

export const HousingCard = ({stay})=>{
  return (
    <div className="flex justify-center w-full h-64 relative rounded-1xs overflow-hidden">
      <button className="absolute z-20 top-2 right-2 rounded-2lg flex items-center justify-center bg-white p-2 text-brand-500 hover:cursor-pointer">
        <div className="text-xl">
          <svg
            stroke="black"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
            ></path>
          </svg>
        </div>
      </button>
      <div className="absolute w-11/12 bg-white bottom-2 rounded-1xs p-2 shadow overflow-hidden">
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
      <a href="#" className="w-full">
        <div className="w-full h-full">
          <picture>
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          </picture>
        </div>
      </a>
    </div>
  );
}