import { SlCalculator } from "react-icons/sl";
import { BsArrow90DegDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-6 items-center min-w-screen min-h-screen overflow-auto w-screen overflow-x-hidden overflow-y-auto">
      <div className={"absolute top-5 left-6 w-28"}>
        <Image src="/logo.png" width={660} height={286} alt="logo" />
      </div>
      <button className={"absolute top-6 right-8"}>
        <RxHamburgerMenu size="32" />
      </button>
      <div className="absolute md:flex hidden inset-y-1/2 -right-56 flex-row -rotate-90 text-white font-regular min-w-screen max-h-min gap-x-12">
        <div className="flex flex-row  gap-x-3 border-transparent hover:border-accent hover:text-accent border-b-2 pb-2 px-4 ease-out hover:ease-in duration-300">
          <BiHomeAlt2 size={"20"} className="text-accent" />
          <text>Główna</text>
        </div>
        <div className="flex flex-row  gap-x-3 border-transparent hover:border-accent hover:text-accent border-b-2 pb-2 px-4 ease-out hover:ease-in duration-300">
          <SlCalculator size={"20"} />
          <text>Kalkulator</text>
        </div>
        <div className="flex flex-row  gap-x-3 border-transparent hover:border-accent hover:text-accent border-b-2 pb-2 px-4 ease-out hover:ease-in duration-300">
          <AiOutlineTeam size={"20"} />
          <text>Dołącz do nas</text>
        </div>
      </div>

      <div className="flex justify-items-center items-center relative mt-32 w-screen">
        <text className="text-[24vw] font-light font-serif absolute text-center w-screen bg-gradient-to-r from-g1 via-sky-600 to-g2 text-transparent bg-clip-text bg-300% animate-gradient">
          ZMIANY
        </text>
        <div className="w-full">
          <Image
            src="/proste-wielkie.png"
            width={976}
            height={432}
            alt="img"
          />
        </div>
      </div>

      <text className="text-gray-400 text-base font-light mt-6 text-center w-11/12">
        Przełomowa propozycja mające na celu stworzenie bardziej sprawiedliwego
        i prostszego systemu podatkowego.
      </text>

      <div className="flex space-x-4 mt-12">
        <button className="flex items-center justify-items-center rounded font-medium px-4 py-1 max-w-fit space-x-3 border  text-gray-100">
          <VscGithub size={"20"} className="relative" />
          <text className="relative text-base">Projekt</text>
        </button>
        <button className="flex items-center justify-content-center rounded font-semibold px-4 py-1 max-w-fit bg-accent text-black space-x-3">
          <SlCalculator size={"16"} className="relative text-sm" />
          <text className="relative text-base">Kalkulator</text>
        </button>
      </div>

      {/* <div className="w-screen mt-14">
        <Image src="/hero-w.png" width={780} height={405} alt="hero" />
      </div> */}

      <div className="w-full mt-12 flex flex-col">
        <text className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-g2 to-g1 max-w-min">
          Założenia
        </text>
        <text className="font-semibold text-3xl">Venenatis Nunc</text>
        <text className="font-light mt-3 text-gray-400">
          Etiam fringilla venenatis nunc, vel ullamcorper arcu. In ipsum arcu,
          faucibus quis elementum vitae, bibendum a nisi.
        </text>
      </div>
      <div className="w-screen mt-8">
        <Image src="/capa.png" width={780} height={608} alt="hero" />
      </div>
      <div className="w-full mt-12 flex flex-col">
        <text className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-g2 to-g1 max-w-min">
          Założenia
        </text>
        <text className="font-semibold text-3xl">Venenatis Nunc</text>
     
      </div>
      <div className="w-screen mt-8">
        <Image src="/papers.png" width={780} height={276} alt="hero" />
      </div>
    
    </main>
  );
}
