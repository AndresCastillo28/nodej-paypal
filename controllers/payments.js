const createOrder = (req, res) => {
    res.json({
        ok: true,
        msg: 'Creando orden'
    })
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