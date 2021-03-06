var express = require('express');
var router = express.Router();

var PiServo = require('pi-servo');
var servo1 = new PiServo(4);

// To be called via AJAX
router.post('/takephoto', function(req, res, next) {
  // Take the photo (move the servo)
  servo1.open()
  .then(function(){
    var servoPos = 0;

    // 0 - 180
    var interval1 = setInterval(function(){
      if( servoPos < 180 ) {
        servo1.setDegree(servoPos);
        servoPos++;
      } else {
        clearInterval(interval1);

        // 180 - 0
        var interval2 = setInterval(function(){
          if( servoPos > 0 ) {
            servo1.setDegree(servoPos);
            servoPos--;
          } else {
            clearInterval(interval2);
          }
        }, 25);

      }
    }, 100);

    return
  })
  .catch(function(err){
    console.log(err);
  })

  res.json({success: true});  // return JSON indicating success = true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Raspi Express Sunrise Catcher!' });
});

module.exports = router;
