import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Accessibility from "./pages/Accessiblity/Accessibility";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";

import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ResourceOutsourcing from "./pages/ResourceOutsourcing/ResourceOutsourcing";
import GetStarted from "./pages/GetStarted/GetStarted";
import Industries from "./pages/Industries/Industries";

import AccessibilityEngine from "./components/AccessibilityEngine/AccessibilityEngine";


function MainPage() {
  return (
    <>
      <Header />

      <main>
        <Home />

        <AccessibilityEngine />

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

        {/* =====================================
            HOME
        ====================================== */}

        <Route
          path="/"
          element={<MainPage />}
        />


        {/* =====================================
            ABOUT
        ====================================== */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* =====================================
            CONTACT
        ====================================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* =====================================
            MAIN ACCESSIBILITY PAGE
        ====================================== */}

        <Route
          path="/accessibility"
          element={<Accessibility />}
        />


        {/* =====================================
            ACCESSIBILITY SERVICE DETAILS
        ====================================== */}

        <Route
          path="/services/:id"
          element={<ServiceDetails />}
        />


        {/* =====================================
            RESOURCE OUTSOURCING
        ====================================== */}

        <Route
          path="/resource-outsourcing"
          element={<ResourceOutsourcing />}
        />


        {/* =====================================
            GET STARTED
        ====================================== */}

        <Route
          path="/get-started"
          element={<GetStarted />}
        />


        {/* =====================================
            INDUSTRIES
        ====================================== */}

        <Route
          path="/industries"
          element={<Industries />}
        />


        {/* =====================================
            CAREERS
        ====================================== */}

        <Route
          path="/career"
          element={<Careers />}
        />

      </Routes>
    </>
  );
}


export default App;