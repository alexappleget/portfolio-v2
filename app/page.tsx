"use client";

import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <section className="w-full sm:max-w-screen min-h-fit flex flex-col items-center bg-[#F5F1E8] text-[#2C1E1A] relative">
      <div
        className="absolute top-0 left-0 w-52 h-52 md:w-1/3 md:h-1/4 bg-cover bg-no-repeat bg-center z-10 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/coffee-stain-3.png')" }}
      ></div>
      <Hero />
      <AboutMe />
      <div
        className="absolute top-1/3 right-0 lg:right-10 w-96 h-52 lg:w-1/2 lg:h-96 bg-cover bg-no-repeat bg-center z-10 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/coffee-stain-2.png')" }}
      ></div>
      <Projects />
      <div
        className="absolute bottom-96 right-0 w-1/2 h-1/4 bg-cover bg-no-repeat bg-center z-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/coffee-stain-1.png')" }}
      ></div>
    </section>
  );
}
