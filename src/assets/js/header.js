function loadJQuery() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}

$('nav').click(function(){
    $('.menu').css('background-color','#ff5e1a');
    $('.dropDown').slideDown("slow");    
});

$('nav').mouseleave(function(){
    $('.menu').css('background-color','#ff782e');
    $('.dropDown').slideUp("slow", function(){
        $(this).fadeOut(2000);
    });
});