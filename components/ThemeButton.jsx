import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? systemTheme : theme;

  return (
    <div className="relative">
      {/* <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="transition-all duration-100 text-white dark:text-gray-800 m-2 p-2 text-sm rounded-lg bottom-32"
      >
       
        {currentTheme === "light" ? (
          <MoonIcon className="text-white hover:shadow-lg h-9 w-9 bg-neutral-500 transition-all hover:text-gray-200 border-2 p-1 rounded-full hover:scale-105" />
        ) : (
          <SunIcon className=" dark:text-white hover:shadow-2xl h-9 w-9 bg-neutral-700 transition-all dark:hover:text-yellow-500 border-2 p-1 rounded-full hover:scale-105" />
        )}
      </button> */}
    </div>
  );
};

export default ThemeButton;
