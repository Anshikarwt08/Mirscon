import "./Accessibility.css";

import Hero from "../../components/Accessiblity/Hero/Hero";
import Header from "../Header/Header";
import Services from "../../components/Accessiblity/Services/Services";
import Footer from "../../components/Footer/Footer";
function Accessibility() {
  return (
    <>
    <Header/>
    
    <main id="main-content" className="accessibility-page">
      <Hero />
     <Services/> 
     <Footer/>    
    </main>
    </>
  );
}

export default Accessibility;