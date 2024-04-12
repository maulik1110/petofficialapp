import React from "react";
import Marquee from "react-fast-marquee";

const AnimateText = () => {
    const textstyle = {
        display: "flex",
    alignItems: "center",
    marginRight: "1vw",
    // backgroundColor: "green",
    padding: "0.5vw 1vw"
    }
  return (
    <div className="main mt-5 text-black flex justify-between items-center py-[1vw] text-xl">
      <Marquee className="mq-container" speed={80} gradient={false} pauseOnHover autoFill>
        <h1 className="text bg-slate-400 rounded" style={textstyle}>HYGIENE</h1>
        <h1 className="text font-serif bg-orange-200 rounded" style={textstyle}>FOOD</h1>
        <h1 className="text font-thin bg-sky-400 rounded" style={textstyle}>CLOTHES</h1>
        <h1 className="text font-extrabold bg-amber-400 rounded" style={textstyle}>MEDICINE</h1>
        <h1 className="text font-extralight bg-lime-700 rounded" style={textstyle}>HYGIENE</h1>
        <h1 className="text font-black bg-slate-600 rounded" style={textstyle}>FOOD</h1>
        <h1 className="text font-mono bg-cyan-300 rounded" style={textstyle}>CLOTHES</h1>
        <h1 className="text bg-purple-200 rounded" style={textstyle}>MEDICINE</h1>
      </Marquee>
    </div>
  );
};

export default AnimateText;
