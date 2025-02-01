import Image from "next/image";
import { Button } from "../Button/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 mt-20 md:mt-40 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold sm:text-4xl text-[#4A2C2A] text-center mb-10">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            className="rounded-lg w-64 h-64 md:w-full md:h-auto object-cover"
            alt="Photo of Alex Appleget"
            src="/headshot.jpg"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <p className="text-[#2C1E1A] text-lg leading-relaxed mb-6">
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
          <div className="flex flex-col items-center md:items-start gap-6 mt-6">
            <Link
              href="/01_Alex Appleget.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full h-full flex items-center"
            >
              <Button className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] w-full sm:w-48 h-12 text-base">
                Download My Resume
              </Button>
            </Link>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/alex-appleget/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A2C2A] hover:text-[#8B5E3C] transition-colors duration-200"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/alexappleget"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A2C2A] hover:text-[#8B5E3C] transition-colors duration-200"
              >
                <Github className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
