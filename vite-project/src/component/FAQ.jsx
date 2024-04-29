// import React, { useState } from 'react';
// import faq from '../utils/faqdata';

// const FAQ = () => {
//   const [fulldata] = useState(faq);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selected, setSelected] = useState(null);
//   const [searchtext, setSearchtext] = useState("")
//   const [copydata, setCopydata] = useState(faq)

//   const toggle = (index) => {
//     if (selected === index) {
//       return setSelected(null);
//     }
//     setSelected(index);
//   };

//   const resetSearch = () => {
//     setSearchtext('');
//     setCopydata(fulldata);
//   };

//   const filterByCategory = (category) => {
//     setSelectedCategory(category);
//     setSelected(null); // Reset selected accordion item when category changes
//   };

//   return (
//     <>
//       <div className='flex lg:w-[70vw] p-5   mx-auto text-center justify-center items-center gap-5 bg-slate-500 rounded-lg lg:py-2 flex-col lg:flex-row'>
//         <button className='m-2 bg-slate-800 text-white mx-2 px-4 py-2 rounded-lg ' onClick={() =>{ filterByCategory(null);resetSearch()}}>All</button>
//         <button className='m-2 bg-slate-800 text-white mx-2 px-4 py-2 rounded-lg ' onClick={() => {filterByCategory('Dog');resetSearch()}}>Dog</button>
//         <button className='m-2 bg-slate-800 text-white mx-2 px-4 py-2 rounded-lg ' onClick={() => {filterByCategory('Cat');resetSearch()}}>Cat</button>
//         <button className='m-2 bg-slate-800 text-white mx-2 px-4 py-2 rounded-lg ' onClick={() => {filterByCategory('Bird');resetSearch()}}>Bird</button>
       
//         <input className="dlex flex-wrap placeholder:italic placeholder:text-slate-400 block bg-white w-[50%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-slate-800 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" value={searchtext} onChange={(e)=>setSearchtext(e.target.value)}/>

//         <button onClick={()=>{console.log(searchtext);
//           const searchfilter = fulldata.filter((result)=>result.question.toLowerCase().includes(searchtext.toLowerCase()))
//           setCopydata(searchfilter)
//         }} className='m-2 bg-slate-800 text-white mx-2 px-4 py-2 rounded-lg'>Search</button>
//       </div>
//       {copydata.map((item,index)=> {
//         if (selectedCategory && item.category !== selectedCategory) {
//           return null; // Skip rendering if category doesn't match selected category
//         }
//         return (
//           <div key={index} className='flex cursor-pointer flex-col  w-[70%] mx-auto mt-5 bg-gray-500 rounded'>
//             <div onClick={() => toggle(index)} className='flex justify-between items-center w-full px-5 py-3 font-bold text-xl'>
//               <h1>{item.question}</h1>
//               <p>{selected === index ? "⬆️" : "⬇️"}</p>
//             </div>
//             <div style={{ maxHeight: selected === index ? '10vw' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
//             <h1 className='text-left flex justify-start px-5 py-3 font-medium text-lg'>{selected === index ? item.answer : null}</h1>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default FAQ;

// import React, { useEffect } from 'react';

// const FAQ = () => {
//   const que = "my cat is not eating food";

//   const getQue = async () => {
//     try {
//       const response = await fetch("http://164.90.153.123:5000/api/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ que }) 
//       });

//       const data = await response.json();
//       console.log(data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getQue();
//   }, []); 

//   return (
//     <div>FAQ</div>
//   );
// };

// export default FAQ;



import React, { useState } from "react";
// import axios from "axios";
// import loadinggif from "../assets/loadinggif.gif";

const FAQ = () => {
  const [que, setQue] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  
  const generateanswer = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDV9iqn6Uc1ZzQnH2RnoefJUUQKEzbTMYA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: que,
                  },
                ],
              },
            ],
          }),
        }
      );
    
      const data = await response.json();
      setAnswer(data["candidates"][0]["content"]["parts"][0]["text"]); // Access data here using 'data' variable
      setLoading(false);
      setQue("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setQue("");
    }
  };
  

  return (
    <div className="w-screen min-h-screen p-4">
      <h1 className="text-center font-semibold text-4xl text-zinc-500">
        Ask your question related to your pet.
      </h1>
      <div className="w-full my-10 flex justify-center gap-4">
        <input
          className="px-4 py-2 bg-transparent border-2 border-zinc-500 rounded-lg md:w-[60%]"
          onChange={(e) => setQue(e.target.value)}
          placeholder="Ask your question"
          type="text"
          value={que}
        />
        <button
          className="px-4 py-2 rounded-lg bg-zinc-500 text-white"
          onClick={generateanswer}
        >
          Generate answer
        </button>
      </div>

      <div className="md:w-[80%] w-full min-h-screen mx-auto text-justify border-2 px-4 py-2 rounded-lg border-zinc-500">
        {/* {!loading ? <pre className="w-full overflow-auto whitespace-pre-wrap">{answer}</pre> : <img src={loadinggif} alt="" />} */}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <pre className="w-full overflow-auto whitespace-pre-wrap">
            {answer}
          </pre>
        )}
      </div>
    </div>
  );
};

export default FAQ;
