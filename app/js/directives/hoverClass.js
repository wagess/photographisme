//
app.directive('hoverClass', function () {
  return {
    restrict: 'A',
    scope: {
      hoverClass: '@'
    },
    link: function (scope, element) {
      element.on('mouseenter', function() {
        console.log("mouseover")
        element.addClass(scope.hoverClass);
              // $scope.$('.sw-imageContent').addClass('show-imageContent');
            });
      element.on('mouseleave', function() {
        element.removeClass(scope.hoverClass);
          // $scope.$('.sw-imageContent').removeClass('show-imageContent');
        });
      }
  };
})