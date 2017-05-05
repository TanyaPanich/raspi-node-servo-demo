var express = require('express');
var router = express.Router();

var PiServo = require('pi-servo');
var servo1 = new PiServo(4);

// To be called via AJAX
router.post('/takephoto', function(req, res, next) {
  // Take the photo (move the servo)
  servo1.open()
  .then(function(){
    // servo1.setDegree(100); // 0 - 180
  })

  res.json({success: true});  // return JSON indicating success = true


});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Raspi Express Sunrise Catcher!' });
});

module.exports = router;
