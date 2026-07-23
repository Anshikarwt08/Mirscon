import "./header.css";
function Header() {
  return (
    <header className="mirscon-header">
      <div className="mirscon-logo">
        <img src="https://www.mirscon.com/assets/images/logo.png" alt="Mirscon Logo" />
      </div>

      <nav className="mirscon-navbar">
        <a href="#">Home</a>
        <a href="#">Accessibility</a> 
        <a href="#">Staffing</a>
        <a href="#">Career</a>
      </nav>
    </header>
  );
}

export default Header;