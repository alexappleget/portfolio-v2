"use client";

import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Projects/Projects";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full sm:max-w-screen min-h-screen flex flex-col items-center bg-[#F5F1E8] text-[#2C1E1A]">
      <Hero contactRef={contactRef} />
      <AboutMe />
      <Projects />
      <ContactMe ref={contactRef} />
    </section>
  );
}
