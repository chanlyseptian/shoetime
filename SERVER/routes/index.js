const express = require('express')
const route = express.Router()


route.get("/",(req,res)=>{
    res.status(200).json({
        message : "dashboard api"
    })
})

const userRoute = require('./user')
const productsRoute = require('./products')
const products_imageRoute = require('./product_image')
const shopping_cartRoute = require('./shopping_cart')
const line_itemsRoute = require('./line_items')
const ordersRoute = require('./orders')



route.use('/user',userRoute)
route.use('/products',productsRoute)
route.use('/products_image',products_imageRoute)
route.use('/shopping_cart',shopping_cartRoute)
route.use('/line_items',line_itemsRoute)
route.use('/orders',ordersRoute)


module.exports = route