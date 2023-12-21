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

function App() {
  const dispatch = useDispatch();
  const { data: userInfo, isLoading: isLoadingUserInfo } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: async () => await UserRepository.getUserInfo(),
  });

  const { data: userAddress } = useQuery({
    queryKey: ["getUserAddress"],
    queryFn: async () => await UserRepository.getUserAddress(),
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(setUser(userInfo.data));
    }
    if (userAddress) {
      dispatch(setUserAddress(userAddress.data));
    }
  }, [dispatch, userInfo, userAddress]);

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
              <SettingsPage isLoadingUserInfo={isLoadingUserInfo} />
            </UserProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
