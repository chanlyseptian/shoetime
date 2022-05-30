const {line_items }= require('../models')

class line_itemsController {
    static async getLine_items(req,res){
    try{
        let result = await line_items.findAll({

        })
        res.status(200).json(result)
    }
    
    catch(err){
        res.status(404).json(err)
    }

    }
    static async create(req,res){
        try{
            const {lite_qty,lite_status,lite_prod_id,lite_shop_id,lite_shop_name} = req.body
            let result = await line_items.create({
                lite_qty,lite_status,lite_prod_id,lite_shop_id,lite_shop_name
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
            let result = await line_items.destroy({
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
            const {lite_qty,lite_status,lite_prod_id,lite_shop_id,lite_shop_name} = req.body
            const id = req.params.id
            let result = await line_items.update({
                lite_qty,lite_status,lite_prod_id,lite_shop_id,lite_shop_name
            },{where:{id}})
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}

module.exports =  line_itemsController