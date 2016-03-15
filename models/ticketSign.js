
var Schema = require('mongoose').Schema
 
module.export = new Schema({
	idUser: long,
    email:String,
    name:String,
    lastName: String,
    creationTime: long
});
