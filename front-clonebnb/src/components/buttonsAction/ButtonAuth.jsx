'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="text-sm text-left py-2 px-3 hover:bg-opacity"
        >
          Cerrar sesión
        </button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="text-sm text-left py-2 px-3 hover:bg-opacity"
      >
        Inicia sesión
      </button>
    </>
  );
}
