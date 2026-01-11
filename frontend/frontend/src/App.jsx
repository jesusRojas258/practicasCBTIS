import { useState } from "react";
import Login from "./components/organisms/login";

function App() {

  return ( <Login labels={["Usuario", "Correo", "Contraseña", "tipo"]} />);
}

export default App;
