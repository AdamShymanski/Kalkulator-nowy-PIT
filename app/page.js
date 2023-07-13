"use client";

import { SlCalculator } from "react-icons/sl";
import { BsArrow90DegDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

// import { LiaHandshakeSolid } from "react-icons/lia";
// import { HiOutlinePuzzlePiece } from "react-icons/hi";
import { PiScalesThin } from "react-icons/pi";
import { PiHandshakeThin } from "react-icons/pi";
import { PiPuzzlePieceThin } from "react-icons/pi";

import { PiCaretDownThin } from "react-icons/pi";

import Image from "next/image";
import React, { useState } from "react";
import FAQ from "../components/faq";

export default function Home() {
  return (
    <main className="flex flex-col px-6 items-center overflow-x-hidden w-screen overflow-y-auto ">
      <div className={"absolute top-5 left-6 w-28"}>
        <Image src="/logo.png" width={660} height={286} alt="logo" />
      </div>
      {/* <div className={"absolute top-0 right-0 w-[50vw]"}>
        <Image src="/tr.png" width={354} height={442} alt="logo" />
      </div> */}
      <button className={"absolute top-6 right-8 "}>
        <RxHamburgerMenu size="32" />
      </button>
      {/* <div className="absolute md:flex hidden inset-y-1/2 -right-56 flex-row -rotate-90 text-white font-regular min-w-screen max-h-min gap-x-12">
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
      </div> */}

      <div className="flex justify-items-center items-center relative mt-32 w-screen">
        <text className="text-[24vw] lg:text-[12vw] font-light font-serif absolute text-center w-screen bg-gradient-to-r from-indigo-700 via-g1 to-g2 text-transparent bg-clip-text bg-300% animate-gradient">
          ZMIANY
        </text>
        <div className="w-full">
          <Image
            src="/proste-wielkie3.png"
            width={1261}
            height={432}
            alt="img"
          />
        </div>
        {/* <div className="w-full">
          <Image src="/hero.png" width={1261} height={432} alt="img" />
        </div> */}
      </div>

      <text className="text-gray-400 text-base font-light mt-6 text-center w-11/12">
        Przełomowa propozycja mające na celu stworzenie bardziej sprawiedliwego
        i prostszego systemu podatkowego.
      </text>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/ProjektyUstaw/Ustawy-o-PIT">
          <button className="flex items-center justify-items-center rounded font-medium px-4 py-1 max-w-fit space-x-3 border  text-gray-100">
            <VscGithub size={"20"} className="relative" />
            <text className="relative text-base">Projekt</text>
          </button>
        </a>

        <button className="flex items-center justify-content-center rounded font-semibold px-4 py-1 max-w-fit bg-accent text-black space-x-3">
          <SlCalculator size={"16"} className="relative text-sm" />
          <text className="relative text-base">Kalkulator</text>
        </button>
      </div>

      {/* <div className="w-screen mt-14">
        <Image src="/hero-w.png" width={780} height={405} alt="hero" />
      </div> */}

      <div className="w-full mt-14 flex flex-col">
        <text className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-g2 to-g1 max-w-min">
          Założenia
        </text>
        <text className="font-semibold text-3xl">Nasz cel</text>
        <text className="font-light mt-3 text-gray-400">
          Skupiamy się na eliminacji zbędnych zawiłości i trudności, związanych
          z obliczeniami i formalnościami podatkowymi.
        </text>
      </div>
      <div className="flex flex-col items-center justify-content-center relative">
        <div className="absolute h-full flex items-center overflow-scroll w-screen gap-x-7 px-6 no-scrollbar scroll-smooth">
          <div className="flex-none px-3 py-3 w-80 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 drop-shadow-2xl">
            <div className="flex items-center mb-3">
              <div className="px-[8px] py-[8px] flex items-center justify-content-centerrounded bg-black-800 rounded">
                <PiScalesThin size={"55"} className="text-blue-400" />
              </div>
              <text className="font-serif ml-4 text-xl leading-tight drop-shadow-2xl font-light z-2 text-gray-200">
                Sprawiedliwość podstawą
              </text>
            </div>

            <text className="text-gray-300 text-xs font-extralight z-2 leading-1">
              Dążymy do równego traktowania wszystkich obywateli, sprawiedliwego
              podziału obciążeń podatkowych oraz do eliminacji ulg i
              lukratywnych schematów. Uczciwość to fundament naszej propozycji,
              gdzie każdy będzie mógł uczciwie przyczynić się do rozwoju naszego
              kraju.
            </text>
          </div>
          <div className="flex-none px-3 py-3 w-80 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 drop-shadow-2xl">
            <div className="flex items-center mb-3">
              <div className="px-[8px] py-[8px] flex items-center justify-content-centerrounded">
                <PiPuzzlePieceThin size={"55"} className="text-blue-400" />
              </div>
              <text className="font-serif ml-4 text-xl leading-tight drop-shadow-2xl font-light z-2">
                Szybko i bezproblemowo
              </text>
            </div>

            <text className="text-gray-300 text-xs font-extralight z-2 leading-1">
              Uproszczenia i intuicyjne rozwiązania sprawią, że wypełnianie
              zeznań podatkowych będzie przyjemne i bezproblemowe. Teraz każdy,
              niezależnie od swojej wiedzy podatkowej, będzie mógł samodzielnie
              poradzić sobie z rozliczeniem podatkowym, oszczędzając cenny czas
              i nerwy.
            </text>
          </div>
          <div className="flex-none px-3 py-3 w-80 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 drop-shadow-2xl">
            <div className="flex items-center mb-3">
              <div className="px-[8px] py-[8px] flex items-center justify-content-centerrounded">
                <PiHandshakeThin size={"55"} className="text-blue-400" />
              </div>
              <text className="font-serif ml-4 text-xl leading-tight drop-shadow-2xl font-light z-2">
                Dostosowane do Twojego życia
              </text>
            </div>

            <text className="text-gray-300 text-xs font-extralight z-2 leading-1">
              Rozwiązania podatkowe dostosowane do Twojego indywidualnego stylu
              życia. Bez względu na to, czy jesteś pracownikiem, przedsiębiorcą
              czy emerytem, Nowy PIT umożliwi Ci skuteczne i efektywne
              zarządzanie swoimi podatkami, dając Ci większą swobodę i pewność
              finansową.
            </text>
          </div>
        </div>
        <div className="w-screen">
          <Image src="/capa.png" width={1170} height={885} alt="hero" />
        </div>
      </div>

      <div className="w-full flex flex-col mt-12">
        <text className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-g2 to-g1 max-w-min">
          Wdrożenie
        </text>
        <text className="font-semibold text-3xl">Krop po kroku</text>
      </div>
      <div className="w-screen mt-3 mb-10">
        <Image src="/papers.png" width={780} height={276} alt="hero" />
      </div>

      <div className="flex align-baseline gap-x-6 mb-6">
        <div className="flex flex-col relative">
          <text className="text-2xl font-medium text-accent">01</text>
          <div className="w-7/12 border-r-[3px] h-full border-dashed aboslute mt-5 border-r-accent" />
        </div>

        <div className="flex flex-col">
          <text className="text-2xl  font-serif mb-2">Przygotowania ustaw</text>
          <text className="text-sm font-extralight text-gray-200">
            Przeprowadzamy konsultacje, analizy prawne i uwzględniamy opinie
            społeczne oraz specjalistów, aby tworzyć solidne rozwiązania.
            Wykorzystujemy platformy takie jak GitHub, aby umożliwić współpracę
            z innymi osobami i zbierać różnorodne perspektywy, co prowadzi do
            lepszych rezultatów.
          </text>
        </div>
      </div>
      <div className="flex align-baseline gap-x-6 mb-6">
        <div className="flex flex-col relative">
          <text className="text-2xl font-medium text-gray-500">02</text>
          <div className="w-7/12 border-r-[3px] h-full border-dashed aboslute mt-5 border-r-gray-500" />
        </div>
        <div className="flex flex-col">
          <text className="text-2xl font-serif mb-2">Zbierabnie podpisów</text>
          <text className="text-sm font-extralight text-gray-200">
            Organizujemy kampanie informacyjne oraz akcje społeczne, aby
            przedstawić nasze propozycje i przekonać ludzi do wsparcia naszych
            działań. Zbieranie podpisów jest kluczowym etapem, który umożliwi
            nam przedstawienie naszej inicjatywy w odpowiedniej instytucji i
            doprowadzi do dalszych procesów legislacyjnych.
          </text>
        </div>
      </div>
      <div className="flex align-baseline gap-x-6">
        <text className="text-2xl font-medium text-gray-500">03</text>
        <div className="flex flex-col">
          <text className="text-2xl font-serif mb-2">Głosowanie w sejmie</text>
          <text className="text-sm font-extralight text-gray-200">
            Przygotowujemy prezentacje, argumenty i analizy, które mają
            przekonać decydentów o korzyściach i ważności naszej inicjatywy.
            Pozytywne głosowanie w Sejmie umożliwi wprowadzenie naszego projektu
            w życie i realizację zmian w systemie podatkowym, które przyniosą
            korzyści wszystkim obywatelom.
          </text>
        </div>
      </div>

      <div className="w-full mt-12 flex flex-col">
        <text className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-g2 to-g1 max-w-min">
          FAQ
        </text>
        <text className="font-semibold text-3xl">Najczęstsze pytania</text>
        <text className="font-light mt-3 text-gray-400">
          Naszym celem jest zapewnienie przejrzystości i dostępności informacji,
          aby każdy obywatel mógł zdobyć niezbędne informacje dotyczące reformy.
        </text>
      </div>

      {/* <div className="flex flex-col w-full items-center relative -top-8">
        <div className="flex flex-col w-full items-center absolute top-14">
          <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
            <div className="flex items-center justify-items-center">
              <div className="px-3 flex items-center bg-black-800 rounded">
                <PiCaretDownThin size={"30"} className="text-blue-400" />
              </div>
              <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular text-gray-200">
                Jak mogę pomóc?
              </text>
            </div>
          </div>
          <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
            <div className="flex items-center justify-items-center">
              <div className="px-3 flex items-center bg-black-800 rounded">
                <PiCaretDownThin size={"30"} className="text-blue-400" />
              </div>
              <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular  text-gray-200">
                Kto nadzoruje projekt?
              </text>
            </div>
          </div>
          <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
            <div className="flex items-center justify-items-center">
              <div className="px-3 flex items-center bg-black-800 rounded">
                <PiCaretDownThin size={"30"} className="text-blue-400" />
              </div>
              <text className="ml-2 text-[1.2rem] font-serif leading-tight drop-shadow-lg font-regular  text-gray-200">
                Gdzie mogę policzyć mój PIT?
              </text>
            </div>
          </div>
          <div className="w-full py-3 mt-5 h-min bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600">
            <div className="flex items-center justify-items-center">
              <div className="px-3 flex items-center bg-black-800 rounded">
                <PiCaretDownThin size={"30"} className="text-blue-400" />
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
      </div> */}
      <FAQ />

      <text className="font-semibold text-lg bg-gradient-to-r from-indigo-700 via-g1 to-g2 text-transparent bg-clip-text bg-300% animate-gradient">
        <a href={"https://github.com/AdamShymanski"}>Adam Szymański</a>
      </text>
      <text className="font-regular text-sm text-gray-500 mb-3">
        projekt oraz wykonanie
      </text>
    </main>
  );
}
