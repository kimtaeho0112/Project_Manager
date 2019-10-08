jQuery(document).ready(function($){
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
    $(this).next().toggle("fast").siblings(".content").hide("fast");
      });
  });