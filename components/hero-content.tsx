import Link from "next/link";
import Button from "./button";

interface heroContentProps {
  header: string;
  subHeader: string;
  buttonName: string;
  link: string
}

export default function HeroContent({
  header,
  subHeader,
  buttonName,
  link,
}: heroContentProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-11/12">
      <h1 className="text-5xl uppercase tracking-wide text-center text-black font-bold dark:text-white">
        {header}
      </h1>
      <div className="mx-auto mt-8 md:max-w-3xl">
        <p className="text-lg text-gray-700 text-center leading-6 dark:text-slate-200">
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
