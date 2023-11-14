"use client";
import HeroContainer from "@/components/hero-container";
import HeroContent from "@/components/hero-content";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projectsInfo";
import Loading from "@/components/loading";
import Pill from "@/components/pill";
import Link from "next/link";
import Button from "@/components/button";
import OutlineButton from "@/components/outline-button";

interface projectType {
  name: string;
  summary: string;
  image: string;
  description: string[];
  technologies: string[];
  github: string;
  live: string;
}

interface heroContentType {
  header: string;
  subHeader: string;
  buttonName: string;
  link: string;
}

export default function Project() {
  const { projectName }: { projectName: string } = useParams();
  const [project, setProject] = useState<projectType | null>(null);
  const [heroContent, setHeroContent] = useState<heroContentType | null>(null);

  useEffect(() => {
    const currentProject = projects.find((item) => item.name === projectName);
    if (currentProject) {
      setProject(currentProject);
      setHeroContent({
        header: currentProject.name,
        subHeader: currentProject.summary,
        buttonName: currentProject.live ? "Live" : "Github",
        link: currentProject.live ? currentProject.live : currentProject.github,
      });
    }
  }, [projectName]);

  if (project === null || heroContent === null) {
    return <Loading />;
  }

  return (
    <>
      <HeroContainer id={projectName}>
        <HeroContent {...heroContent} home={false}/>
      </HeroContainer>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl w-11/12 m-auto">
          <div className="m-auto max-w-3xl py-32 px-4 lg:px-0 w-full">
            <div className="mb-8 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md"
              />
            </div>
            <div className="m-auto max-w-2xl w-full">
              <div className="mb-8">
                <div className="mb-6 font-bold text-2xl text-black dark:text-gray-100">
                  Project Overview
                </div>
                {project.description.map((desc, idx) => {
                  return (
                    <div
                      key={idx}
                      className="text-base leading-6 mb-6 text-gray-700 dark:text-gray-300 font-medium tracking-wide"
                    >
                      {desc}
                    </div>
                  );
                })}
              </div>
              <div className="mb-8">
                <div className="mb-6 font-bold text-2xl text-black dark:text-gray-100">
                  Tech Used
                </div>
                <div className="flex flex-wrap">
                  {project.technologies.map((skill, idx) => {
                    return <Pill key={idx} skill={skill} />;
                  })}
                </div>
              </div>
              <div>
                <div className="mb-6 font-bold text-2xl text-black dark:text-gray-100">
                  Links
                </div>
                <Link href={project.github} className="mr-4">
                  <Button>Github</Button>
                </Link>
                <Link href={"/#projects"}>
                  <OutlineButton>Go Back</OutlineButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
