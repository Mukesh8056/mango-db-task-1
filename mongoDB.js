Find all the information about each products
Find the product price which are between 400 to 800
Find the product price which are not between 400 to 600
List the four product which are grater than 500 in price 
Find the product name and product material of each products
Find the product with a row id of 10
Find only the product name and product material
Find all products which contain the value of soft in product material 
Find products which contain product color indigo  and product price 492.00
Delete the products which product price value are same


commands:

Find all the information about each products:

*db.task.find()

Find the product price which are between 400 to 800:

*db.task.find({product_price:{$gte:400,$lt:800}})

Find the product price which are not between 400 to 600:

*db.task.find({product_price:{$ne:{$gte:400},$ne:{$lt:600}}})

List the four product which are grater than 500 in price :

*db.task.find({product_price:{$gt:500}}).limit(4)

Find the product with a row id of 10:

*db.task.find({id:'10'})

Find products which contain product color indigo  and product price 492.00:

*db.task.find({product_color:'indigo', product_price:492.00})

Find all products which contain the value of soft in product material:

*db.task.find({product_material: 'Soft'})

Find the product name and product material of each products

*db.task.find().sort({product_name:1,product_material:1}) 

Find only the product name and product material:

*db.task.find({},{product_name:1,product_material:1,_id:0})

Delete the products which product price value are same:

*db.task.find({}).forEach((e)=>{db.task.deleteMany({_id:{$gt:e._id},product_price:e.product_price})})