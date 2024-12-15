import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductDescription from "./components/ProductDescription";
import FlavourSection from "./components/FlavourSection";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProductDescription />
      <FlavourSection />
      <Footer />
    </div>
  );
}

export default App;
