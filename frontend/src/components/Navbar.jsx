import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-wide">
          User Portal
        </Link>
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative text-gray-700 font-medium transition hover:text-blue-600 
              ${isActive ? "text-blue-600" : ""}`
            }
          >
            Register
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `relative text-gray-700 font-medium transition hover:text-blue-600 
              ${isActive ? "text-blue-600" : ""}`
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
