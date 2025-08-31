// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSwitch from "./components/ContentSwitch";
import ReferralCard from "./components/ReferralCard";
import AboutUs from "./components/AboutUs";
import Lifestyle from "./components/Lifestyle";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { contentItems } from "./contentItems";
import Product from "./components/Product";
import InformationPage from "./components/InformationPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="min-h-screen bg-neutralBg text-gray-800 mb-8">
      <Navbar />
      <ScrollToTop /> {/* makes sure new routes start at top */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/cellogen"
          element={
            <>
              <HeroSection />
              <AboutUs />
              <ContentSwitch items={contentItems} />
              <Lifestyle />
              <Footer />
            </>
          }
        />
        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <InformationPage />
              <Lifestyle />
              <Footer />
            </>
          }
        />
        {/* Product Page */}
        <Route
          path="/product"
          element={
            <>
              <Product />
              <Lifestyle />
              <Footer />
            </>
          }
        />
        {/* Product Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              <Lifestyle />
              <Footer />
            </>
          }
        />
        {/* Referral Page */}
        <Route
          path="/referral"
          element={
            <>
              <ReferralCard />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
