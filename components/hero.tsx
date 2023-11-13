import Link from "next/link";

import { socialMedia } from "@/lib/data";
import { heroInfo } from "@/lib/data";

import HeroContent from "./hero-content";
import HeroContainer from "./hero-container";

export default function Hero() {

  return (
    <HeroContainer id="home">
      <HeroContent {...heroInfo}/>
      <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white drop-shadow-2xl p-2 dark:bg-gray-900 rounded">
        <div className="w-12">
          {socialMedia.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className="w-full block p-3 transition duration-300 hover:bg-gray-200 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </HeroContainer>
  );
}
