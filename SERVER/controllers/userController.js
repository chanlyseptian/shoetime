// const bcrypt = require('bcrypt')
const { decryptPassword } = require('../helper/bcrypt')
const {users} = require('../models')
const {tokenGenerator,tokenVerifier} = require('../helper/jsonwebtoken')


class userController {
    static async getUser(req,res){
        try{
            const user = await users.findAll({
            
            })
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async create(req,res){
        try{
            const {user_name,user_email,user_password,user_salt,user_birthdate,user_gender,user_avatar,user_type} = req.body

            // const hashPwd = bcrypt.hashSync(user_password,5)
            
            let result = await users.create({
                user_name,user_email,user_password,user_salt,user_birthdate,user_gender,user_avatar,user_type
            })
            res.status(201).json(result);
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async login(req, res) {
        try {
          const {user_email, user_password} = req.body;
         
          let foundEmail = await users.findOne({
            where: { user_email }
          });
          if(foundEmail){
              if(decryptPassword(user_password,foundEmail.user_password)){
                  let access_token = tokenGenerator(foundEmail)
                  res.status(200).json({access_token})

                  let verifyToken = tokenVerifier(access_token)
                  console.log(verifyToken)
              }
              else{
                  res.status(404).json({
                      message:"password not found"
                  })
              }
          }
          else{
            res.status(404).json(err)
          }
          
        } catch (err) {
          res.status(404).json({
              message : "email not found"
          });
        }
      }
      static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await users.destroy({
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
            const {user_name,user_email,user_password,user_salt,user_birthdate,user_gender,user_avatar,user_type} = req.body
            const id = req.params.id
            // const hashPwd = bcrypt.hashSync(user_password,5)
            
            let result = await users.update(
                {
                user_name,user_email,user_password,user_salt,user_birthdate,user_gender,user_avatar,user_type
                },{
                    where: { id },
                  }
                )
            res.status(201).json(result);
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    
}

module.exports = userController