const express = require('express')

const router = express.Router()

router.get('/list', (req, res) => {
    res.json({
        list: [{
            id: 0,
            name: '小灰灰'
        }]
    })
})

module.exports = router