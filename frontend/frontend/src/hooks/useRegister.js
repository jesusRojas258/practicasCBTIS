import { useState } from "react";

export function useRegister() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombres || !apellidos || !correo || !password || !confirmPassword) {
      alert("Falta llenar algún campo");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/cuentas/solicitaCuentaNueva",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombres,
            apellidos,
            correo,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.mensaje || "Error al solicitar la cuenta");
        return;
      }

      alert("Cuenta solicitada correctamente ✅");

      // opcional: limpiar formulario
      setNombres("");
      setApellidos("");
      setCorreo("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return {
    nombres,
    apellidos,
    correo,
    password,
    confirmPassword,
    setNombres,
    setApellidos,
    setCorreo,
    setPassword,
    setConfirmPassword,
    handleSubmit,
  };
}

