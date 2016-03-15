var express = require('express');
var express = require('express');
var router = express.Router();
var Ticket = require('../models/ticket');


/* GET users listing. */
router.get('/',function(req, res) {
  Ticket.find({}, function(err, tickets) {
	  if (err) throw err;

	  console.log(tickets);
	  res.json(tickets);
	});
  
});

/* GET users listing. */
router.get('/:id',function(req, res) {
  Ticket.find({_id:req.params.id}, function(err, tickets) {
	  if (err) throw err;

	  console.log(tickets);
	  res.json(tickets);
	});
});

router.post('/',function(req, res) {
  var ticket = new Ticket();      
  ticket.idUser = req.body.idu;
  ticket.title = req.body.title;
  ticket.description = req.body.description;
  ticket.creationTime = new Date();
  ticket.dueTime = req.body.dueTime;


  ticket.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Ticket creado' });
  });
});

module.exports = router;
