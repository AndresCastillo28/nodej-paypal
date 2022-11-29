const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const { PORT } = require('./config')


const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API running'
    })
})

app.use('/api/payments', require('./routes/payments.routes'));


app.listen(PORT, () => {
    console.log(`Sever on port ${PORT}`)
})
