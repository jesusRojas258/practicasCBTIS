function Button({ buttonTxt, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonTxt}
    </button>
  );
}

export default Button;
