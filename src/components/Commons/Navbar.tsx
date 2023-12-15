import { Link } from "react-router-dom";
import { CartPage } from "../../pages";
import { ResponsiveMenuSwitch } from "./ResponsiveMenuSwitch";

const Navbar = () => {
  return (
    <header className="w-full h-[90px] bg-neutral-900">
      <nav className="container h-full flex items-center justify-between">
        <Link to="/">
          <h2 className="md:text-3xl text-2xl text-white font-extrabold">
            The Store
          </h2>
        </Link>
        <div className="flex gap-2 items-center text-white">
          <ResponsiveMenuSwitch />
          <CartPage />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
