const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('/ecommerce(get) called...')
    res.send('ecommerce from ecommerce.js')
})

router.post('/', (req, res) => {
    console.log('/ecommerce(post) called...')
    console.log(`req.body: ${req.body}`)
    res.redirect('/')
})

router.put('/', (req, res) => {
    console.log('/ecommerce(put) called...')
})

router.delete('/', (req, res) => {
    console.log('/ecommerce(delete) called...')
})

module.exports = router
