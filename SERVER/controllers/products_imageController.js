const {products_image} = require('../models')

class products_imageController{
    static async getProductsImage(req,res){
        try{
            let result = await products_image.findAll({

            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const  {prim_filename,prim_filesize,prim_filetype,prim_primary,prim_prod_id} = req.body
            let result = await products_image.create({
                prim_filename,prim_filesize,prim_filetype,prim_primary,prim_prod_id
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
            let result = await products_image.destroy({
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
            const  {prim_filename,prim_filesize,prim_filetype,prim_primary,prim_prod_id} = req.body
            const id = req.params.id
            let result = await products_image.update({
                prim_filename,prim_filesize,prim_filetype,prim_primary,prim_prod_id
            },{where:{id}})
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}

module.exports = products_imageController