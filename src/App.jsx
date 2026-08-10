import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Accessibility from "./pages/Accessiblity/Accessibility";
import About from "./pages/About/About";
import Career from "./pages/Careers/Careers";

import Technology from "./pages/Technology/Technology";
import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import Careers from "./pages/Careers/Careers";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ResourceOutsourcing from "./pages/ResourceOutsourcing/ResourceOutsourcing";
import GetStarted from "./pages/GetStarted/GetStarted";
import Industries from "./pages/Industries/Industries";

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
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route
  path="/services/:id"
  element={<ServiceDetails />}
/>
<Route
  path="/resource-outsourcing"
  element={<ResourceOutsourcing />}
/>
<Route
  path="/get-started"
  element={<GetStarted />}
/>
<Route
  path="/industries"
  element={<Industries />}
/>
        <Route path="/career" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;