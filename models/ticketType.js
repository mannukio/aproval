var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketTypeSchema = new Schema({
    title:String,
    description:String,
    createGroup: String,
    verifyGroup: Date
});

var TicketType = mongoose.model('TicketType', ticketTypeSchema);

module.exports = TicketType;