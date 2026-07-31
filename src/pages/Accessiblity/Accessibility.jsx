import "./Accessibility.css";

import Hero from "../../components/Accessiblity/Hero/Hero";
import Services from "../../components/Accessiblity/Services/Services";
import Header from "../Header/Header";

function Accessibility() {
  return (
    <>
    <Header/>
    
    <main id="main-content" className="accessibility-page">
      <Hero />
      <Services/>
    </main>
    </>
  );
}

export default Accessibility;