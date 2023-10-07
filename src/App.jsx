import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Image from "./pages/Image";
import Video from "./pages/Video";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Music from "./pages/Music";
import Completion from "./pages/Completion";
import CodeGeneration from "./pages/CodeGeneration";
import Pages from "./pages/Pages";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/code" element={<CodeGeneration />} />
        <Route path="/image" element={<Image />} />
        <Route path="/video" element={<Video />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/music" element={<Music />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
