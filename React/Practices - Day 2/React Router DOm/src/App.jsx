import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mihir from "./Pages/Nestedpage/Mihir";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />

      {/* simple routing ! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/king/mihir" element={<Mihir />}/>
      </Routes>
        {/* dynamic routing !! */}

        <Footer />
    </div>
  );
};

export default App;
