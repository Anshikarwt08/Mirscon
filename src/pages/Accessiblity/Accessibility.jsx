import "./Accessibility.css";

import Hero from "../../components/Accessiblity/Hero/Hero";
import Header from "../Header/Header";
import Services from "../../components/Accessiblity/Services/Services";
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