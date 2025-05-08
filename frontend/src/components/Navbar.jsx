import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="max-w-[1140px] px-4 mx-auto">
      <div className="flex h-16 items-center justify-between flex-col md:flex-row">
        <h1 class="bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl md:text-4xl font-bold">
          <Link to={"/"}>Product Store</Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link
            to="/create"
            className="text-2xl bg-slate-700 p-4 rounded-md text-white"
          >
            <FaRegPlusSquare />
          </Link>

          <button>Toggle Theme</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
