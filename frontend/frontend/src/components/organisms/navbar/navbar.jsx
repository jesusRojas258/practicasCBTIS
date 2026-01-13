import "./Navbar.css";
import NavMenu from "../../molecules/navmenu";
import Logo from "../../../assets/cbtis-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo CBTIS" />
      </div>
      <NavMenu/>

    
    </nav>
  );
}

export default Navbar;
