import Header from "./Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
};
export default MainLayout;
