"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mx-auto px-4 py-6 bg-[#E6D2B5] text-[#4A2C2A] border-t-2 border-[#4A2C2A]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm font-medium mb-4 md:mb-0">
          © {currentYear} Alex Appleget. All rights reserved.
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="https://www.linkedin.com/in/alex-appleget/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A2C2A] hover:text-[#8B5E3C] transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/alexappleget"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A2C2A] hover:text-[#8B5E3C] transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
