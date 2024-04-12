import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { loadStripe } from "@stripe/stripe-js";
import { SECRET_STRIPE_KEY } from '../utils/const';



const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate subtotal for each item
  const calculateSubtotal = (item) => {
    return item.price;
  };

  // Calculate total cost
  const totalCost = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  const itemPrice = 500;
  const currency = "INR";
  const itemName = "abc"



  // const paymenthandler = async (e) => {
  //   const response = await fetch("https://localhost:5000/order/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       receipt: receiptid,
  //       amount,
  //       currency,
  //     })
  //   });
  //   const order = await response.json();
  //   console.log("order",order);
  // };

 const paymenthandler = async()=>{
  const stripe=await loadStripe(SECRET_STRIPE_KEY)

  const body = {
    products: cartItems
  }
  const headers = {
    "Content-Type": "application/json",
  }
  const response  = await fetch ("http://localhost:7000/api/create-checkout-session",{
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })

  const session = await response.json()
  const result = stripe.redirectToCheckout({
    sessionId: session.id
  })

  if(result.error){
    console.log(response.error);
  }
 }

  return (
    <div className='px-10'>
      <h1 className='text-center font-bold text-3xl'>Cart</h1>
      <button onClick={handleClearCart} className='bg-slate-700 px-3 py-2 font-semibold text-white mt-2 mb-2 rounded-lg'>Clear Cart</button>
      <ul>
        {cartItems.map((item, index) => (
          <div className='flex justify-between gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300' key={index}>
            <img src={item.img} alt={item.name} className='w-[20vw] h-[20vw] rounded-lg mb-3 	'/>
            <div className='w-full'>
              <h3 className='font-bold text-lg '>{item.name}</h3>
              <p className='text-sm'>{item.description}</p>
              <p className='font-semibold text-2xl'>Price: Rs.{item.price}</p> {/* Displaying item price */}
            </div>
          </div>
        ))}
      </ul>
      <button onClick={paymenthandler} className='bg-slate-700 px-4 py-2 rounded-lg text-center font-semibold text-white'>Pay: Rs.{totalCost.toFixed(2)}</button>
    </div>
  );
};

export default Cart;
