"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div
            className={`cursor-pointer p-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <WbIncandescentIcon className="text-yellow-200" />
            ) : (
              <DarkModeIcon className="text-black"/>
            )}
          </div>
    // <button
    //   className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
    //   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    // >
    //   {theme === "light" ? "Dark" : "Light"}
    // </button>
  );
};