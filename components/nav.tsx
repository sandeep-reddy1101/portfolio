"use client";
import Link from "next/link";
import { useState } from "react";
import { navList } from "@/lib/data";

import ThemeSwitcher from "./theme-switcher";
import Logo from "./logo";
import Menu from "./nav-menu";

export default function Nav() {
  let [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed z-10 w-full drop-shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ThemeSwitcher />
          <Menu mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} />
        </div>
        <div
          className={`${
            mobileMenu ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navList.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="block text-sm font-semibold uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
