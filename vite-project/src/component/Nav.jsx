import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Nav = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);
  return (
    <div className="w-full lg:px-8 lg:py-4  flex justify-between items-center">
      <img className="lg:h-14 h-12" src={Logo} alt="" />
      <div className="links lg:flex gap-5 text-slate-900 font-bold lg:text-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/qna"}>FAQ's</Link>
        <Link to={"/contact"}>Contact</Link>
        {/* <Link to={"/cart"}>Cart ({cartItems.length} item)</Link> */}
        <Link to={"/cart"}>Cart </Link>
        <Link to={"/orderhistory"}>Orders</Link>

      </div>
    </div>
  );
};

export default Nav;
