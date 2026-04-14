import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import Payments from "./pages/Payments";
import Documents from "./pages/Documents";
import VideoCall from "./pages/VideoCall";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/video" element={<VideoCall />} />
        <Route path="/admin" element={<Admin />} />
<Route path="/video/:roomId" element={<VideoCall />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;