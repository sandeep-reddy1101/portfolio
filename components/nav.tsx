"use client";
import Link from "next/link";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

interface navProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Nav({ darkMode, toggleDarkMode }: navProps) {
  let [mobileMenu, setMobileMenu] = useState(false);

  const navList = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/sandeep.jpg" className="h-10 rounded-full" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white capitalize ">
            Sandeep.
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            className={`cursor-pointer p-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <WbIncandescentIcon className="text-yellow-200" />
            ) : (
              <DarkModeIcon />
            )}
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenu ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
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
                    className="block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
