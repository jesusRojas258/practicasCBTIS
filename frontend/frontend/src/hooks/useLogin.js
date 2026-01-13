import { useState } from "react";

export function useLogin() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Usuario:", usuario);
    console.log("Correo:", correo);
    console.log("Password:", password);
    alert("asd");
  };

  return {
    usuario,
    correo,
    password,
    setUsuario,
    setCorreo,
    setPassword,
    handleSubmit,
  };
  
}
