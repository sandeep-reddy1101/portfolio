import { heroInfo } from "@/lib/data";

import HeroContent from "./hero-content";
import HeroContainer from "./hero-container";

export default function Hero() {
  return (
    <HeroContainer id="home">
      <HeroContent {...heroInfo} home={true} />
    </HeroContainer>
  );
}
