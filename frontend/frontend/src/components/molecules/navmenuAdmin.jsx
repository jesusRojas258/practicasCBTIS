import Url from "../atoms/url";

function NavMenuAdmin() {
  return (
    <div className="navbar__menu">
      <Url text="Inicio" href="/adminHome" className="navbar__link" />
      <Url text="Solicitudes" href="/solicitudes" className="navbar__link" />
      <Url text="Asistencia" href="#" className="navbar__link" />
      <Url text="Contacto" href="#" className="navbar__link" />
    </div>
  );
}

export default NavMenuAdmin;