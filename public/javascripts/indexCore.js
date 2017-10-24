


var $ = jQuery.noConflict();

window.onload = function(){
    
    // intro animations for logo and subtitle. using semantic ui transitions. 
    jQuery('img')
    .transition({
    animation : 'scale',
    duration  : 500,
    onComplete: function(){
        jQuery('#mainDashboard').transition({
            animation : 'fade up',
            duration  : 1000,
            onComplete:function(){
                jQuery('#mainDashboard card').transition({
                    animation : 'fade up',
                    duration  : 1000
                });
            }
        });
    }
    
    });
    
    // don't place anythine below this line
    //end of document
}

jQuery('.menu .item')
.tab()
;

//end of document