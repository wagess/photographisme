app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.html",
    controller : "MainController"
  })
  .when("/phototheque", {
    templateUrl : "phototheque.html",
    controller : "photothequeController"
  })
  .when("/dixit", {
    templateUrl : "dixit.html",
    controller : "dixitController"
  })
  // .when("/blog", {
  //   templateUrl : "blog.html",
  //   controller : "blogController",
  //   // css: ['blog/AnimatedHeader/css/default.css','blog/css/styles.css']
  // })
  .when("/contact", {
    templateUrl : "contact.html",
    controller : "contactController"
  })
  .when("/store", {
    templateUrl : "store.html",
    controller : "storeController"
  })
  .when("/showroom", {
    templateUrl : "showroom.html",
    controller : "showroomController"
  })
  .when("/apropos", {
    templateUrl : "apropos.html",
    controller : "aboutController"
  })
});