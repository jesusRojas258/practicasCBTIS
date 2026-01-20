// layouts/MainLayout.jsx
import Navbar from "../components/organisms/navbar/navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
