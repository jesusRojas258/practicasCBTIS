import Campo from "../molecules/campo"
function Login({ labels }) {
  return (
    <div>
      {labels.map((label, index) => (
        <Campo key={index} label={label} />
      ))}
    </div>
  );
}

export default Login;
