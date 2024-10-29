import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-100 text-center overflow-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
