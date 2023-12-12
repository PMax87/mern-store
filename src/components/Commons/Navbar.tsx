import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full h-[90px] bg-neutral-900">
      <nav className="container h-full flex items-center justify-between">
        <Link to="/">
          <h2 className="md:text-3xl text-2xl text-white font-extrabold">
            The Store
          </h2>
        </Link>
        <div className="flex lg:gap-5 gap-2 text-white">
          <Link to="/login" className="flex items-center gap-2">
            <h4 className="md:text-xl text-lg">Login</h4>
            <FaUserPlus className="md:text-3xl text-xl fill-white lg:block hidden" />
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <h4 className="md:text-xl text-lg">Cart</h4>
            <IoCartSharp className="md:text-3xl text-xl fill-white lg:block hidden" />
            <p className="md:text-xl text-lg">(1)</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
