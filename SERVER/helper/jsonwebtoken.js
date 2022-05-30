const jwt = require('jsonwebtoken')
const secret_code= process.env.SECRET_CODE || 'bebas'


const tokenGenerator = (data)=>{
    const{id,user_email,user_salt,user_birthdate,user_gender,user_avatar,user_ty,user_name} = data
    return(jwt.sign({
        id,user_email,user_salt,user_birthdate,user_gender,user_avatar,user_ty,user_name
    },secret_code))
}
const tokenVerifier=(data)=>{
    return jwt.verify(data,secret_code)
}
module.exports = {tokenGenerator,tokenVerifier}