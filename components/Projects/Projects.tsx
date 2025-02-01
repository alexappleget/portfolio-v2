"use client";

import {
  Gift,
  Github,
  Plane,
  SquareArrowOutUpRight,
  Trophy,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/card";
import { Button } from "../Button/button";

const projects = [
  {
    icon: <Trophy />,
    title: "Gridiron Survivor",
    description:
      "Gridiron Survivor is a non-paid apprenticeship that helps self-taught developers gain real-world experience by working on a live client project using Agile methodologies, including sprints, Kanban boards, and code reviews. Participants commit 20+ hours per week to ensure high-quality development while simulating the demands of a real engineering job.",
    githubUrl: "https://github.com/LetsGetTechnical/gridiron-survivor",
    liveSiteUrl: "https://www.gridironsurvivor.com/",
  },
  {
    icon: <Gift />,
    title: "Elecretanta",
    description:
      "A hackathon-built Secret Santa web app that streamlines gift exchanges with AI-powered suggestions. Users can set budgets, draw names digitally, and receive personalized gift ideas, making it easier to find the perfect present for their match.",
    githubUrl: "https://github.com/guardiansofthegit-collab/elecretanta",
    liveSiteUrl: "https://elfgorithm.vercel.app/",
  },
  {
    icon: <Plane />,
    title: "TripWhiz AI",
    description:
      "Web application that leverages AI to simplify the travel planning process. By gathering users' personal information and travel preferences, it seamlessly generates a customized, full itinerary for their trip, making planning easier and more efficient.",
    githubUrl: "https://github.com/alexappleget/tripwhiz-ai",
    liveSiteUrl: "",
  },
];

export const Projects = () => {
  return (
    <section className="my-40 w-11/12 md:w-3/4">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-3xl font-extrabold text-[#4A2C2A]">
          Latest Brews
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Check out my most recent projects, freshly brewed with passion and
          expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col bg-[#E6D2B5] rounded-lg shadow-lg"
          >
            <CardHeader>
              <span className="w-12 h-12 text-[#4A2C2A]">{project.icon}</span>
              <CardTitle className="text-[#4A2C2A] font-serif">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#2C1E1A]">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center gap-8 mt-auto">
              <Button
                className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A]"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                GitHub
                <Github />
              </Button>
              {project.liveSiteUrl ? (
                <Button
                  className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A]"
                  onClick={() => window.open(project.liveSiteUrl, "_blank")}
                >
                  Live Site
                  <SquareArrowOutUpRight />
                </Button>
              ) : (
                <Button
                  className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border border-[#4A2C2A]"
                  disabled
                >
                  Coming Soon
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
