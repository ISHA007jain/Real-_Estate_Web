import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Header = () => {
  // Get the initial theme from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply the dark mode class on <html> when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow-md transition duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-10 w-auto" />
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-blue-500 dark:hover:text-blue-300">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500 dark:hover:text-blue-300">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">
            Contact
          </NavLink>
        </nav>

        
        <div className="flex items-center space-x-4">
          <NavLink to="/signin" className="hover:text-blue-500 dark:hover:text-blue-300">
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Sign Up
          </NavLink>

          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button> */}
        </div>
      </div>
    </header>
  );
};
