import "./App.css";
import Sidebar from "./components/Sidebar";
import Asset from "./pages/Asset";
import Dasshboard from "./pages/Dasshboard";
import { Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dasshboard />} />
          <Route path="/asset" element={<Asset />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
