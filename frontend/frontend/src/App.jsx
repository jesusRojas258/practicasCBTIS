import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import MainLayout from "./layouts/mainLayout";
import AuthLayout from "./layouts/authLayout";

function App() {
  return (
    <Routes>
      {/* Sin navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Route>

      {/* Con navbar */}
      <Route element={<MainLayout />}>

      </Route>
    </Routes>
  );
}

export default App;
