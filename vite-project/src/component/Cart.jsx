// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/cartSlice";
// // import { clearCart } from "../utils/cartSlice";
// import { loadStripe } from "@stripe/stripe-js";
// import { SECRET_STRIPE_KEY } from "../utils/const";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
//   };

//   // const handleClearCart = () => {
//   //   dispatch(clearCart());
//   // };

//   const calculateSubtotal = (item) => {
//     return item.price * item.quantity;
//   };

//   // const totalCost = cartItems.reduce(
//   //   (acc, item) => acc + calculateSubtotal(item),
//   //   0
//   // );

  // const paymenthandler = async () => {
  //   const stripe = await loadStripe(SECRET_STRIPE_KEY);

  //   const body = {
  //     products: cartItems,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   const response = await fetch(
  //     "http://localhost:7000/api/create-checkout-session",
  //     {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     }
  //   );

  //   const session = await response.json();
  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     console.log(response.error);
  //   }

  //   dispatch(addOrder(orderDetails));

  // };

//   return (
//     <div className="px-10">
//       <h1 className="text-center font-bold text-3xl">Cart</h1>
      
//       <ul>
//         {cartItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-[20vw] h-[20vw] rounded-lg mb-3"
//             />
//             <div className="w-full">
//               <h3 className="font-bold text-lg ">{item.name}</h3>
//               <p className="text-sm">{item.description}</p>
//               <p className="font-semibold text-2xl">Price: Rs.{item.price}</p>
//               <div className="flex items-center">
//                 <h2 className="font-bold  mt-4 text-lg">
//                   Quantity: {item.quantity}
//                 </h2>
//                 <button
//                   className="px-2 py-1 bg-blue-500 text-white rounded-md ml-2"
//                   onClick={() => handleRemoveItem(item)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="px-2 py-1 bg-green-500 text-white rounded-md ml-2"
//                   onClick={() => handleAddItem(item)}
//                 >
//                   +
//                 </button>
//                 <h2 className="font-bold  mt-4 text-lg">
//                   Total: Rs.{calculateSubtotal(item).toFixed(2)}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//       <div className="text-center mt-4">
//         <h2 className="text-xl font-bold">
//           {/* Total Amount: Rs.{totalCost.toFixed(2)} */}
//         </h2>
//         <button
//           onClick={paymenthandler}
//           className="bg-slate-700 px-4 py-2 rounded-lg text-center font-semibold text-white mt-4"
//         >
//           {/* Pay: Rs.{totalCost.toFixed(2)} */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from "@stripe/stripe-js";
import { SECRET_STRIPE_KEY } from "../utils/const";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item.title));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.title));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const toastAddOnClick = () => {
    toast("Item added");
  };
  const toastRemoveOnClick = () => {
    toast("Item removed");
  };


  const paymenthandler = async () => {
    const stripe = await loadStripe(SECRET_STRIPE_KEY);

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    // const response = await fetch(
    //   "https://petofficialapp-api.vercel.app/api/create-checkout-session",
    //   {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(body),
    //   }
    // );
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


  return cartItems.length>0 ? (
    <>
    <div className="px-10 w-screen min-h-screen">
      <h1 className="text-center font-bold text-3xl">Cart</h1>

      <ul>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="md:flex md:justify-between justify-center items-center gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300"
          >
            <img
              src={item.imageUrl || item.img}
              alt={item.name }
              className="md:w-[20vw] md:h-[20vw] w-[50vw] h-[50vw] rounded-lg mb-3 mx-auto"
            />
            <div className="w-full">
              <h3 className="md:font-bold font-semibold text-lg md:text-left text-center my-2">
                {item.title || item.name}
              </h3>
              <p className="text-sm">{item.description}</p>
              <p className="font-semibold text-2xl md:text-left text-center">
                Price: Rs.{item.price}
              </p>
              <div className="flex flex-col md:items-center md:flex-row  gap-2 items-center my-4">
                <h2 className="font-bold  mt-4 text-lg">
                  Quantity: {item.quantity}
                </h2>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md ml-2"
                  onClick={() => {handleRemoveItem(item)
                  toastRemoveOnClick()
                  }}
                >
                  -
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
                  onClick={() => {handleAddItem(item)
                    toastAddOnClick()
                  }}
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
        <button onClick={paymenthandler} className="bg-slate-700 px-4 py-2 rounded-lg my-4 text-center font-semibold text-white mt-4">
          Pay: Rs.{totalCost.toFixed(2)}
        </button>
      </div>
    </div>
    <ToastContainer/>
    </>

  ) : <h1 className="text-center font-semibold text-4xl my-4 h-screen w-screen">Your cart is empty</h1>;
  
};

export default Cart;
