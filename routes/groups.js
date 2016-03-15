var express = require('express');
var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET users listing. */
router.get('/',function(req, res) {
  User.find({}, function(err, users) {
	  if (err) throw err;

	  console.log(users);
	  res.json(users);
	});
  
});

/* GET users listing. */
router.get('/:id',function(req, res) {
  User.find({_id:req.params.id}, function(err, users) {
	  if (err) throw err;

	  // object of all the users
	  console.log(users);
	  res.json(users);
	});
});


router.post('/',function(req, res) {

  var user = new User();      
        user.email = req.body.email;
        user.groups = req.body.groups.split('|');

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Usuario agregado' });
        });
});

module.exports = router;
