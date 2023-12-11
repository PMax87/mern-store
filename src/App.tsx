import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components/Commons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
