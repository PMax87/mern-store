import { LoginForm } from "../components/Commons";
import { IoMdLogIn } from "react-icons/io";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center mt-10">
        <IoMdLogIn className="text-4xl" />
        <h4 className="text-4xl font-bold ms-3">Sign in</h4>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
