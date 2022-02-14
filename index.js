
const app = require('express')()
const path = require('path')
const Razorpay = require('razorpay')
const cors = require('cors')

app.use(cors());

var razorpay = new Razorpay({
    key_id: 'rzp_test_3kKNGSEXEeVCyd',
    key_secret: 'A9ECEfzofWQl8I41BM2RhZb2',
});

app.post('/razorpay', async(req, res) =>{

    const amount = 5;
    const currency = 'INR'
    const response = await razorpay.orders.create({
        amount: (amount * 100), 
        currency,
        receipt:1122,
    })
    console.log(response) 
    res.json({
        id: response.id,
        currency:'INR',
        amount: response.amount
    })
})

app.listen(5000,()=>{
    console.log(`Hack the world with port 5000`);
});
// const data = app.post('https://api.razorpay.com/v1/orders', expressAsyncHandler(async(req, res) =>{
//     res.send({
        
//             "amount": 500,
//             "currency": "INR",
//             "receipt": "recipt_0011",
        
//     });
// })
// )
// console.log(data);

