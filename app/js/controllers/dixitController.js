app.controller('dixitController', function($scope, $rootScope){
  window.scrollTo(0, 0);

  $scope.titreHeader = "Dixit";
  $scope.subheaderTexte = "Papeterie"

  $rootScope.defaultImage = 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81450009.jpg';
  // $rootScope.defaultImage = 'http://www.burninglive.com/wp-content/uploads/2015/09/desert-ultralight.jpg';
  $('.parallax-slider').attr('src', $rootScope.defaultImage);

});