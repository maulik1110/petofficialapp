// const express = require('express');
// const app = express();
// const cors = require('cors');
// const stripe = require('stripe')("sk_test_51OppufSCTYfNrNc7uiBaC0g6amoFw4q6RdLj6kaySDPhnXMovFHsS1Xq7nDihFytvHd6fWISD6WAUBA46DJessm500D0yqAEn7");

// app.use(express.json());
// app.use(cors());

// app.post("/api/create-checkout-session", async (req, res) => {
//     const { products } = req.body;
//     console.log(products);

//     try {
//         // Create customer
//         const customer = await stripe.customers.create({
//             name: 'Maulik',
//             address: {
//                 line1: '510 Townsend St',
//                 postal_code: '98140',
//                 city: 'Brampton',
//                 // state: 'Buston',
//                 country: 'Canada',
//             },
//         });

//         // Create line items
//         const lineItems = products.map((product) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: product.title,
//                 },
//                 unit_amount: Math.round(product.price * 100), // Convert price to paisa and round it to ensure it's an integer
//             },
//             quantity: 1,
//         }));

//         // Create checkout session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             customer: customer.id, // Add customer ID to associate with the checkout session
//             success_url: "http://localhost:5173/success",
//             cancel_url: "http://localhost:5173/cancel"
//         });

//         res.json({ id: session.id });
//     } catch (error) {
//         console.error("Error creating checkout session:", error);
//         res.status(500).json({ error: "An error occurred while creating the checkout session" });
//     }
// });

// app.listen(7000, () => {
//     console.log("Server is running on port 7000");
// });

const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')("sk_test_51OppufSCTYfNrNc7uiBaC0g6amoFw4q6RdLj6kaySDPhnXMovFHsS1Xq7nDihFytvHd6fWISD6WAUBA46DJessm500D0yqAEn7");

// CORS options specifying allowed origin
const corsOptions = {
    origin: 'https://petofficialapp.vercel.app',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.options('/api/create-checkout-session', cors(corsOptions));


// Middleware setup
app.use(express.json());
app.use(cors(corsOptions));

// POST endpoint for creating checkout session
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products);

    try {
        // Create customer
        const customer = await stripe.customers.create({
            name: 'Maulik',
            address: {
                line1: '510 Townsend St',
                postal_code: '98140',
                city: 'Brampton',
                // state: 'Buston',
                country: 'Canada',
            },
        });

        // Create line items
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.title,
                },
                unit_amount: Math.round(product.price * 100), // Convert price to paisa and round it to ensure it's an integer
            },
            quantity: 1,
        }));

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            customer: customer.id, // Add customer ID to associate with the checkout session
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel"
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "An error occurred while creating the checkout session" });
    }
});

// Start the server
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
