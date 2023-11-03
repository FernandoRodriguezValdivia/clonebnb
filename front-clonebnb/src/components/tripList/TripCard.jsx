export const TripCard = ({trip}) => {

  const dateIn = trip.checkin;
  const newDate = new Date(dateIn);
  const dayName = newDate.toLocaleString('es-ES', { weekday: 'short' });
  const month = newDate.toLocaleString('es-ES', { month: 'short' });
  const day = newDate.getDay();
  const year = newDate.getFullYear();

  const hourIn = newDate.getHours()
  const minutesIn = newDate.getMinutes()

  const dateOut = trip.checkout;
  const outDate = new Date(dateOut);
  const hourOut = outDate.getHours()
  const minutesOut = outDate.getMinutes()

  return (
    <div className="min-w-sm grid gap-4 items-center px-6 py-3 outline outline-1 outline-opacity shadow-md border-l-[3px] border-green">
      <div className="flex justify-between border-b border-opacity pb-2">
        <span className="text-xs text-gray">Check in</span>
        <span className="text-xs text-gray">Check out</span>
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
            {dayName}, {month} {day}, {year}
          </h3>
          <h3 className="text-right font-medium">
            {hourOut}:{minutesOut}{' '}
            <span className="text-xs">{hourOut <= 12 ? 'AM' : 'PM'}</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium">
          Total price: $<span className="text-base"> {trip.price}</span>
        </span>
        <span className="text-xs font-medium">
          Persons: <span className="text-base">{trip.persons}</span>
        </span>
      </div>
    </div>
  );
};
