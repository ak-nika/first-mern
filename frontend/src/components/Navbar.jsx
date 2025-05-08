import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <nav className="max-w-[1140px] px-4 mx-auto">
      <div className="flex h-16 items-center justify-between flex-col md:flex-row">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl md:text-4xl font-bold">
          <Link to={"/"}>Product Store</Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link
            to="/create"
            className="text-2xl dark:bg-slate-700 bg-gray-300 p-4 rounded-md"
          >
            <FaRegPlusSquare />
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-2xl dark:bg-slate-700 bg-gray-300 p-4 rounded-md cursor-pointer"
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
