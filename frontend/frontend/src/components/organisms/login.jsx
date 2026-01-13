import Campo from "../molecules/campo";
import Button from "../atoms/button";
import Url from "../atoms/url";
import { useLogin } from "../../hooks/useLogin";

function Login({ buttonTxt, url, urlText }) {

  const {
    usuario,
    correo,
    password,
    setUsuario,
    setCorreo,
    setPassword,
    handleSubmit
  } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <Campo label="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <Campo label="Correo" type="email" value={correo} onChange={e => setCorreo(e.target.value)} />
      <Campo label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <Button buttonTxt={buttonTxt} />
      <Url url={url} urlText={urlText} />
    </form>
  );
}

export default Login;
