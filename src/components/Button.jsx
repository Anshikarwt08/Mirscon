import "./Button.css";

function Button({ text }) {
  return (
    <button className="service-btn">
      {text}
    </button>
  );
}

export default Button;