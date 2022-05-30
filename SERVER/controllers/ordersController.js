const { tokenVerifier } = require('../helper/jsonwebtoken')
const {orders,line_items,products} = require('../models')

class ordersController{
    static async getOrders(req,res){
    try{
        let result = await orders.findAll({
            
        })
        res.status(200).json(result)
    }
    catch(err){
        res.status(404).json(err)
    }
    
    }
    static async create(req,res){
        try{
            const {order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_city,order_status,order_address} = req.body

            const order_user_id = +req.userData.id
            // console.log(req.body)
            // console.log(req.userData.id)

            let result = orders.create({
                order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_city,order_status,order_address,order_user_id
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await orders.destroy({
                where : 
                {id}
            })
            
            result ===1?
            res.json({
                message : `id ${id} has been deleted`
            }) :
   
             res.json({
                message : `id ${id} not deleted`
             })
        }
        catch(err){
            res.json(err)
        }
    }
    static async update(req,res){
        try{
            const {order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_city,order_status,order_address} = req.body

            const order_user_id = +req.userData.id
            // console.log(req.body)
            // console.log(req.userData.id)

            let result = orders.update({
                order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_city,order_status,order_address,order_user_id
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    
}
module.exports = ordersController