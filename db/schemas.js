var User = mongoose.model( 'User', mongoose.Schema({
    idUser: long,
    email:String,
    name:String,
    lastName: String,
    creationTime: long
}));


var Group = mongoose.model( 'Group', mongoose.Schema({
    idGroup: long,
    description:String
}));

var Ticket = mongoose.model('Ticket' , mongoose.Schema({
	idTicket: long,
	idTicketType: long,
	idGroupCreator: long,
	idGroupAprover: long,
	idUser: long,
	title: String,
	description: String,
	creationTime: long,
	dueTime: long,
	idTicketNext: long
}));