/** @format */

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import arrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import starIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import sparkleIcon from "@/assets/icons/sparkle.svg";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)",
          WebkitMaskImage:
            "linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)",
        }}>
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72}>
          <Image
            src={starIcon}
            className="size-28 text-emerald-300"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <Image
            src={starIcon}
            className="size-12 text-emerald-300"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <Image
            src={starIcon}
            className="size-12 text-emerald-300"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-14}>
          <Image
            src={sparkleIcon}
            className="size-8 text-emerald-300/20"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}>
          <Image
            src={sparkleIcon}
            className="size-5 text-emerald-300/20"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178}>
          <Image
            src={sparkleIcon}
            className="size-10 text-emerald-300/20"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144}>
          <Image
            src={sparkleIcon}
            className="size-14 text-emerald-300/20"
            alt="star icon"
          />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person behind a computer"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building great User Experiencies
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Desenvolvedor web especialista em transformar ideias em aplicações
            reais
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold ">Explore My Work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
