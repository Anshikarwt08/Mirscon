import "./App.css";

import Header from "./pages/Header/Header";
import Services from "./pages/services/services";
import Technology from "./pages/Technology/Technology";
import Team from "./components/Team/Team";
import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Services />
        <Technology />
        <Team />
        <ContactBanner />
      </main>

      <Footer />
    </>
  );
}

export default App;