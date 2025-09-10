import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-200 shadow">
        <Link to="/">Dashboard</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
