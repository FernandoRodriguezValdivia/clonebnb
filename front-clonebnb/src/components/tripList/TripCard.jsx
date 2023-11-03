export const TripCard = ({trip}) => {
  
  const dateIn = trip.createdAt;
  const newDate = new Date(dateIn);
  const dayName = newDate.toLocaleString('es-ES', { weekday: 'short' });
  const month = newDate.toLocaleString('es-ES', { month: 'short' });
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const hourIn = newDate.getHours()
  const minutesIn = newDate.getMinutes()

  const dateOut = trip.endDate;
  const newDateOut = new Date(dateOut);
  const dayNameOut = newDateOut.toLocaleString('es-ES', { weekday: 'short' });
  const monthOut = newDateOut.toLocaleString('es-ES', { month: 'short' });
  const dayOut = newDateOut.getDate();
  const yearOut = newDateOut.getFullYear();

  const hourOut = 22
  const minutesOut = '00'

  return (
    <div className="min-w-sm grid gap-4 items-center px-6 py-3 outline outline-1 outline-opacity shadow-md border-l-[3px] border-green">
      <div className="flex justify-between border-b border-opacity pb-2">
        <span className="text-xs text-gray">Llegada</span>
        <span className="text-xs text-gray">Salida</span>
      </div>
      <div className="flex justify-between gap-8 border-b border-opacity pb-4">
        <div>
          <h3 className="text-xs font-semibold capitalize">
            {dayName}, {month} {day}, {year}
          </h3>
          <h2 className="font-medium">
            {hourIn}:{minutesIn}{' '}
            <span className="text-xs">{hourIn >= 13 ? 'PM' : 'AM'}</span>
          </h2>
        </div>
        <div>
          <h3 className="text-right text-xs font-semibold capitalize">
            {dayNameOut}, {monthOut} {dayOut}, {yearOut}
          </h3>
          <h3 className="text-right font-medium">
            {hourOut}:{minutesOut}{' '}
            <span className="text-xs">{hourOut <= 12 ? 'AM' : 'PM'}</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium">
          Total: $<span className="text-base"> {trip.totalPrice}</span>
        </span>
        <span className="text-xs font-medium">
          Personas: <span className="text-base">{trip.quantityVisitors}</span>
        </span>
      </div>
    </div>
  );
};
