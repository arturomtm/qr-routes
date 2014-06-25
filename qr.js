var express = require('express'),
    path = require('path'),
    qrcode = require('../qrcode-npm/qrcode').qrcode;

var router = express.Router();

router.use(express.static(path.join(__dirname, 'public')));

router.get('/:id', function(req, res){
  var qr = qrcode(4, "M");
  qr.addData(req.params.id);
  qr.make();
  res.send(200, qr.createImg(4));
});

router.post('/:id', function(req, res){
  console.log('POST', req.params);
  res.send(200);
});

router.put('/:id', function(req, res){
  console.log('PUT', req.params);
  res.send(200);
});

module.exports = router;
