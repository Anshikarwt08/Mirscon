import "./App.css";
import { Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/ScrollToHash";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Accessibility from "./pages/Accessiblity/Accessibility";
import About from "./pages/About/About";

import Technology from "./pages/Technology/Technology";
import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";

function MainPage() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Technology />
        <ContactBanner />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
    </>
  );
}

export default App;