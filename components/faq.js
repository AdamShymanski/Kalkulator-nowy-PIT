import React, { useState } from "react";
import Image from "next/image";

import { PiCaretDown } from "react-icons/pi";

export default function FAQ() {
  return (
    <div className="flex flex-col w-full items-center relative -top-8">
      <div className="flex flex-col w-full items-center absolute top-14">
        <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
          <div className="flex items-center justify-items-center">
            <div className="px-3 flex items-center bg-black-800 rounded">
              <PiCaretDown size={"30"} className="text-blue-400" />
            </div>
            <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular text-gray-200">
              Jak mogę pomóc?
            </text>
          </div>
        </div>
        <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
          <div className="flex items-center justify-items-center">
            <div className="px-3 flex items-center bg-black-800 rounded">
              <PiCaretDown size={"30"} className="text-blue-400" />
            </div>
            <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular  text-gray-200">
              Kto nadzoruje projekt?
            </text>
          </div>
        </div>
        <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
          <div className="flex items-center justify-items-center">
            <div className="px-3 flex items-center bg-black-800 rounded">
              <PiCaretDown size={"30"} className="text-blue-400" />
            </div>
            <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular  text-gray-200">
              Gdzie mogę policzyć mój PIT?
            </text>
          </div>
        </div>
        <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
          <div className="flex items-center justify-items-center">
            <div className="px-3 flex items-center bg-black-800 rounded">
              <PiCaretDown size={"30"} className="text-blue-400" />
            </div>
            <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular  text-gray-200">
              Kiedy projekt wejdzie w życie?
            </text>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <Image src="/capb.png" width={1170} height={1295} alt="hero" />
      </div>
    </div>
  );
}
