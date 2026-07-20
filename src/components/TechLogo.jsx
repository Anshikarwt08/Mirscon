import "./TechLogo.css";

function TechLogo({ image, alt }) {
  return (
    <div className="tech-logo">
      <img src={image} alt={alt} />
    </div>
  );
}

export default TechLogo;