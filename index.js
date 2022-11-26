const express = require('express');
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API running'
    })
})

app.use('/api/payments', require('./routes/payments.routes'));


const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Sever on port ${PORT}`)
})
