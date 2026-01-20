import Campo from "../molecules/campo";
import Button from "../atoms/button";
import Url from "../atoms/url";

function Login({
  correo,
  password,
  setCorreo,
  setPassword,
  handleSubmit,
  buttonTxt,
  href,
  text
}) {  
  return (

    
    <form onSubmit={handleSubmit}>

      <Campo label="Correo" type="email" value={correo} onChange={e => setCorreo(e.target.value)} />
      <Campo label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <Button buttonTxt={buttonTxt} />
      <Url href={href} text={text} />
    </form>
  );
}

export default Login;
