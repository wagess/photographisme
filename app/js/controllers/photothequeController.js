app.controller('photothequeController', function($scope, $rootScope, $http, $timeout) {

  $scope.myDynamicClass = 'showimage';
  $rootScope.showDetails = false;
  $scope.ficheTitre = 'test';
  
  $rootScope.defaultImage = 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81450009.jpg';
  $('.parallax-slider').attr('src', $rootScope.defaultImage);
  //
  $scope.voirFiche = function(photo){
    $rootScope.showDetails = true;
    $scope.ficheTitre = photo.titre;
    $scope.ficheURL = photo.url;
    $scope.ficheContent = photo.content;
    $scope.ficheTags = photo.tags;
    $scope.defaultImage = photo.url;
  }

  $scope.closeFiche = function(){
    $rootScope.showDetails = false;
  }
  //
  $scope.deleteResult = function() {
    $('.loading').addClass('spinner-hide');
    $('.loading').removeClass('spinner-show');
  }
  // 
  $scope.submitQuery = function(category, method) {
    // 
    console.log(category);
    //
    // var hauteurMenu = angular.element('#menuGauche').height();
    // angular.element('#grillePhotos').css('min-height', hauteurMenu );


    $scope.category = category;
    $scope.myDynamicClass = 'hideimage';
    $('.loading').removeClass('spinner-hide');
    $('.loading').addClass('spinner-show');

    // 
    if(method == 'tag'){
      param2 = method;
    }else if(method == 'cat'){
      param2 = method;
    }else if(! method){
      param2 = 'search';
    }

    alert(category + "" + method)

    $http({
      method  : 'GET',
      url     : 'http://www.stephanewagner.com/search/search-wagess.php',
      params   : { param1: category, param2: param2 } 
    })
    .then(function (response) {
      $scope.myDynamicClass = 'showimage';
      $('.loading').removeClass('spinner-show');
      $('.loading').addClass('spinner-hide');
      $scope.photos = [];
      result = response.data.RESULTATS;
      for (var i = 0; i <= result.length; i++) {
        $scope.photos.push(
          {
            titre: result[i].TITRE,
            url: result[i].URL,
            content: result[i].CONTENT,
            tags: result[i].TAGS
          }
        )
      };
    });
  }
  // 

  $scope.submitQuery('urbain');
  
});