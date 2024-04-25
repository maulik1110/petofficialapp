import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OverallInclude from "./OverallInclude";
import { addtocart } from "../utils/cartSlice";

const Clothes = () => {
  const [data, setdata] = useState([]);
  const [start, setstart] = useState(0);
  const [rows, setRows] = useState(40);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const gettoys = async (startIdx, rowsCount) => {
    setLoading(true);

    const response = await fetch(
      `https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22dog-clothes%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=${rowsCount}&start=${startIdx}&version=V2&facet.version=V2`
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

export default Clothes;
