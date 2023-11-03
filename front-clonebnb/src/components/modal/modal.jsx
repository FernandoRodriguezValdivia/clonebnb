import Link from 'next/link';
import React from 'react';
import ConfirmReservation from '../ConfirmReservation/ConfirmReservation';

const CustomModal = ({ detail, closeModal }) => {
   

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75`}
    >
      <div className="bg-white w-96 p-9 rounded-1xs" style={{ overflow: 'scroll', height: 700 }}>
        <ConfirmReservation detail={detail} closeModal={closeModal}/>
      </div>
    </div>
  );
};

export default CustomModal;
