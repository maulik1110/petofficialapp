// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../utils/cartSlice";
// import { loadStripe } from "@stripe/stripe-js";
// import { SECRET_STRIPE_KEY } from "../utils/const";
// import { addItem, removeItem } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   console.log(cartItems);
//   const dispatch = useDispatch();
//   console.log(cartItems);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   // Calculate subtotal for each item
//   const calculateSubtotal = (item) => {
//     return item.price;
//   };

//   // Calculate total cost
//   const totalCost = cartItems.reduce(
//     (acc, item) => acc + calculateSubtotal(item),
//     0
//   );

//   const itemPrice = 500;
//   const currency = "INR";
//   const itemName = "abc";

//   // const paymenthandler = async (e) => {
//   //   const response = await fetch("https://localhost:5000/order/", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       receipt: receiptid,
//   //       amount,
//   //       currency,
//   //     })
//   //   });
//   //   const order = await response.json();
//   //   console.log("order",order);
//   // };

//   const paymenthandler = async () => {
//     const stripe = await loadStripe(SECRET_STRIPE_KEY);

//     const body = {
//       products: cartItems,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     const response = await fetch(
//       "http://localhost:7000/api/create-checkout-session",
//       {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(body),
//       }
//     );

//     const session = await response.json();
//     const result = stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       console.log(response.error);
//     }
//   };

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
// };

// const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
// };
//   // return (
//   //   <div className="px-10">
//   //     <h1 className="text-center font-bold text-3xl">Cart</h1>
//   //     <button
//   //       onClick={handleClearCart}
//   //       className="bg-slate-700 px-3 py-2 font-semibold text-white mt-2 mb-2 rounded-lg"
//   //     >
//   //       Clear Cart
//   //     </button>
//   //     <ul>
//   //       {cartItems.map((item, index) => (
//   //         <div
//   //           className="flex justify-between gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300"
//   //           key={index}
//   //         >
//   //           <img
//   //             src={item.img}
//   //             alt={item.name}
//   //             className="w-[20vw] h-[20vw] rounded-lg mb-3 	"
//   //           />
//   //           <div className="w-full">
//   //             <h3 className="font-bold text-lg ">{item.name}</h3>
//   //             <p className="text-sm">{item.description}</p>
//   //             <p className="font-semibold text-2xl">
//   //               Price: Rs.{item.price}
//   //             </p>{" "}
//   //             {/* Displaying item price */}
//   //             <h2 className="font-bold  mt-4 text-lg">Quantity</h2>
//   //             <button>+</button>
//   //             <button>-</button>
//   //           </div>
//   //         </div>
//   //       ))}
//   //     </ul>
//   //     <button
//   //       onClick={paymenthandler}
//   //       className="bg-slate-700 px-4 py-2 rounded-lg text-center font-semibold text-white"
//   //     >
//   //       Pay: Rs.{totalCost.toFixed(2)}
//   //     </button>
//   //   </div>
//   // );

// //   return (
// //     <div className="px-10">
// //         <h1 className="text-center font-bold text-3xl">Cart</h1>
// //         <ul>
// //             {cartItems.map((item, index) => (
// //                 <div key={index} className="flex justify-between items-center mb-3">
// //                     <div>
// //                         <h3 className="font-bold">{item.name}</h3>
// //                         <p className="text-sm">{item.description}</p>
// //                         <p className="font-semibold">Price: Rs.{item.price}</p>
// //                     </div>
// //                     <div className="flex items-center">
// //                         <button className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2" onClick={() => handleRemoveItem(item)}>-</button>
// //                         <span className="mr-2">{item.quantity}</span> {/* Display item quantity */}
// //                         <button className="px-2 py-1 bg-green-500 text-white rounded-md" onClick={() => handleAddItem(item)}>+</button>
// //                     </div>
// //                 </div>
// //             ))}
// //         </ul>
// //         <div className="text-center mt-4">
// //             <h2 className="text-xl font-bold">Total Amount: Rs.{totalCost.toFixed(2)}*{item.quantity}</h2>
// //             <button onClick={paymenthandler} className="px-4 py-2 bg-green-500 text-white rounded-md mt-4" >Pay Now</button>
// //         </div>
// //     </div>
// // );

// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { SECRET_STRIPE_KEY } from "../utils/const";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const paymenthandler = async () => {
    const stripe = await loadStripe(SECRET_STRIPE_KEY);

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(response.error);
    }

    dispatch(addOrder(orderDetails));

  };

  return (
    <div className="px-10">
      <h1 className="text-center font-bold text-3xl">Cart</h1>
      <button
        onClick={handleClearCart}
        className="bg-slate-700 px-3 py-2 font-semibold text-white mt-2 mb-2 rounded-lg"
      >
        Clear Cart
      </button>
      <ul>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[20vw] h-[20vw] rounded-lg mb-3"
            />
            <div className="w-full">
              <h3 className="font-bold text-lg ">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="font-semibold text-2xl">Price: Rs.{item.price}</p>
              <div className="flex items-center">
                <h2 className="font-bold  mt-4 text-lg">
                  Quantity: {item.quantity}
                </h2>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md ml-2"
                  onClick={() => handleRemoveItem(item)}
                >
                  -
                </button>
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded-md ml-2"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </button>
                <h2 className="font-bold  mt-4 text-lg">
                  Total: Rs.{calculateSubtotal(item).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">
          Total Amount: Rs.{totalCost.toFixed(2)}
        </h2>
        <button
          onClick={paymenthandler}
          className="bg-slate-700 px-4 py-2 rounded-lg text-center font-semibold text-white mt-4"
        >
          Pay: Rs.{totalCost.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Cart;
