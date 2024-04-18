// import React from 'react'
// // import dogProducts from '../utils/allproducts'
// import catprod from "../utils/catprod"
// import { useDispatch } from 'react-redux'
// import { addItem } from '../utils/cartSlice'


// const CatProd = ({cartItems}) => {
//   const dispatch = useDispatch()

//   const handleAddItem = (item)=>{
//     dispatch(addItem(item))
//   }

//   const truncateDescription = (description) => {
//     const words = description.split(' ');
//     if (words.length >10) {
//       return words.slice(0, 5).join(' ') + '...';
//     }
//     return description;
//   };

//   return (
//     <div className='flex flex-wrap items-center justify-evenly mt-5 '>
//       {catprod.map((item,index)=>(
//         <div className="card hover:scale-[1.1] transition-all	-ease-linear-duration-100 lg:w-[30vw] w-[90%] lg:h-[35vw] h-fit mb-10 rounded-lg items-center justify-center flex lg:flex-col overflow-hidden shadow-lg ">
//           <img style={{borderRadius:"1.2vw"}} className='px-2 lg:h-[20vw] h-[35vw] lg:w-[20vw] w-[30vw] rounded-lg bg-cover bg-center' src={item.img} alt="" />
//           <div className="content px-3 py-1">
//             <h1 className='font-bold text-lg'>{item.name}</h1>
//             {/* <h2 className='font-regular'>{item.description}</h2> */}
//             <h2 className='font-medium'>{truncateDescription(item.description)}</h2>
//             <div className='flex justify-between font-medium text-lg'>
//               <h3 className=''>Rs.{item.price}</h3>
//               <h3>{item.weight}</h3>
//             </div>
//             <p>{item.brand}</p>
//             <div className='gap-5 flex'>
//             <button className=' bg-slate-800 text-white mb-2 mt-2 px-4 py-2 rounded-lg' onClick={()=>handleAddItem(item)}>Add to Cart</button>
//             {item.stock && <button className=' bg-red-800 text-white mb-2 mt-2 px-4 py-2 rounded-lg' >Out of stock</button>}

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CatProd

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OverallInclude from "./OverallInclude";
import { addtocart } from "../utils/cartSlice";

const CatProducts = () => {
  const [data, setdata] = useState([]);
  const [start, setstart] = useState(0);
  const [rows, setRows] = useState(40);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const gettoys = async (startIdx, rowsCount) => {
    setLoading(true);

    const response = await fetch(
      `https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22cat-food%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=${rowsCount}&start=${startIdx}&version=V2&facet.version=V2`
    );

    const result = await response.json();
    const newProducts = result.response.products || [];
    setdata((prevData) => [...prevData, ...newProducts]); // Append new products to existing data
    setLoading(false);
    console.log(result.response.products);
  };

  useEffect(() => {
    gettoys(start, rows);
  }, []);

  const loadmore = () => {
    const newstart = start + rows;
    const newrows = newstart + 40;
    gettoys(newstart, newrows);
    setstart(newstart);
  };

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };
  return (
    
    <OverallInclude data={data} handleAddToCart={handleAddToCart} loading={loading} loadmore={loadmore}/>
    
  );
};

export default CatProducts;
