import Button from "./button";
import SectionHeader from "./section-header";
import { projects, projectHeaders } from "../lib/projectsInfo";
import Link from "next/link";

export default function Projects() {
  
  return (
    <section id="projects" className="py-32 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...projectHeaders} />
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16"
            >
              <div className="overflow-hidden md:col-span-3">
                <img
                  className="w-full block object-cover rounded-md h-64 sm:h-80 md:max-h-96 md:h-72 lg:h-auto"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="col-auto md:col-span-2 flex flex-col justify-center items-center md:items-start p-2">
                <div className="mb-4 font-bold text-2xl text-black dark:text-white">{project.name}</div>
                <div className="mb-8 leading-6 max-w-xl text-base text-gray-700 dark:text-gray-300">
                  {project.summary}
                </div>
                <Link href={`/project/${project.name}`}><Button>Details</Button></Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
