import "./App.css";
import Header from "./pages/header/header";
import Services from "./pages/services/services";
import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Services />
      
      <ContactBanner />
      <Footer />
    </>
  );
}

export default App;