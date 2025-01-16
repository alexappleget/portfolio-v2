"use client";

import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <section className="w-full sm:max-w-screen min-h-screen border-2 flex flex-col border-black items-center">
      <Hero />
    </section>
  );
}
