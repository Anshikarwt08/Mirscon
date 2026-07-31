import "./Button.css";

function Button({
  text,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;