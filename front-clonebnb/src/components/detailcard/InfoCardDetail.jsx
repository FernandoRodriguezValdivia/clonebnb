'use client'

import { useState } from "react";
//import Link from "next/link";
import { InfoDetailServices } from "./InfoDetailServices";
import CustomModal from "../modal/modal";

export const InfoCardDetail = ({detail})=>{
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };



  return (
    <section className="md:w-1/2 md:min-w-[280px] grid md:justify-center gap-6 px-4 sm:pl-0">
      <div>
        <h2 className="font-bold text-lg">{detail?.titulo}</h2>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 mr-1"
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
          <p className="line-clamp-1 text-xs">
            {detail?.estado}, {detail?.ciudad}, {detail?.pais}
          </p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Descripción</h4>
        <p className="max-w-sm text-sm">{detail?.descripcion}</p>
      </div>
      <InfoDetailServices detail={detail} />
      <div className="fixed sm:relative z-20 bottom-0 left-0 right-0 w-full bg-white flex items-center justify-between px-4 sm:px-2 pt-3 pb-5 border-gray border-t-[1px]">
        <section>
          <span className="text-xs">Desde</span>
          <h3 className="text-base font-bold">
            ${detail?.tarifa}{' '}
            <span className="text-xs font-normal">/ Noche</span>
          </h3>
        </section>

    
        



          <div className="text-center mt-16">
          <button onClick={openModal} className="bg-green py-1 px-3 rounded-2lg text-white">
            Reservar
          </button>
      <CustomModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>

      
      </div>
    </section>
  );
}