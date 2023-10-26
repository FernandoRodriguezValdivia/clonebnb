import Link from "next/link";

export const ImageContainer = ()=>{
  return (
    <>
      <div className="flex relative w-full h-full aspect-square max-w-[656px] sm:max-h-[472px] md:rounded-r-1xs 2xl:rounded-1xs overflow-hidden">
        <div>
          <Link href="/" className="absolute z-20 top-4 left-2 rounded-2lg flex items-center justify-center bg-white p-2 text-brand-500 hover:cursor-pointer sm:hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 12L12 22"
                stroke="#1F1F1F"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
            </svg>
          </Link>
          <button className="absolute z-20 top-4 right-2 rounded-2lg flex items-center justify-center bg-white p-2 text-brand-500 hover:cursor-pointer">
            <div className="text-xl">
              <svg
                stroke="black"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <span className="absolute z-10 bottom-3 right-4 rounded-2lg flex items-center justify-center bg-black text-white text-xs px-3 py-1 text-brand-500 hover:cursor-pointer">
          1 / 3
        </span>
        <div className="w-full h-full">
          <picture>
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </picture>
        </div>
      </div>
    </>
  );
}