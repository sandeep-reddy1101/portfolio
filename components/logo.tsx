import Link from "next/link";
import { logoInfo } from "@/lib/data";
import { theme } from "@/lib/theme";

export default function Logo() {
  return (
    <Link
      href={logoInfo.link}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={logoInfo.image} className="h-10 rounded-full" alt="app logo" />
      <span className={`self-center text-base font-bold whitespace-nowrap ${theme.logo.textColor} uppercase tracking-wider`}>
        {logoInfo.name}
      </span>
    </Link>
  );
}
