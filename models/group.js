var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
groupSchema = new Schema({
    description:String
});

var Group = mongoose.model('Group', groupSchema);

module.exports = Group;