import { Link } from "react-router-dom";
import { UserMenu } from "../../utils/costants/Links";

const Navbar = () => {
  return (
    <header className="w-full h-[90px] bg-neutral-900">
      <nav className="container h-full flex items-center justify-between">
        <Link to="/">
          <h2 className="md:text-3xl text-2xl text-white font-extrabold">
            The Store
          </h2>
        </Link>
        <UserMenu />
      </nav>
    </header>
  );
};

export default Navbar;
