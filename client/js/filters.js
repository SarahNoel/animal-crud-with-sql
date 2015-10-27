app.filter('placeStatus', function(){
  return function(input){
    if(input){
      return "Has a forever home!";
    }
    else{
      return "Still needs a home.";
    }
  };
});
