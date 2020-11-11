const express = require('express');

const router = express.Router()

const middleWare = (req, res, next) => {
    console.log('\n\n------ begin: req ------')
    console.log(req)
    console.log('------ end: req ------\n\n')
    let {name, password} = req.body
    if(!name || !password){
        res.json({
            message: '缺少参数'
        })
    } else {
        req.fromData = {
            name,
            password
        }
        next()
    }
}

router.post('/login', [middleWare], (req,res) => {
    let { fromData } = req
    res.json({
        message: '123',
        fromData
    })
})

router.post('/getid', (req, res)=>{
    let {id} = req.query;
    res.json({
        id
    })
})

router.get('/list', (req, res) => {
    res.json({
        list: [{
            id: 1,
            name: '鞋子',
            price: 1000
        }]
    })
})

module.exports = router