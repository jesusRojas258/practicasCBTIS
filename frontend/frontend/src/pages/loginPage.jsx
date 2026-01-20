import Login from "../components/organisms/login";
import Title from "../components/atoms/title";
import { useLogin } from "../hooks/useLogin";

function LoginPage() {
  const login = useLogin();

  return (
    <div>

      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <Title titulo = "Inicio de sesion"/>
          <Login
            {...login}
            buttonTxt="Ingresar"
            href="./registerPage"
            text="Crea una cuenta"
          />
        </div>
      </div>

    </div>
    
  );
}

export default LoginPage;
