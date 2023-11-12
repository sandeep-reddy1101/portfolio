import Link from "next/link";
import { socialMedia } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <div className="block md:flex md:justify-between py-12 md:py-16 lg:py-20">
          <div className="mb-12 order-2">
            <div className="uppercase text-xl tracking-wider font-bold">
              Social
            </div>
            <div className="mt-4">
              {socialMedia.map((item) => {
                return (
                  <Link key={item.name} href={item.link} className="mr-3">
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-2/5 order-1 max-w-sm">
            <div className="uppercase text-xl font-bold tracking-wider">
              Sandeep Reddy
            </div>
            <div className="mt-4 text-gray-200 text-sm leading-6">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-xs text-center py-9 border-t-[1px] border-slate-200">
          © Copyright {new Date().getFullYear()}. Made by{" "}
          <Link href={"/"} className="font-bold underline">
            Sandeep Reddy
          </Link>
        </div>
      </div>
    </footer>
  );
}
