import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Commons/Navbar";
import { HomePage, LoginPage } from "./pages";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import UserProtectedRoute from "./utils/protectedRoute";
import { useQuery } from "@tanstack/react-query";
import { UserRepository } from "./repositories/user-repository";
import { useDispatch } from "react-redux";
import { setUser, setUserAddress } from "./redux/AuthReducer";
import { useEffect } from "react";
import { UserAddressResponse } from "./models/UserAddress";

function App() {
  const dispatch = useDispatch();
  const { data: userInfo } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await UserRepository.getUserInfo();
        return response.data;
      } else {
        return {};
      }
    },
  });

  const { data: userAddress } = useQuery({
    queryKey: ["getUserAddress"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await UserRepository.getUserAddress();
        return response.data;
      } else {
        return {};
      }
    },
  });

  console.log(userAddress);

  useEffect(() => {
    if (userInfo) {
      dispatch(setUser(userInfo));
    }
    if (userAddress?.address) {
      dispatch(setUserAddress(userAddress.address));
    }
  }, [dispatch, userInfo]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/settings"
          element={
            <UserProtectedRoute>
              <SettingsPage />
            </UserProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
