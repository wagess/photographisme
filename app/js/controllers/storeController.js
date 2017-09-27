app.controller('storeController', function($scope, $rootScope) {
  //
  window.scrollTo(0, 0);
  // 
  var items = [
    {
      'label' : 'Taormina, Sicile',
      'sublabel' : 'Murales sur mesure',
      'link' : '#',
      'linkTitle' : 'Commander',
      'image' : './app/img/shop/salon-murale.jpg'
    },{
      'label' : 'Festival de tango de Montréal',
      'sublabel' : 'Cadres en bois',
      'link' : '#',
      'linkTitle' : 'Acheter sur Shopify',
      'image' : './app/img/shop/cadre-bois.png'
    },{
      'label' : 'Festival de tango de Montréal',
      'sublabel' : 'Cadres sur mesure',
      'link' : '#',
      'linkTitle' : 'Commander',
      'image' : './app/img/shop/salon-vertical.jpg'
    },{
      'label' : 'Avenue du 9 juillet, Buenos Aires',
      'sublabel' : '24x36 Impression sous acrylique',
      'link' : '#',
      'linkTitle' : 'Acheter sur Shopify',
      'image' : './app/img/Shopify.png'
    }
  ]
  //
  $scope.products = items;
  $scope.titreHeader = "Ma boutique";
  $scope.subheaderTexte = "Explorez la gallerie et achetez via Shopify."
  $scope.labelbtn = "default";


  // $rootScope.defaultImage = 'http://www.burninglive.com/wp-content/uploads/2015/09/desert-ultralight.jpg';
  $rootScope.defaultImage = 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81450009.jpg';
  $('.parallax-slider').attr('src', $rootScope.defaultImage);

});