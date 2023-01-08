import Header from "./Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Header />
      <br />
      <Outlet />
    </>
  );
};
export default MainLayout;
