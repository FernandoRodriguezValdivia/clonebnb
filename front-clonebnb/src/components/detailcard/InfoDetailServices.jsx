export const InfoDetailServices = ({detail}) => {
  return (
    <div>
      <h4 className="font-bold mb-4">Servicios Disponibles</h4>
      <ul className="grid grid-cols-2 gap-5 items-end text-sm">
        <li className="flex flex-wrap items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"
            />
          </svg>
          <span>Cap. {detail?.capacidad} Personas</span>
        </li>
        <li className="flex flex-wrap items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M14 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5v-5ZM13 3H6.14a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 0 0 1 1v-3H3.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H15V8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4H13V3Zm2 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-8 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
            />
          </svg>
          <span>
            {detail?.estacionamiento ? (
              <span>Estacionamiento</span>
            ) : (
              <span className="line-through">Estacionamiento</span>
            )}
          </span>
        </li>
        <li className="flex flex-wrap items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M13.5 3a2.5 2.5 0 0 1 2.495 2.336L16 5.5v2.55a2.501 2.501 0 0 1 1.994 2.279L18 10.5v6a.5.5 0 0 1-.992.09L17 16.5V14H3v2.5a.5.5 0 0 1-.992.09L2 16.5v-6a2.5 2.5 0 0 1 2-2.45V5.5a2.5 2.5 0 0 1 2.336-2.495L6.5 3h7Zm2 6h-11a1.5 1.5 0 0 0-1.493 1.355L3 10.5V13h14v-2.5a1.5 1.5 0 0 0-1.355-1.493L15.5 9Zm-2-5h-7a1.5 1.5 0 0 0-1.493 1.356L5 5.5V8h1v-.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .5.5V8h1v-.5A.5.5 0 0 1 11 7h2.5a.5.5 0 0 1 .5.5V8h1V5.5a1.5 1.5 0 0 0-1.355-1.493L13.5 4Z"
            />
          </svg>
          <span>{detail?.numeroHabitaciones} Habitaciones</span>
        </li>
        <li className="flex flex-wrap items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21Zm-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1Z"
            />
          </svg>
          {detail?.wifi ? (
            <span>Wifi</span>
          ) : (
            <span className="line-through">Wifi</span>
          )}
        </li>
      </ul>
    </div>
  );
}