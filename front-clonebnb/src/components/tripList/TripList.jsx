export const TripList = () => {
  return (
    <div className="w-fit grid grid-rows-2 items-center px-4 pb-3 outline outline-1 outline-opacity shadow-md border-l-[3px] border-green">
      <h3 className="border-b border-opacity pb-2 text-xs font-semibold">
        Wed, Aug 13, 2021
      </h3>
      <div className="flex gap-8 border-b border-opacity pb-4">
        <div>
          <span className="text-xs text-gray">Check in</span>
          <h2 className="font-medium">
            9:000 <span className="text-xs">AM</span>
          </h2>
        </div>
        <div>
          <span className="text-xs text-gray">Check out</span>
          <h2 className="font-medium">
            5:000 <span className="text-xs">PM</span>
          </h2>
        </div>
        <div>
          <span className="text-xs text-gray">Persons</span>
          <h2 className="font-medium">8</h2>
        </div>
      </div>
      <h2 className="text-xs pt-4">
        <span className="font-medium">Total price:</span> $60
      </h2>
    </div>
  );
}