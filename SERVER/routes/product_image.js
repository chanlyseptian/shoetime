const {Router} = require('express')
const product_imageRoute  = Router()
const {products_imageController} = require('../controllers')

product_imageRoute.get('/',products_imageController.getProductsImage)
product_imageRoute.post('/create',products_imageController.create)
product_imageRoute.get('/delete/:id',products_imageController.delete)
product_imageRoute.post('/update/:id',products_imageController.update)

module.exports = product_imageRoute