import { FaUserPlus } from "react-icons/fa6";
import { RegisterForm } from "../components/Commons";

const RegisterPage = () => {
  return (
    <div className="container py-10">
      <div className="flex justify-center items-center">
        <FaUserPlus className="text-4xl" />
        <h4 className="text-4xl font-bold ms-3">Create account</h4>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
