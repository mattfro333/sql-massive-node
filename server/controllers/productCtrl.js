var db = require('./../massive');

console.log(Object.keys(db));

db.init.createProductsTable([], function(err, results){
  if (err){
    console.error(err);
  } else {
    console.log("Initialized Products Table");
  }
})
 module.exports = {
   create:function(req, res, next){
     db.Products.create_product([
       req.body.Name,
       req.body.Description,
       req.body.Price,
       req.body.imageUrl
     ], function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }else{
         res.send(results)
       }
     })
   },
   getProducts:function(req, res){
     db.Products.read_products([], function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }
       return res.send(results);
     })
   },
   getProduct:function(req, res){
     db.Products.read_product([req.params.ProductId],
     function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }
       if (results.length === 0){
         return res.status(404).send("No Product Found")
       }
       return res.send(results[0]);
     })
   },
   update:function(req, res){
     db.hero.update_product([
       req.params.ProductId,
       req.body.Name,
       req.body.Description,
       req.body.Price,
       req.body.imageUrl
     ],
     function(err, results){
       if(err){
         console.error(err);
         return res.send(err);
       }
       return res.send(results[0]);
     })
   },
   delete:function(req, res){
     db.Products.delete_product([req.params.ProductId], function(err, results){
       if (err){
         console.error(err);
         return res.send(err);
       }
       if (results.length === 0){
         return res.status(404).send("Product Not Found");
       }
       res.send('Product ' + results[0].name + ' is gone.');
     })
   }
 }
