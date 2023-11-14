import Link from "next/link";

import { socialMedia } from "@/lib/socialMedia";
import { heroInfo } from "@/lib/data";
import { theme } from "@/lib/theme";

import HeroContent from "./hero-content";
import HeroContainer from "./hero-container";

export default function Hero() {
  return (
    <HeroContainer id="home">
      <HeroContent {...heroInfo} home={true} />
      <div
        className={`hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 drop-shadow-2xl p-2 ${theme.social.backgroundColor} rounded`}
      >
        <div className="w-12">
          {socialMedia.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`w-full block p-3 transition duration-300 rounded-md ${theme.social.hoverIconBackgroundColor} ${theme.social.hoverIconTextColor}`}
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
