app.controller('showroomController', function($scope){

  // $('.cbp-af-header').addClass('sw-hide');
  
  // $('#sw-logo-top').addClass('sw-hide');
  window.scrollTo(0, 0);
  //
  $scope.titreHeader = "Showroom-moi";
  $scope.subheaderTexte = "tableaux ..."
  //
  // $('#sw-teaser-galerie').addClass('sw-hide');

  // $rootScope.showDetails = true;
  
  $('.parallax-window').addClass('parallax-window-phototheque');

  $scope.myDynamicClassLogo = 'hideimage';

});