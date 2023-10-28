import Link from "next/link";
import { ButtonCard } from "../content/ButtonCard";

export const ImageContainer = ()=>{
  return (
    <>
      <div className="flex relative w-full h-full aspect-square max-w-[656px] sm:max-h-[472px] md:rounded-r-1xs 2xl:rounded-1xs overflow-hidden">
        <div>
          <Link
            href="/"
            className="absolute z-20 top-5 left-2 rounded-2lg flex items-center justify-center bg-white text-brand-500 hover:cursor-pointer sm:hidden"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 p-2"
            >
              <path
                d="M12 2L2 12L12 22"
                stroke="#1F1F1F"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
            </svg>
          </Link>
          <ButtonCard/>
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