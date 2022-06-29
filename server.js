const express = require('express')
const app = new express()
const PORT = process.env.PORT | 3000

const ecommerceRouter = require('./routers/ecommerceRouter')
app.use(express.json()) // for parsing application/json
app.use('/ecommerce', ecommerceRouter)

app.listen(PORT, () => {
    console.log(`Up and listening on port: ${PORT}`)
})
