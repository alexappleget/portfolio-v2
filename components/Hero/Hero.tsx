import { Coffee } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-20 w-1/2">
      <Coffee className="w-16 h-16 text-yellow-900 animate-pulse" />
      <h1 className="text-6xl font-extrabold mt-10">
        Hi, I&apos;m Alex Appleget
      </h1>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl my-4">
        Frontend Engineer & Coffee Enthusiast
      </h2>
      <p className="text-xl mb-8">
        Crafting beautiful user experiences, one line of code (and sip of
        coffee) at a time.
      </p>
      <div className="w-full flex justify-center gap-16">
        <button className="rounded-lg bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black w-40 h-10">
          Contact Me
        </button>
        <button className="rounded-lg bg-yellow-900 w-40 h-10 text-white hover:bg-white hover:border-2 hover:border-yellow-900 hover:text-yellow-900">
          <Link href="">Buy Me a Coffee</Link>
        </button>
      </div>
    </div>
  );
};
