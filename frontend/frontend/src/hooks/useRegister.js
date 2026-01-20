import { useState } from "react";

export function useRegister() {

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //boton solicitar cuenta
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos)
    console.log("Correo:", correo);
    console.log("Password:", password);
    console.log("confirma contraseña:", confirmPassword);

    if (!nombre || !apellidos|| !correo || !password || !confirmPassword ){
        alert("falto de llenar algun campo");
        return 0;
    }if (password !== confirmPassword){
        alert("las constraseñas no coinciden...");
    }else{
        alert("cuenta solicitada, se le enviara un correo con los datos de su cuenta");
    }
    
  };//fin handleSubmit

  return {
    nombre,
    apellidos,
    correo,
    password,
    confirmPassword,
    setNombre,
    setApellidos,
    setCorreo,
    setPassword,
    setConfirmPassword,
    handleSubmit,
  };
  
}
