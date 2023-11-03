import Link from 'next/link';
import React from 'react';

const CustomModal = ({ isOpen }) => {
   

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center px-3 z-50 bg-black bg-opacity-75 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="bg-white  w-96 p-9 rounded-1xs ">
      <div className=" text-center bg-green text-lg font-bold rounded-1xs "  role="alert">
  <p>Propiedad Reservada!</p>
</div>   

<Link href='/'>

        <button className="mt-8 bg-gray py-2 px-4 rounded-1xs " >
          Seguir viendo propiedades
        </button>
</Link>
      </div>
    </div>
  );
};

export default CustomModal;
