const {shopping_cart} = require('../models')

class shopping_cartController{
    static async getShopping_cart(req,res){
        try{
        let result = await shopping_cart.findAll({

        })
        res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const{shop_created_on,shop_status} = req.body
            const shop_user_id = req.userData.id
            
            let result = await shopping_cart.create({
                shop_created_on,shop_status,shop_user_id
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
            let result = await shopping_cart.destroy({
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
            const{shop_created_on,shop_status} = req.body
            const shop_user_id = req.userData.id
            
            let result = await shopping_cart.update({
                shop_created_on,shop_status,shop_user_id
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}

module.exports = shopping_cartController