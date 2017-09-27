app.directive('bgImage', function () {
  return {
    link: function(scope, element, attr) {
      attr.$observe('bgImage', function() {           
        if (!attr.bgImage) {
          // No attribute specified, so use default
          element.css("background-image","url("+scope.defaultImage+")");
        } else {
          var image = new Image();  
          image.src = attr.bgImage;
          element.removeClass('portrait');
          element.removeClass('paysage');
          image.onload = function() { 
            //Image loaded- set the background image to it
            if(image.width < image.height){
              var format = "portrait";
            }else{
              var format = "paysage";
            }
            // element.css("background-image","url("+attr.bgImage+")");
            element.css({
              'background-image': 'url(' + attr.bgImage +')',
              'background-size' : 'cover',
              'width' : '100%',
              'height' : '400px',
              'background-position' : 'center center'
            });
            element.addClass('showimage');
            element.addClass(format);
          };
          image.onerror = function() {
            //Image failed to load- use default
            // alert("error load");
            element.css("background-image","url("+scope.defaultImage+")");
          };
        }
      });
    }
  };
});