import { useState } from "react";

export function useLogin() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Correo:", correo);
    console.log("Password:", password);
    alert("Inicio de sesion correcto");
  };

  return {
    correo,
    password,
    setCorreo,
    setPassword,
    handleSubmit,
  };
  
}
