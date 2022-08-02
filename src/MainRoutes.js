import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

export default MainRoutes;
