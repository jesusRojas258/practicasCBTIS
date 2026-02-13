import "./Navbar.css";
import NavMenu from "../../molecules/navmenuAdmin";
import Logo from "../../../assets/cbtis-logo.png";

function NavbarAdmin() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo CBTIS" />
      </div>
      <h1>ADMIN</h1>
      <NavMenu/>

    
    </nav>
  );
}

export default NavbarAdmin;
