


var $ = jQuery.noConflict();

window.onload = function(){
    
    // intro animations for logo and subtitle. using semantic ui transitions. 
    jQuery('img')
    .transition({
    animation : 'scale',
    duration  : 500,
    
    });
    
    // don't place anythine below this line
    //end of document
}

jQuery('.menu .item')
.tab()
;

//end of document