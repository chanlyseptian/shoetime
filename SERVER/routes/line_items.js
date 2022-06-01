const {Router} = require('express')
const line_itemsRoute = Router()
const {line_itemsController} = require('../controllers')

line_itemsRoute.get('/',line_itemsController.getLine_items)
line_itemsRoute.post('/create',line_itemsController.create)
line_itemsRoute.get('/delete/:id',line_itemsController.delete)
line_itemsRoute.post('/update/:id',line_itemsController.update)

module.exports = line_itemsRoute