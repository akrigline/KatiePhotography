
( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.skrollrSlide');
	$body = $('body');
	
    //FadeIn all sections   
    $body.imagesLoaded( function() {
    	setTimeout(function() {
    		
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
		      $body.removeClass('loading').addClass('loaded');
		      
		  }, 800);
    });
    
    function adjustWindow(){
    	
		// Init Skrollr
		var s = skrollr.init({
			forceHeight: false
		});
		
		// Get window size
		//winH = $window.height();
		
	    // Keep minimum height 550
	    //if(winH <= 550) {
	    //	winH = 550;
	    //} 
	    
	    // Resize our slides
	    //$slide.height(winH - 70);
	    
	    // Refresh Skrollr after resizing our sections
	    //s.refresh($('.skrollrSlide'));
	    
	}

} )( jQuery );


jQuery(document).ready(function ($) {

    var options = {
        $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        
        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 800,                                //Specifies default duration (swipe) for slide in milliseconds

        $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2                               //[Required] 0 Never, 1 Mouse Over, 2 Always
        },

        $ThumbnailNavigatorOptions: {                       //[Optional] Options to specify and enable thumbnail navigator or not
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $SpacingX: 8,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $DisplayPieces: 10,                             //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 360                          //[Optional] The offset position to park thumbnail
        }
    };

    var jssor_slider1 = new $JssorSlider$("gallery", options);
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth)
            jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 800), 300));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});