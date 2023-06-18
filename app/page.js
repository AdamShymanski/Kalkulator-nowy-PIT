import { SlCalculator } from "react-icons/sl";
import { BsArrow90DegDown } from "react-icons/bs";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-24 justify-items-start align-top min-w-screen min-h-screen overflow-auto">
      <div className={"absolute top-20 left-24 w-40 min-h-screen"}>
        <Image src="/logo.png" width={660} height={286} alt="logo" />
      </div>

      <div className="flex max-h-fit">
        <div className="flex flex-col w-2/5 max-h-fit">
          <text className="text-white text-8xl font-light font-serif mt-64">
            Sprawdź ile możesz zyskać
          </text>
          <text className="text-gray-400 text-xl font-light mt-4">
            Etiam fringilla venenatis nunc, vel ullamcorper arcu. In ipsum arcu,
            faucibus quis elementum vitae, bibendum a nisi. Fusce sed sagittis
            arcu. Nam interdum magna a eros blandit, id consectetur nulla
            vestibulum. Curabitur sed lorem quis lacus vulputate iaculis. Proin
            laoreet fringilla lorem, ut gravida orci gravida ac.
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
        <div className={"w-3/5"}>
          <Image src="/hero.png" width={2220} height={2135} alt="hero" />
        </div>
      </div>
    </main>
  );
}
