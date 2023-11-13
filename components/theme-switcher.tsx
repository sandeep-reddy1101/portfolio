"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

export default function ThemeSwitcher() {
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
        <DarkModeIcon className="text-black" />
      )}
    </div>
  );
};
