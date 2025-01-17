import Image from "next/image";
import { Button } from "../Button/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="w-1/2 mt-40">
      <h1 className="text-3xl font-extrabold sm:text-4xl text-[#4A2C2A] text-center">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <Image
          className="flex-1 rounded-lg"
          alt="Photo of Alex Appleget"
          src={"/headshot.jpg"}
          width={400}
          height={400}
        />
        <div className="flex flex-col">
          <p className="text-[#2C1E1A]">
            Hi there! I&apos;m Alex Appleget, a frontend software engineer with
            a love for creating dynamic and intuitive web applications. I
            specialize in NextJS, React, and TypeScript/JavaScript, crafting
            seamless user experiences. Lately, I&apos;ve been diving into the
            world of AI integration, building apps that harness the power of
            artificial intelligence to deliver innovative solutions. When
            I&apos;m not coding, you&apos;ll likely find me traveling to new
            places, embracing new cultures, and collecting experiences that fuel
            my passion for exploration. I&apos;m always excited to take on new
            challenges and create something amazing.
          </p>
          <Button className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] w-48 h-12 text-lg mx-auto mt-10">
            <Link
              href="/01_Alex Appleget.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download My Resume
            </Link>
          </Button>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="" className="text-[#4A2C2A] hover:text-[#8B5E3C]">
              <Linkedin />
            </Link>
            <Link href="" className="text-[#4A2C2A] hover:text-[#8B5E3C]">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
