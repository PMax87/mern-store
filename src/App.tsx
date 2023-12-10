import AdminDashboard from "./components/Admin/AdminDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Common/Login";

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
