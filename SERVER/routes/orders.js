const {Router} = require('express')
const ordersRoute = Router()
const {ordersController} = require('../controllers')
const {authentication} = require('../middlewares/auth')

ordersRoute.get('/',ordersController.getOrders)
ordersRoute.post('/create',authentication,ordersController.create)
ordersRoute.get('/delete:id',ordersController.delete)
ordersRoute.post('/update',authentication,ordersController.update)

module.exports = ordersRoute 