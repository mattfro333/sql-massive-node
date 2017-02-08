var massive = require('massive');
var connectionString = 'postgres://postgres:Milkyway6933@localhost/Products'
var massiveInstance = massive.connectSync({connectionString : connectionString})
module.exports = massiveInstance;
