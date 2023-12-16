import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Commons/Navbar";
import { HomePage, LoginPage } from "./pages";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import UserProtectedRoute from "./utils/protectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./redux";

function App() {
  const isAdmin = useSelector((state: RootState) => state.userAuth.isAdmin);
  const user = useSelector((state: RootState) => state.userAuth.user);

  console.log(isAdmin);
  console.log(user);

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
