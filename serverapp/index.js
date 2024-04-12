// const express = require('express')
// const Razorpay = require('razorpay')
// const cors = require('cors')
// const crypto = require('crypto')

// require ("dotenv").config()

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false}))
// app.use(cors())


// app.get("/",(req,res)=>{
//     res.send("hi")
// })


// app.post("/order",async(req,res)=>{
//     try {
//         const razorpay = new Razorpay({
//             key_id: process.env.RAZORPAY_KEY_ID,
//             key_secret: process.env.RAZORPAY_KEY_SECRET
//         })

//         if(!req.body){
//             return res.status(404).send("BAD Request")
//         }
//         const options = req.body;
//         const order = await razorpay.orders.create(options)

//         if(!order){
//             return res.status(404).send("BAD Request")
//         }
//         res.json(order)

//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error)
//     }
// })


// app.listen(process.env.PORT,()=>{
//     console.log(`running on port  + ${process.env.PORT}`);
// })


const express = require('express');
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{
    console.log("connecting to Mongo");
}).catch((e)=>{
    console.log(e);
})

// api
app.post("/checkout", async(req,res)=>{
    
})
// payment verification
app.post("/paymentverification", async(req,res)=>{

})

// middelware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

// routes
app.listen(process.env.PORT,()=>{
    console.log("listening");
})
