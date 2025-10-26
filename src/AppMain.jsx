import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/Todo";
import ApiData from "./pages/ApiData";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow max-w-6xl mx-auto py-10 px-6 sm:px-8">
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-center mb-6">
              📝 Task Manager
            </h1>
            <TaskManager />
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              🌐 API Data Showcase
            </h2>
            <ApiData />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
