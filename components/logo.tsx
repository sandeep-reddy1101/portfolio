import Link from "next/link";
import { logoInfo } from "@/lib/data";

export default function Logo() {
  return (
    <Link
      href={logoInfo.link}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={logoInfo.image} className="h-10 rounded-full" alt="app logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white capitalize ">
        {logoInfo.name}
      </span>
    </Link>
  );
}
