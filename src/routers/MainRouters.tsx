import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import NoMatchPage from "../pages/NoMatchPage";

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}
