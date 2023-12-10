import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="flex">
      <aside className="bg-zinc-800 h-screen transition-all fixed flex justify-center w-60">
        <Link to="/" className="flex">
          <FaRegUser className="fill-white" />
          <p className="text-slate-100">Utenti</p>
        </Link>
      </aside>
      <div className="pl-60">
        <Button colorScheme="pink">Opne sideb</Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
