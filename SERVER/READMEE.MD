npx sequelize-cli model:generate --name users --attributes user_name:string,user_email:string,user_password:string,user_salt:string,user_birthdate:date,user_gender:string,user_avatar:string,user_type:string

npx sequelize-cli model:generate --name orders --attributes order_created_on:date,order_subtotal:integer,order_discount:integer,order_tax:integer,order_total_due:integer,order_total_qty:integer,order_payt_trx_number:integer,order_city:string,order_address:string,order_status:string,order_user_id:integer


npx sequelize-cli model:generate --name shopping_cart --attributes shop_created_on:date,shop_status:string,shop_user_id:string

npx sequelize-cli model:generate --name line_items --attributes line_qty:integer,line_status:string,line_prod_id:integer,line_shop_id:integer,line_order_name:integer


npx sequelize-cli model:generate --name products_images --attributes prim_filename:string,prim_filesize:string,prim_filetype:string,prim_primary:boolean,prim_prod_id:integer

<!-- npx sequelize-cli model:generate --name products_images --attributes prim_filename:string,prim_filesize:string,prim_filetype:string,prim_primary:boolean,prim_prod_id:integer -->

npx sequelize-cli model:generate --name products --attributes prod_name:string,prod_desc:string,prod_price:integer,prod_stock:integer,prod_expire:date,prod_weight:integer,prod_category:string,prod_brand:string,prod_condition:string,prod_total_sold:integer,prod_rating:integer,prod_views:integer,prod_user_id:integer

--line items
      ine_items.belongsTo(models.orders)
      line_items.belongsTo(models.products)
      line_items.belongsTo(models.line_items)
    
-- orders
    orders.belongsToMany(models.products, { through: models.line_items })
    orders.belongsTo(models.users)

--product_image
    products_images.hasOne(models.products)

--products
      products.belongsToMany(models.orders, { through: models.line_items })
      products.belongsTo(models.users)
      products.hasOne(models.products_images)