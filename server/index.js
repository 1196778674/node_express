const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello server')
})
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});

const sku = require('./router/sku');
const member = require('./router/member');
app.use('/sku', sku)
app.use('/member', member)


app.listen(port, () => console.log(`Example app listening on port port!`))