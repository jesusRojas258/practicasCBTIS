import { Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Solicitudes from "./pages/admin/solicitudes";
import Home from "./pages/admin/home";
//layouts
import MainLayout from "./layouts/mainLayout";
import AdminLayout from "./layouts/adminLayout";
import AuthLayout from "./layouts/authLayout";

function App() {
  return (
    <Routes>
      {/* Sin navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Route>

      {/* Con navbar alumnos */}
      <Route element={<MainLayout />}>

      </Route>

      {/* Con navbar para admin */}
      <Route element = {<AdminLayout />}>
        <Route path="/adminHome" element={<Home />} />
        <Route path="/solicitudes" element={<Solicitudes />} />


      </Route>


    </Routes>
  );
}

export default App;
