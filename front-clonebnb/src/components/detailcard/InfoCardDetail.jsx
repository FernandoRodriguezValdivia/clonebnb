export const InfoCardDetail = ()=>{
  return (
    <section className="md:w-1/2 md:min-w-[280px] grid md:justify-center gap-6 px-4 sm:pl-0">
      <div>
        <h2 className="font-bold text-lg">Accommodation title</h2>
        <p className="text-sm">State, City, Country</p>
      </div>
      <div>
        <span></span>
        <div>
          <h4 className="font-bold">Hosted by</h4>
          <span className="line text-sm">Host Name</span>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Description</h4>
        <p className="max-w-sm text-sm">
          Lorem ipsum dolor sit amet consectetur, Magnam odio eveniet et cum,
          nostrum fugiat accusantium, quidem reprehenderit ex officia
          voluptatibus consequatur nihil!
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Services</h4>
        <ul className="grid grid-cols-2 gap-5 text-base">
          <li>
            <span></span>
            <span>0 Guests</span>
          </li>
          <li>
            <span></span>
            <span>Parking</span>
          </li>
          <li>
            <span></span>
            <span>Bedrooms</span>
          </li>
          <li>
            <span></span>
            <span>Wifi</span>
          </li>
        </ul>
      </div>
      <div className="fixed sm:relative z-20 bottom-0 left-0 right-0 w-full bg-white flex items-center justify-between px-4 sm:px-2 pt-3 pb-5 border-gray border-t-[1px]">
        <section>
          <span className="text-sm">From</span>
          <h3 className="text-lg font-bold">
            $100 <span className="text-sm font-normal">/ Night</span>
          </h3>
        </section>
        <button className="bg-green py-1 px-3 rounded-1xs text-white">
          Reserve
        </button>
      </div>
    </section>
  );
}