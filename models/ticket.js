var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
	idTicketType: String,
	idUser: String,
	title: String,
	description: String,
	creationTime: Date,
	dueTime: Date,
});

var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;