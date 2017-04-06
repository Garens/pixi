var express = require('express');
var router = express.Router();
var model = require('../models/model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pixi.js' });
});

router.get('/getDeviceList',function(req,res){
  model.Device.findAll().then(function(ret){
    res.send(ret);
  }).catch(function(err){
    console.log('error:' + err);
  })
})



module.exports = router;
