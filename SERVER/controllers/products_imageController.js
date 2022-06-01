const {productsImage} = require('../models')

class products_imageController{
    static async getProductsImage(req,res){
        try{
            let result = await productImage.findAll({

            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const  {primFilename,primFilesize,primFiletype,primPrimary,productId} = req.body
            console.log(req.body)
            let result = await productsImage.create({
                primFilename,primFilesize,primFiletype,primPrimary,productId
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
            let result = await productsImage.destroy({
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
            const  {} = req.body
            const id = req.params.id
            let result = await productsImage.update({
                primFilename,primFilesize,primFiletype,primPrimary,prodId
            },{where:{id}})
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}

module.exports = products_imageController