$( document ).ready(function(){

    $( ".dan" ).on( "click", function() {
        alert( "Hey you clicked me!" );
    });

    $( ".iwao" ).on( "click", function() {
        $(".iwao").hide();
    });

});