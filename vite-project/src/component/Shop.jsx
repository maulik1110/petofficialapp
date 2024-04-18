import React from "react";
import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className="w-screen min-h-screen p-5">
      <div className="w-fit p-4  text-white rounded-lg flex gap-5">
        <Link to={"/shop/dogproducts"}>
          <button className="bg-black px-4 py-2 rounded-lg">Dogs</button>
        </Link>
        <Link to={"/shop/catproducts"}>
          <button className="bg-black px-4 py-2 rounded-lg">Cats</button>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Shop;
