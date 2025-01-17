"use client";

import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <section className="w-full sm:max-w-screen min-h-screen flex flex-col items-center bg-[#F5F1E8] text-[#2C1E1A]">
      <Hero />
      <Projects />
      <ContactMe />
    </section>
  );
}
