import Url from "../atoms/url";

function NavMenu() {
  return (
    <div className="navbar__menu">
      <Url text="Inicio" href="#" className="navbar__link" />
      <Url text="Alumnos" href="#" className="navbar__link" />
      <Url text="Asistencia" href="#" className="navbar__link" />
      <Url text="Contacto" href="#" className="navbar__link" />
    </div>
  );
}

export default NavMenu;
