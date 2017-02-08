var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080

var productCtrl = require('./controllers/productCtrl')
app.use(bodyParser.json());

app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:ProductId', productCtrl.getProduct);
app.post('/api/products', productCtrl.create);
app.put('/api/products/:ProductId', productCtrl.update);
app.delete('/api/products/:ProductId', productCtrl.delete)

app.listen(port, function(){
  console.log('Running on port 8080')
})
