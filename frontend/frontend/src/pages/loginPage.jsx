import Login from "../components/organisms/login";

function LoginPage() {

  return ( 

    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">


            <Login 
                labels={["Usuario", "Correo", "Contraseña", "tipo"]}
                buttonTxt="Ingresar"
                url= "https://www.google.com/search?client=opera-gx&q=url+en+jsx&sourceid=opera&ie=UTF-8&oe=UTF-8"
                urlText="Crea una cuenta"
            
            />
        </div>
    </div>
  
  

  );
}

export default LoginPage;
