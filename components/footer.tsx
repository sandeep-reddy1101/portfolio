import Link from "next/link";
import { socialMedia } from "@/lib/socialMedia";
import {footer} from '@/lib/footerInfo';

export default function Footer() {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <div className="block text-center md:text-left md:flex md:justify-between py-12 md:py-16 lg:py-20">
          <div className="mb-12 order-2">
            <div className="uppercase text-xl tracking-wider font-semibold">
              Social
            </div>
            <div className="mt-4">
              {socialMedia.map((item) => {
                return (
                  <Link key={item.name} href={item.link} className="mr-3 hover:text-violet-400">
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-2/4 order-1 max-w-sm m-auto md:m-0">
            <div className="uppercase text-xl font-semibold tracking-wider">
              {footer.name}
            </div>
            <div className="mt-4 text-gray-200 text-xs font-medium leading-6">
              {footer.subHeading}
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-xs text-center py-9 border-t-[1px] border-slate-200">
          © Copyright {new Date().getFullYear()}. Made by{" "}
          <Link href={"/"} className="font-bold underline">
            {footer.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
