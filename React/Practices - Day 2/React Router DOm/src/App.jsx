import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mihir from "./Pages/Nestedpage/Mihir";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";
import Girls from "./Pages/Nestedpage/Girls";
import Dynamicroute from "./Pages/Dynamicroute-Productdetails";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* simple routing ! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/king/mihir" element={<Mihir />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Dynamicroute />} />
        <Route path="/products/girls" element={<Girls />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="girls" element={<Girls />} />    // this is not the correct way use ai in Future
        </Route> */}
      </Routes>

      {/* dynamic routing !! */}

      <Footer />
    </div>
  );
};

export default App;
