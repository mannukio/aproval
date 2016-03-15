var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:String,
    name:String,
    lastName: String,
    creationTime: Date,
    groups: [String]
});

var User = mongoose.model('User', userSchema);

module.exports = User;