const axios = require('axios');
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = require('../config');

const createOrder = async (req, res) => {

    console.log(PAYPAL_API_CLIENT)
    console.log(PAYPAL_API_SECRET)

    try {

        const order = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: '105.70'
                    },
                    description: "Mensualidad",
                }
            ],
            application_context: {
                brand_name: "stt.com",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url: "http://localhost:5000/api/payments/capture",
                cancel_url: "http://localhost:5000/api/payments/cancel"
            }
        };  

        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data} = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: process.env.PAYPAL_API_CLIENT,
                password: process.env.PAYPAL_API_SECRET
            }
        });

        console.log(data)

        // const response = await axios.post(`${process.env.PAYPAL_API}/v2/checkout/orders`, order, {
        //     auth: {
        //         username: process.env.PAYPAL_API_CLIENT,
        //         password: process.env.PAYPAL_API_SECRET
        //     }
        // });
        // console.log(response.data)
    } catch (error) {
        console.log(error)
    }


    // console.log(response.data)

    return res.json({
        ok: true
    })

    // const params = new URLSearchParams()
    // params.append("grant_type", "client_credentials")

    // const { data } = axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     auth: {
    //         username: process.env.PAYPAL_API_CLIENT,
    //         password: process.env.PAYPAL_API_SECRET
    //     }
    // })

    // console.log(data)

    res.json({
        ok: true,
        msg: 'Creando orden'
    });
}

const captureOrder = (req, res) => {
    res.json({
        ok: true,
        msg: 'Capturando orden'
    })
}

const cancelOrder = (req, res) => {
    res.json({
        ok: true,
        msg: 'Cancelando orden'
    })
}

module.exports = {
    createOrder,
    captureOrder,
    cancelOrder
}