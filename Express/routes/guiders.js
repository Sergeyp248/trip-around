function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var express = require('express');
var faker = require('faker');

var router = express.Router();

var guider1 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }
var guider2 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }
 var guider3 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }
var guider4 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }
var guider5 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }
var guider6 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }   
  var guider7 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  } 
  var guider8 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }  
  var guider9 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }   
  var guider10 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }  
  var guider11 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }  
  var guider12 = { 
  location: faker.random.word(),
  rating: getRandomInt(1,5),
  name: faker.name.firstName(),
  age: getRandomInt(18,40)
  }  

router.get('/', function(req, res) {
  res.send(
    [
        guider1,
        guider2,
        guider3,
        guider4,
        guider5,
        guider6,
        guider7,
        guider8,
        guider9,
        guider10,
        guider11,
        guider12
    ]
);
});

router.get('/1', function(req, res) {
  res.send(guider1);
});

router.get('/2', function(req, res) {
  res.send(guider2);
});

router.get('/3', function(req, res) {
  res.send(guider3);
});

router.get('/4', function(req, res) {
  res.send(guider4);
});

router.get('/5', function(req, res) {
  res.send(guider5);
});

router.get('/6', function(req, res) {
  res.send(guider6);
});

router.get('/7', function(req, res) {
  res.send(guider7);
});

router.get('/8', function(req, res) {
  res.send(guider8);
});

router.get('/9', function(req, res) {
  res.send(guider9);
});

router.get('/10', function(req, res) {
  res.send(guider10);
});

router.get('/11', function(req, res) {
  res.send(guider11);
});

router.get('/12', function(req, res) {
  res.send(guider12);
});
module.exports = router;