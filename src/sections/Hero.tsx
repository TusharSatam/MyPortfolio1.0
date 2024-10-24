import Image from "next/image";

import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import NextjsIcon from "@/assets/icons/nextjs-icon.svg";
import ReactjsIcon from "@/assets/icons/reactjs-icon.svg";
import JsIcon from "@/assets/icons/javascript-icon.svg";
import Github from "@/assets/icons/github.svg";

import CSSIcon from "@/assets/icons/css3.svg";
import grainImage from "@/assets/images/grain.jpg";
import RQuery from "@/assets/icons/RQuery.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import mimojiImage from "@/assets/images/HeroAvatar.png";

export const HeroSection = () => {
  return (
    <section
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Adjusted Spin Durations */}
        <HeroOrbit
          size={550}
          rotation={20}
          spinDuration="35s"  // Smooth duration
          shouldSpin
        >
          <NextjsIcon className="text-emerald-300 size-12" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          spinDuration="33s"  // Slightly slower
          shouldSpin
        >
          <HtmlIcon className="text-[#e34c26] size-8" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          spinDuration="40s"  // Slowest for bigger orbit
          shouldSpin
        >
          <ReactIcon className="text-[#61dbfb] size-28" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          rotation={-14}
          spinDuration="32s"  // Faster for smaller orbit
          shouldSpin
        >
          <ReactjsIcon className="text-emerald-300/20 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          spinDuration="22s"  // Faster for smaller orbit
          shouldSpin
        >
          <RQuery className="text-emerald-300/20 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          spinDuration="36s"  // Moderately fast
          shouldSpin
        >
          <Github className="text-[#f0db4f] size-5" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          spinDuration="37s"  // Smooth and steady
          shouldSpin
        >
          <CSSIcon className="text-[#264de4] size-10" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          spinDuration="39s"  // Slight variation
          shouldSpin
        >
          <JsIcon className="text-[#61dbfb] size-14" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={mimojiImage}
            className="size-28"
            alt="a person with laptop"
          />
          <div className="bg-gray-950 border border-gray-800 rounded-lg inline-flex items-center gap-3 px-4 py-1.5">
            <div className="bg-green-500 size-[15px] rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-xl md:text-3xl text-center mt-8 tracking-wide">
            Crafting Innovative and High-Performance Web Solutions
          </h1>
          <p className="text-center  mt-4 text-white/60">
            Hello, I&apos;m{" "}
            <span className="font-semibold text-[#0CAFFF]">Tushar</span>, a{" "}
            <span className="font-semibold text-[#0CAFFF]">
              Frontend Developer
            </span>{" "}
            from India. I specialize in React.js, Next.js, and responsive design
            to create user-centric, high-performance web applications.
            Let&apos;s bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10 relative">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12">
              <span className="font-semibold">Explore my works</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-800 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span>Let&apos;s connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
