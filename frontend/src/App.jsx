import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import ReportPage from "./pages/ReportPage";
import SettingPage from "./pages/SettingPage";
import SearchScorePage from "./pages/SearchScorePage";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full h-full gradient-bg overflow-hidden">
      <ToastContainer />
      <Header />

      <div className="flex min-h-screen ">
        <div className="w-[15%] flex-none text-black flex flex-col bg-gradient-to-b from-yellow-400 via-green-500 to-teal-700">
          <SideBar />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/searchscore" element={<SearchScorePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
