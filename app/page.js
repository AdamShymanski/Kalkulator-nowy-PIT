import { SlCalculator } from "react-icons/sl";
import { BsArrow90DegDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-24 justify-items-start align-top min-w-screen min-h-screen overflow-auto max-w-screen">
      <div className={"absolute top-20 left-24 w-40"}>
        <Image src="/logo.png" width={660} height={286} alt="logo" />
      </div>
      <button className={"absolute top-20 right-8"}>
        <RxHamburgerMenu size="32" />
      </button>
      <div className="absolute inset-y-1/2 -right-56 flex flex-row -rotate-90 text-white font-regular min-w-screen max-h-min gap-x-12 ">
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

      <div className="flex max-h-fit items-center">
        <div className="flex flex-col w-2/5 max-h-fit justify-items-center">
          <text className="text-white text-8xl font-light font-serif mt-32">
            Sprawdź ile możesz zyskać
          </text>
          <text className="text-gray-400 text-xl font-light mt-6">
            Etiam fringilla venenatis nunc, vel ullamcorper arcu. In ipsum arcu,
            faucibus quis elementum vitae, bibendum a nisi. Fusce sed sagittis
            arcu. Nam interdum magna a eros blandit.
          </text>

          <div className="flex space-x-4 mt-12">
            <button className="flex text-lg rounded font-medium px-6 py-2 text-gray-400 shrink max-w-max space-x-3 border border-gray-400 ">
              <BsArrow90DegDown size={"24"} className="relative top-[4px]" />
              <text className="relative top-[-1px]">Czytaj dalej</text>
            </button>
            <button className="flex align-middle justify-content-middle text-lg rounded font-semibold px-6 py-2 bg-gradient-to-r to-g1 from-g2 text-black max-w-max space-x-3">
              <SlCalculator size={"24"} className="relative top-[2px]" />
              <text>Kalkulator</text>
            </button>
          </div>
        </div>
        <div className={"w-3/5 max-h-fit"}>
          <Image src="/hero.png" width={2220} height={2135} alt="hero" />
        </div>
      </div>
    </main>
  );
}
