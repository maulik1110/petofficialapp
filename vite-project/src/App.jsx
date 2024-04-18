import React from "react";
import Nav from "./component/Nav";
import Slider from "./component/Slider";
import Moonrise from "./assets/Moonrisegradient.jpg";
import Bora from "./assets/bora.jpg";
import Peach from "./assets/Peach.jpg";
import Petrol from "./assets/Petrol.jpg";
import { Navigate, Route, Routes } from "react-router-dom";
import Dogsproducts from "./component/Dogsproducts";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import Cart from "./component/Cart";
import Success from "./component/Success";
import Cancel from "./component/Cancel";
import OrderHistory from "./component/OrderHistory";
import Birdsproducts from "./component/Birdsproducts";
import CatProd from "./component/CatProducts";
import Shop from "./component/Shop";
import CatProducts from "./component/CatProducts";

const App = () => {
  return ( 
    <div className="w-screen h-full overflow-hidden overflow-y-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/shop/*" element={<Shop/>}>
          <Route index element={<Navigate to ="dogproducts"/>}/>
          <Route path="dogproducts" element={<Dogsproducts/>}/>
          <Route path="catproducts" element={<CatProducts/>}/>
        </Route>
        <Route path="/birds" element={<Birdsproducts/>}/>
        <Route path="/cats" element={<CatProd/>}/>
        <Route path="/qna" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
        <Route path="/orderhostory" element={<OrderHistory/>}/>
      </Routes>
      {/* <Slider /> */}
      <Footer/>
    </div>
  );
};

export default App;
