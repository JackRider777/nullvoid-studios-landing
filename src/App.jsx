import React from "react";
import FloatingNavbar from "./components/FloatingNavbar";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    // Add min-h-screen here
    <div className="bg-black text-white font-sans min-h-screen">
      <FloatingNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
