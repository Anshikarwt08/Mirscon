import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header/Header";
import Services from "./pages/services/services";
import Technology from "./pages/Technology/Technology";
import Team from "./components/Team/Team";
import ContactBanner from "./pages/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";

import QualityAutomation from "./pages/ServiceDetails/QualityAutomation";
import Salesforce from "./pages/ServiceDetails/Salesforce";
import Integration from "./pages/ServiceDetails/Integration";
import ServiceNow from "./pages/ServiceDetails/ServiceNow";
import Cloud from "./pages/ServiceDetails/Cloud";
import ProductEngineering from "./pages/ServiceDetails/ProductEngineering";

function MainPage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/quality-automation" element={<QualityAutomation />} />
      <Route path="/salesforce" element={<Salesforce />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/servicenow" element={<ServiceNow />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/product-engineering" element={<ProductEngineering />} />
    </Routes>
  );
}

export default App;