import Campo from "../molecules/campo";
import Button from "../atoms/button";
import Title from "../atoms/title";
import Url from "../atoms/url";
function Register({ 
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
    handleSubmit


}) {
    return (

     <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">

            <form onSubmit={handleSubmit}>
                <Title titulo="Solicita una Cuenta"/>
                <Campo label="Nombres" value={nombres} onChange={e => setNombres(e.target.value)} />
                <Campo label="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)}/>
                <Campo label="Correo" type="email" value={correo} onChange={e => setCorreo(e.target.value)}/>
                <Campo label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Campo label="Confirmar contraseña" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                <Button buttonTxt="Solicitar cuenta" className="btn btn-primary w-100" />
                <Url text="Inicia sesion" href="/"/>
            </form>
          
        </div>
      </div>
    
    );
}

export default Register;
