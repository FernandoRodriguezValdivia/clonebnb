"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const {data: session, status } = useSession();

  console.log({ session, status });


  if (session) {
    return (
      <>
        
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-700 font-bold px-4 rounded "
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
     
      <button
        onClick={() => signIn()}
        className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
      >
        Sign in
      </button>
    </>
  );
}