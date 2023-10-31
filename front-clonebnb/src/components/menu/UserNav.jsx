'use client'

import Link from "next/link";
import ButtonAuth from "../buttonsAction/ButtonAuth";
import ButtonSignup from "../buttonsAction/ButtonSignup";
import { useSession } from "next-auth/react";

export const UserNav = ()=>{
  const { data: session, status } = useSession();

  return (
    <>
      <div className="absolute w-44 z-40 right-6 top-32 sm:top-20 sm:right-8 grid bg-white outline outline-1 outline-opacity shadow-lg rounded-1xs overflow-hidden">
        {session &&
        <Link className="text-sm text-left py-2 px-3 hover:bg-opacity" href="/trips">
          Tus Viajes
        </Link>
        }
        <ButtonSignup />
        <ButtonAuth />
      </div>
    </>
  );
}