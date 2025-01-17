import { Coffee, MoveDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button/button";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center mt-20 w-1/2">
      <Coffee className="w-16 h-16 text-[#4A2C2A] animate-pulse" />
      <h1 className="text-6xl font-extrabold mt-10 text-[#4A2C2A]">
        Hi, I&apos;m Alex Appleget
      </h1>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl my-4 text-[#1E1E1E]">
        Frontend Engineer & Coffee Enthusiast
      </h2>
      <p className="text-xl mb-6">
        Crafting beautiful user experiences, one line of code (and sip of
        coffee) at a time.
      </p>
      <div className="w-full flex justify-center items-center gap-16">
        <Button className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] w-48 h-12 text-lg">
          Contact Me
        </Button>
        <div className="flex flex-col items-center gap-4 pb-4">
          <MoveDown className="animate-bounce w-10 h-10 text-[#4A2C2A]" />
          <Button className="bg-[#1E1E1E] w-48 h-12 text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#1E1E1E] border-2 border-[#1E1E1E] text-lg">
            <Link
              href="https://buymeacoffee.com/alexappleget"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Me a Coffee
            </Link>
          </Button>
          <p className="italic text-[#4A2C2A]">I really like coffee</p>
        </div>
      </div>
    </section>
  );
};
