import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar, Footer } from "./Components";
import { Home, AboutPage, Gallery, ContactUs } from "./Pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
