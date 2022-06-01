npx sequelize-cli model:generate --name user --attributes userName:string,userEmail:string,userPassword:string,userSalt:string,userBirthdate:date,userGender:string,userAvatar:string,userType:string

npx sequelize-cli model:generate --name order --attributes orderCreated_on:date,orderSubtotal:integer,orderDiscount:integer,orderTax:integer,orderTotalDue:integer,orderTotalQty:integer,orderPaytTrxNumber:integer,orderCity:string,orderAddress:string,orderStatus:string,userId:integer


npx sequelize-cli model:generate --name shoppingCart --attributes shopCreatedOn:date,shopStatus:string,UserId:integer

npx sequelize-cli model:generate --name lineItem --attributes lineQty:integer,lineStatus:string,productId:integer,shoppingCartId:integer,orderId:integer


npx sequelize-cli model:generate --name productsImage --attributes primFilename:string,primFilesize:string,primFiletype:string,primPrimary:boolean,productId:integer

<!-- npx sequelize-cli model:generate --name products_images --attributes prim_filename:string,prim_filesize:string,prim_filetype:string,prim_primary:boolean,prim_prod_id:integer -->

npx sequelize-cli model:generate --name product --attributes prodName:string,prodDesc:string,prodPrice:integer,prodStock:integer,prodExpire:date,prodWeight:integer,prodCategory:string,prodBrand:string,prodCondition:string,prodTotalSold:integer,prodRating:integer,prodViews:integer,userId:integer

--line items
      lineItem.belongsTo(models.order)
      lineItem.belongsTo(models.product)
      lineItem.belongsTo(models.shoppingCart)
    
-- orders
    order.belongsTo(models.user)
      order.belongsToMany(models.product, { through: models.lineItem })

--product_image
    productsImage.belongsTo(models.product)

--products
      product.hasMany(models.productsImage)
      product.belongsTo(models.user)
      product.belongsToMany(models.order, { through: models.lineItem })

--user
        user.hasMany(models.order)
      user.hasMany(models.product)
      user.hasMany(models.shoppingCart)

--shoppingCart
        shoppingCart.belongsTo(models.user)
      shoppingCart.belongsToMany(models.order, { through: models.lineItem })

      hooks:{
      beforeCreate:function(user,option){
        user.userPassword = encryptPassword(user.userPassword) 
      }
    },