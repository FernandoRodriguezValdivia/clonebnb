import { useEffect, useState } from "react";

export const UserNav = ()=>{
   const [login, setLogin] = useState(false);
   const [signup, setSignup] = useState(false);

   const openLogin = () => {
     setLogin(true);
   };

   const openSignup = () => {
     setSignup(true);
   };

   const closeAll = () => {
     setLogin(false);
     setSignup(false);
   };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (e.target.closest('#nav-user') === null) {
        setLogin(false);
        setSignup(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div
        id="nav-user"
        className="absolute w-44 z-30 right-2 top-12 grid bg-white outline outline-1 outline-opacity shadow-lg rounded-1xs overflow-hidden"
      >
        <button
          className="text-left py-2 px-3 hover:bg-opacity"
          onClick={openLogin}
        >
          Login
        </button>
        <button
          className=" text-left py-2 px-3 hover:bg-opacity"
          onClick={openSignup}
        >
          Sign up
        </button>
      </div>

      {/* {login && <h2 className="absolute z-40 top-0">login</h2>}
      {signup && <h2 className="absolute z-40 top-0">Signup</h2>} */}
    </>
  );
}