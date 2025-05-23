import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import EditPage from "./pages/EditPage";

function App() {
  localStorage.setItem("theme", "dark");

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-gray-100 dark:text-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
