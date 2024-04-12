import React from "react";
import Nav from "./component/Nav";
import Slider from "./component/Slider";
import Moonrise from "./assets/Moonrisegradient.jpg";
import Bora from "./assets/bora.jpg";
import Peach from "./assets/Peach.jpg";
import Petrol from "./assets/Petrol.jpg";
import { Route, Routes } from "react-router-dom";
import Dogsproducts from "./component/Dogsproducts";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import Cart from "./component/Cart";
import Success from "./component/Success";
import Cancel from "./component/Cancel";

const App = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%)",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/shop" element={<Dogsproducts/>}/>
        <Route path="/qna" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
      {/* <Slider /> */}
      <Footer/>
    </div>
  );
};

export default App;
