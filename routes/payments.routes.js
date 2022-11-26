const express = require('express');
const router = express.Router();

const { createOrder, captureOrder, cancelOrder } = require('../controllers/payments')

router.get('/create', createOrder)

router.get('/capture', captureOrder)

router.get('/cancel', cancelOrder)

module.exports = router;