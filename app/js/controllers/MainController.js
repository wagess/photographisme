app.controller('MainController', function($scope, $rootScope, $http, $window) {

  $rootScope.defaultImage = 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81450009.jpg';
  $('.parallax-slider').attr('src', $rootScope.defaultImage);
  
  $('#sw-logo-big').removeClass('hideimage');

  $scope.myDynamicClassMenu = 'showimage';
  $scope.myDynamicClass = 'hideimage';
  // $scope.myDynamicClassLogo = 'showimage';

  $scope.submitBackMenu = function() {
    $scope.myDynamicClassMenu = 'showimage';
    $scope.myDynamicClass = 'hideimage';
    $scope.photos = [];
    $('html, body').animate({
      scrollTop: $("#blocs-home").offset().top
    }, 250);
  }

  // function recherche images categories
  $scope.submitQuery = function(category, method) {
    // 
    // console.log("submit :" + category + " " + method)
    document.getElementById('titre_album').innerHTML = "<span>"+category+"</span>";
    $scope.myDynamicClass = 'showimage';
    $scope.myDynamicClassMenu = 'hideimage';
    $('.loading').removeClass('spinner-hide');
    $('.loading').addClass('spinner-show');
    //
    $http({
      method  : 'GET',
      url     : 'http://www.stephanewagner.com/search/search-wagess.php',
      params   : { param1: category, param2: method } 
    })
    .then(function (response) {

      //
      // $scope.myDynamicClass = 'showimage';
      // $scope.myDynamicClassMenu = 'hideimage';
      // alert("fin");
      
      $('.loading').removeClass('spinner-show');
      $('.loading').addClass('spinner-hide');
      // 
      $('html, body').animate(
        { scrollTop: $("#blocs-home").offset().top - 220 }, {
            duration: 500,
            easing: 'easeInOutBack'
        }
      );
      //
      $scope.photos = [];
      result = response.data.RESULTATS;
      console.log("FIN REQUÊTE :"+result.length)
      // 
      for (var i = 0; i <= result.length; i++) {
        $scope.photos.push(
          {
            titre: result[i].TITRE,
            url: result[i].URL
            // content: result[i].CONTENT,
            // tags: result[i].TAGS
          }
        )
      };


      // console.log("FIN REQUÊTE :"+result.length)

    });
  }
  // fin submit submitQuery
  

  //
  var folios = [
    {
      'titre' : 'Textures de Cuba',
      'submit' : 'Cuba',
      'categorie' : 'Voyage',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81490002.jpg'
    },{
      'titre' : 'Scènes de vie',
      'submit' : 'Scenes de vie',
      'categorie' : 'Sélection',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81490021.jpg'
    },{
      'titre' : 'Tango',
      'submit' : 'Tango',
      'categorie' : 'Sélection',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/img_4429.jpg'
    },{
      'titre' : "Urbain",
      'submit' : 'Urbain',
      'categorie' : 'Sélection',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/81490023.jpg'
    },{
      'titre' : 'Visages',
      'submit' : 'Portraits',
      'categorie' : 'Voyage',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/img_0086.jpg'
    },{
      'titre' : "Argentique",
      'submit' : 'Argentique',
      'categorie' : 'Argentique',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/00480020.jpg'
    },{
      'titre' : "Atmosphères",
      'submit' : 'Atmosphères',
      'categorie' : 'Sélection',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/alsace-91.jpg'
    },{
      'titre' : "Coups de coeur",
      'submit' : 'Coups de coeurs',
      'categorie' : 'Sélection',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/img_0107.jpg'
    },{
      'titre' : "Burning Man",
      'submit' : 'Burning Man',
      'categorie' : 'Voyage',
      'image' : 'http://www.stephanewagner.com/phototheque/wp-content/uploads/2017/03/000055640017.jpg'
    }
  ]

  $scope.portfolios = folios;

  //
  var items = [
    {
      'label' : 'Shop',
      'status' : 'active',
      'sublabel' : 'Explorez la gallerie sur Shopify',
      'link' : '#store',
      'linkTitle' : 'Acheter',
      'image' : './app/img/Shopify.png',
      selected: false
    },{
      'label' : 'Burninglive',
      'status' : 'active',
      'sublabel' : 'Psychétrip déserique au Burning Man Festival',
      'link' : 'http://www.burninglive.com',
      'linkTitle' : 'Explorer',
      'image' : './app/img/Shopify.png',
      selected: true
    },{
      'label' : 'Showroom',
      'status' : 'inactive',
      'sublabel' : 'Expositions et projets',
      'link' : '#showroom',
      'linkTitle' : 'Visiter',
      'image' : './app/img/Showroom.png',
      selected: false
    },{
      'label' : 'Dixit',
      'status' : 'inactive',
      'sublabel' : 'Une image et vos mots',
      'link' : '#',
      'linkTitle' : 'Écrire',
      'image' : './app/img/dixit.png',
      selected: false
    },{
      'label' : 'Photothèque',
      'status' : 'active',
      'sublabel' : 'Parcourir ma collection complète',
      'link' : '#phototheque',
      'linkTitle' : 'Chercher',
      'image' : './app/img/Phototheque.png',
      selected: false
    },{
      'label' : 'Montréal Danse Project',
      'status' : 'inactive',
      'sublabel' : 'Portraits de gens passionnés du tango',
      'link' : 'http://www.montrelatangoproject.com',
      'linkTitle' : 'Voir',
      'image' : './app/img/Shopify.png',
      selected: true
    }
  ]

  $scope.products = items;
  //
  $scope.titreHeader = "Univers photographique personnel";
  $scope.subheaderTexte = "Découvrez mon univers photographique construit au gré de mes voyages et de mes inspirations";
  $scope.titreHeader2 = "Services & produits";
  $scope.subheaderTexte2 = "Produits artistiques, tirages d'art, murales décoratives.";
  $scope.titreHeader3 = "Projets & Expositions";
  $scope.subheaderTexte3 = "Projets de voyages, expositions et livres.";
  // 
  $scope.titreHeaderPhototheque = "Phototheque";
  $scope.subheaderTextePhototheque = "Parcourez la collection complète, faites une recherche ou explorer par le menu thématique";
  //
  $scope.sendEmail = function() {
    var link = "mailto:" +  $scope.mail + "?subject=" + escape('Bonjour !') + "&body=" + escape('...');
    window.location.href = link;
  };
  //
});


app.controller('AppCtrl', function($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500
  };
});

app.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';
});