// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/logo.png";
// import { useSelector } from "react-redux";

// const Nav = () => {
//   const navigate = useNavigate()
//   const navigateToHome = () =>{
//     navigate('/')
//   }

//   const cartItems = useSelector((store)=>store.cart.items)
//   console.log(cartItems);
//   const handleNav = (item) =>{
//     navigate(`/shop/${item}`)
//   }
//   return (
//     <div className="w-full lg:px-8 lg:py-4  flex justify-between items-center">
//       <div className="flex">
//       <img onClick={navigateToHome} className="lg:h-14 h-12 cursor-pointer" src={Logo} alt="" />
//       <select className="bg-gray-200 rounded-lg px-4 ">
//         <option onClick={()=>handleNav(clothes)} className="bg-gray-100 px-4 py-2 rounded-lg" value="cloth">Cloth</option>
//         <option onClick={()=>handleNav(medicine)} className="bg-gray-100 px-4 py-2 rounded-lg" value="medicine">Medicine</option>
//         <option onClick={()=>handleNav(dogproducts)} className="bg-gray-100 px-4 py-2 rounded-lg" value="food">Food</option>
//       </select>
//       </div>
//       <div className="links lg:flex gap-5 text-slate-900 font-bold lg:text-lg">
//         <Link to={"/"}>Home</Link>
//         <Link to={"/shop"}>Shop</Link>
//         <Link to={"/qna"}>FAQ's</Link>
//         {/* <Link to={"/contact"}>Contact</Link> */}
//         {/* <Link to={"/cart"}>Cart ({cartItems.length} item)</Link> */}
//         <Link to={"/cart"}>Cart </Link>
//         <Link to={"/orderhistory"}>Orders</Link>

//       </div>
//     </div>
//   );
// };

// export default Nav;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Nav = () => {
  const navigate = useNavigate();
  const [showDropdowndogs, setShowDropdowndogs] = useState(false);
  const [showDropdowncats, setShowDropdowncats] = useState(false);

  const handleNav = (item) => {
    navigate(`/shop/${item}`);
    setShowDropdowndogs(false);
    setShowDropdowncats(false);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full lg:px-8 lg:py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          onClick={navigateToHome}
          className="lg:h-14 h-12 cursor-pointer"
          src={Logo}
          alt=""
        />
        <div className="relative ml-4">
          <button
            onClick={() => setShowDropdowndogs(!showDropdowndogs)}
            className="border-[1px] border-black rounded-lg px-4 py-2 font-semibold"
            aria-haspopup="true"
            aria-expanded={showDropdowndogs ? "true" : "false"}
          >
            🐶 Dogs ▼
          </button>
          {showDropdowndogs && (
            <div className="absolute z-10 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <button
                onClick={() => handleNav("clothes")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Cloth
              </button>
              <button
                onClick={() => handleNav("medicine")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Medicine
              </button>
              <button
                onClick={() => handleNav("dogproducts")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Food
              </button>
            </div>
          )}
        </div>
        <div className="relative ml-4">
          <button
            onClick={() => setShowDropdowncats(!showDropdowncats)}
            className="border-[1px] border-black rounded-lg px-4 py-2 font-semibold"
            aria-haspopup="true"
            aria-expanded={showDropdowncats ? "true" : "false"}
          >
            😺 Cats ▼
          </button>
          {showDropdowncats && (
            <div className="absolute z-10 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <button
                onClick={() => handleNav("cattoys")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Toys
              </button>
              <button
                onClick={() => handleNav("medicinecat")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Medicine
              </button>
              <button
                onClick={() => handleNav("catproducts")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Food
              </button>
            </div>
          )}
        </div>

        
      </div>
      <div className="links lg:flex gap-5 text-black font-semibold lg:text-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/qna"}>FAQ's</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/orderhistory"}>Orders</Link>
      </div>
    </div>
  );
};

export default Nav;
