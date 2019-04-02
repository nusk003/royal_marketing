const loadjs = require('loadjs');

class loadScript {

linkScripts() {
   
  loadjs('../../assets/js/modernizr.min.js', function() {
      loadjs('../../assets/js/jquery.min.js', function() {
        loadjs('../../assets/js/popper.min.js',function(){
          loadjs('../../assets/js/bootstrap.min.js',function(){
                loadjs('../../assets/js/count.min.js',function(){
                    loadjs('../../assets/js/gmap.min.js',function(){
                        loadjs('../../assets/js/imageloader.min.js',function(){
            loadjs('../../assets/js/isotope.min.js',function(){
            loadjs('../../assets/js/nouislider.min.js',function(){
            loadjs('../../assets/js/owl.carousel.min.js',function(){
            loadjs('../../assets/js/photoswipe-ui-default.min.js',function(){
            loadjs('../../assets/js/photoswipe.min.js',function(){
            loadjs('../../assets/js/velocity.min.js',function(){
            loadjs('../../assets/js/script.js');
        });
        });
        });
        });
        });
        });
        });
        });
        });
        });
        });
      });
    });

      
/*
      loadjs('../assets/js/modernizr.min.js', 'modernizr');
      loadjs('../assets/js/jquery.min.js', 'jquery');
      loadjs('../assets/js/popper.min.js', 'popper');
      loadjs('../assets/js/bootstrap.min.js', 'bootstrap');
      loadjs('../assets/js/count.min.js', 'count');
      loadjs('../assets/js/gmap.min.js', 'gmap');
      loadjs('../assets/js/imageloader.min.js', 'imageloader');
      loadjs('../assets/js/isotope.min.js', 'isotope');
      loadjs('../assets/js/nouislider.min.js', 'nouislider');
      loadjs('../assets/js/owl.carousel.min.js', 'owl.carousel');
      loadjs('../assets/js/photoswipe-ui-default.min.js', 'photoswipe-ui-default');
      loadjs('../assets/js/photoswipe.min.js', 'photoswipe');
      loadjs('../assets/js/velocity.min.js', 'velocity');
      loadjs('../assets/js/script.js', 'script');

*/
//} 

    }


}

export default loadScript;