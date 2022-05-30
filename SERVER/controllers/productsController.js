const {products,orders,line_items} = require('../models')

class productsController {
    static async getProducts(req,res){
        try{
            let result = await products.findAll({
                
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const{prod_name,prod_desc,prod_price,prod_sotck,prod_expire,prod_weight,prod_category,prod_brand,prod_condition,prod_total_sold,prod_rating,prod_view} = req.body

            const prod_user_id = req.userData.id
            let result = await products.create({
                prod_name,prod_desc,prod_price,prod_sotck,prod_expire,prod_weight,prod_category,prod_brand,prod_condition,prod_total_sold,prod_rating,prod_view,prod_user_id
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
            let result = await products.destroy({
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
            const{prod_name,prod_desc,prod_price,prod_sotck,prod_expire,prod_weight,prod_category,prod_brand,prod_condition,prod_total_sold,prod_rating,prod_view} = req.body

            const prod_user_id = req.userData.id
            let result = await products.create({
                prod_name,prod_desc,prod_price,prod_sotck,prod_expire,prod_weight,prod_category,prod_brand,prod_condition,prod_total_sold,prod_rating,prod_view,prod_user_id
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}
module.exports = productsController