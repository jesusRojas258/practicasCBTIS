import Register from "../components/organisms/register";
import { useRegister } from "../hooks/useRegister";

function RegisterPage() {

    const register = useRegister();

  return <Register
    {...register}
  />;
}

export default RegisterPage;
