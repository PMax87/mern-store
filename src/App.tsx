import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Commons/Navbar";
import { CartPage, HomePage, LoginPage } from "./pages";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;