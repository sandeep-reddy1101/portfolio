import Link from "next/link";
import Button from "./button";
import Pill from "./pill";
import { aboutme } from "@/lib/aboutInfo";

export default function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <div className="font-bold text-2xl mb-4 dark:text-white">
          Get to know me!
        </div>
        {aboutme.about.map((item, idx) => {
          return (
            <div
              key={idx}
              className="text-base font-medium text-gray-600 w-11/12 leading-6 mb-4 dark:text-gray-400"
            >
              {item}
            </div>
          );
        })}
        <div className="mt-8">
          <Link href={"#contact"}>
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-4 dark:text-white">My Skills</div>
        <div className="flex flex-wrap">
          {aboutme.technologies.map((item, idx) => {
            return <Pill key={idx} skill={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
