import Link from "next/link";
import Button from "./button";
import { theme } from "@/lib/theme";

interface heroContentProps {
  header: string;
  subHeader: string;
  buttonName: string;
  link: string;
  home: boolean;
}

export default function HeroContent({
  header,
  subHeader,
  buttonName,
  link,
  home,
}: heroContentProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-11/12">
      <h1
        className={`text-5xl uppercase tracking-wide text-center font-bold ${theme.hero.headerTextColor}`}
      >
        {home && "Hey, I'm "}
        <span className="text-gradiant">{header}</span>
      </h1>
      <div className="mx-auto mt-8 md:max-w-2xl lg:max-w-3xl">
        <p
          className={`text-lg font-medium tracking-wide text-center leading-6 ${theme.hero.subHeaderTextColor}`}
        >
          {subHeader}
        </p>
      </div>
      <div className="mt-12 text-center">
        <Link href={link}>
          <Button>{buttonName}</Button>
        </Link>
      </div>
    </div>
  );
}
