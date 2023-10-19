'use client';

import Link from 'next/link';
import { useState } from 'react';

export const UserMenu = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event) => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    if (!showMenu) {
      return;
    }

    const target = event.target;
    const menu = document.querySelector('.menu');

    if (!menu.contains(target)) {
      setShowMenu(false);
    }
  };

  return (
    <div className="relative">
      <button type="button" className="flex items-center" onClick={handleClick}>
        <div className="block h-8 w-8">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              height: '100%',
              width: '100%',
              fill: 'currentcolor'
            }}
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </svg>
        </div>
      </button>
      {showMenu && (
        <div className="absolute w-44 z-30 right-2 top-12 flex flex-col bg-white shadow-2xl rounded-1xs overflow-hidden">
          <Link className="py-2 px-3 hover:bg-gray" href="/login">Login</Link>
          <Link className="py-2 px-3 hover:bg-gray" href="/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
};
