// layouts/MainLayout.jsx
import Navbar from "../components/organisms/navbar/navbarAdmin";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}

export default AdminLayout;
