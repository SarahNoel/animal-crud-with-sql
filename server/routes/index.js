var express = require('express');
var router = express.Router();
var models = require('../models/index');


//get all animals
router.get('/animals', function(req, res){
  models.Animal.findAll({}).then(function(animals){
    res.json(animals);
  });
});

//add new animal
router.post('/animals', function(req, res){
  models.Animal.create({
    name: req.body.name,
    species: req.body.species,
    gender: req.body.gender,
    age: req.body.age,
    placed: req.body.placed,
    image: req.body.image,

  }).then(function(animal){
      models.Animal.findAll({})
        .then(function(animals){
        res.json(animals);
      });
  });
});

//get single animal
router.get('/animal/:id', function(req, res){
  models.Animal.find({
    where:{
      id:req.params.id
    }
  }).then(function(animal){
    res.json(animal);
  });
});

//update single animal
router.put('/animal/:id', function(req, res){
  models.Animal.find({
    where:{
      id:req.params.id
    }
  }).then(function(animal){
    if(animal){
      animal.updateAttributes({
        name: req.body.name,
        species: req.body.species,
        gender: req.body.gender,
        age: req.body.age,
        placed: req.body.placed,
        image: req.body.image,
      }).then(function(animal){
        res.send(animal);
      });
    }
  });
});

//delete one animal
router.delete('/animal/:id', function(req, res){
  models.Animal.destroy({
    where:{
      id: req.params.id
    }
  }).then(function(){
    models.Animal.findAll({})
    .then(function(animals){
      res.json(animals);
    });
  });
});












module.exports = router;
