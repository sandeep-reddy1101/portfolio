import Button from "./button";
import SectionHeader from "./section-header";
import { projects, projectHeaders } from "../lib/projectsInfo";
import Link from "next/link";
import { theme } from "@/lib/theme";

export default function Projects() {
  
  return (
    <section id="projects" className={`py-32 ${theme.projects.backgroundColor}`}>
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...projectHeaders} />
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16"
            >
              <div className="overflow-hidden lg:col-span-3">
                <img
                  className="w-full block rounded-md"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="col-auto lg:col-span-2 flex flex-col justify-center items-center lg:items-start p-2">
                <div className={`mb-4 font-bold text-2xl uppercase ${theme.projects.projectNameTextColor}`}>{project.name}</div>
                <div className={`mb-8 leading-6 max-w-xl md:max-w-3xl text-base font-medium ${theme.projects.projectSummaryTextColor}`}>
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
