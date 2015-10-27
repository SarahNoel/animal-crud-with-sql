var app = angular.module('animalShelter', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $scope.formData = {};

  $http.get('/animals')
    .success(function(data){
      $scope.animalData = data;
    })
    .error(function(err){
      console.log(err);
    });

  $scope.cancel = function(){
    $scope.formData = {};
    $scope.adding = $scope.editing = false;
  };

  $scope.addAnimal = function(){
    $http.post('/animals', $scope.formData)
    .success(function(data){
      $scope.formData = {};
      $scope.animalData = data;
      $scope.adding = false;
    })
    .error(function(error){
      console.log(error);
    });
  };

  $scope.getAnimal = function(id){
    $http.get('/animal/' + id)
    .success(function(data){
      $scope.formData = data;
      $scope.adding = true;
      $scope.editing = true;
    })
    .error(function(error){
      console.log(error);
    });
  };

   $scope.removeAnimal = function(id){
    $http.delete('/animal/' + id)
    .success(function(data){
      $scope.animalData = data;
      $scope.formData = {};
      $scope.adding = false;
    })
    .error(function(error){
      console.log(error);
    });
  };




}]);
