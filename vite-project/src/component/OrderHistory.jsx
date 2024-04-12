import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
    const orders = useSelector((state) => state.cart.orders);

    return (
        <div>
            <h1>Order History</h1>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <h3>Order ID: {order.orderId}</h3>
                        <p>Date: {order.date}</p>
                        <ul>
                            {order.items.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} - Rs.{item.price}
                                </li>
                            ))}
                        </ul>
                        <p>Total Cost: Rs.{order.totalCost.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
