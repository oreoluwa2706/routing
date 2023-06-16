import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./Components";
import { Home } from "./Pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
