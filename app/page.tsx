"use client"
import Nav from "@/components/nav";
import { useState } from "react";

export default function Home() {
  let [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
    </div>
  );
}
