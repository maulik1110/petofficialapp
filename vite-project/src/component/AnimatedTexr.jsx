import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import dogfood from "../assets/dogfood.png"
import medicine from "../assets/medicine.png"
import catfood2 from "../assets/catfood2.png"
import cloth from "../assets/cloth.png"

const AnimateText = () => {

  const marqueeimg = [dogfood, catfood2, cloth,medicine]
  const navigate = useNavigate()
    const textstyle = {
        display: "flex",
    alignItems: "center",
    marginRight: "1vw",
    // backgroundColor: "green",
    padding: "0.5vw 1vw"
    }
  // return (
  //   <div className="main mt-5 text-black flex justify-between items-center py-[1vw] text-xl">
  //     <Marquee className="mq-container" speed={80} gradient={false} pauseOnHover autoFill>
  //       <Link to={"/shop/catproducts"} className="text bg-slate-400 rounded" style={textstyle}>CAT FOOD</Link>
  //       <Link to={"/shop/dogproducts"} className="text font-serif bg-orange-200 rounded" style={textstyle}>DOG FOOD</Link>
  //       <Link to={"/shop/clothes"} className="text font-thin bg-sky-400 rounded" style={textstyle}>CLOTHES</Link>
  //       <Link to={"/shop/medicine"} className="text font-extrabold bg-amber-400 rounded" style={textstyle}>MEDICINE</Link>
  //       <Link to={"/shop/catproducts"} className="text font-extralight bg-lime-700 rounded" style={textstyle}>CAT FOOD</Link>
  //       <Link to={"/shop/dogproducts"} className="text font-black bg-slate-600 rounded" style={textstyle}>DOG FOOD</Link>
  //       <Link to={"/shop/clothes"} className="text font-mono bg-cyan-300 rounded" style={textstyle}>CLOTHES</Link>
  //       <Link to={"/shop/medicine"} className="text bg-purple-200 rounded" style={textstyle}>MEDICINE</Link>
  //     </Marquee>
  //   </div>
  // );









  // **************************************** pic based
  // return (
  //   <div className="main mt-5  text-black flex justify-between items-center py-[1vw] text-xl">
  //     <Marquee className="mq-container" speed={80} gradient={false} pauseOnHover autoFill>
  //         <Link to={"/shop/dogproducts"}><img className="h-44 w-44 mr-10" src={dogfood} alt="" /></Link>
  //         <Link to={"/shop/catproducts"}><img className="h-44 w-44 mr-10" src={catfood2} alt="" /></Link>
  //         <Link to={"/shop/medicine"}><img className="h-44 w-44 mr-10" src={medicine} alt="" /></Link>
  //         <Link to={"/shop/clothes"}><img className="h-44 w-44 mr-10" src={cloth} alt="" /></Link>
  //     </Marquee>
  //   </div>
  // );


  // ***************** static images ****************
  return (
    <div className="main mt-5  text-black flex flex-col justify-between items-center py-[1vw] text-xl">
      <h1 className="text-center font-semibold text-5xl my-4">Try these categories</h1>
      <div className="mq-container text-center flex justify-evenly w-full" speed={80} gradient={false} pauseOnHover autoFill>
          <Link to={"/shop/dogproducts"} className="flex flex-col items-center justify-center">
            <img className="h-44 w-44 " src={dogfood} alt="" />
            <h1 className="my-2 font-semibold">Dog Food</h1>
            </Link>
          <Link to={"/shop/medicinecat"}>
             <img className="h-44 w-44" src={medicine} alt="" />
            <h1 className="my-2 font-semibold">Cat Medicine</h1>
            </Link>
          <Link to={"/shop/clothes"}>
             <img className="h-44 w-44 " src={cloth} alt="" />
            <h1 className="my-2 font-semibold">Dog Clothes</h1>
            </Link>
          <Link to={"/shop/catproducts"} >
            <img className="h-44 w-44 " src={catfood2} alt="" />
            <h1 className="my-2 font-semibold">Cat Food</h1>
            </Link>
      </div>
    </div>
  );
};

export default AnimateText;
