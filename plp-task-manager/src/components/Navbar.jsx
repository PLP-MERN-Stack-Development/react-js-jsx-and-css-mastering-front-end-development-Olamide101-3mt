// src/components/Navbar.jsx
import { useContext } from "react";
import { ThemeContext } from "../App";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          PLP Task Manager
        </h1>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? (
            <>
              <SunIcon className="h-5 w-5 text-yellow-400" />
              Light Mode
            </>
          ) : (
            <>
              <MoonIcon className="h-5 w-5 text-gray-700" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
