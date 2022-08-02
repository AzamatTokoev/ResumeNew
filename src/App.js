import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {/* <HomePage />
      <AboutPage /> */}
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
