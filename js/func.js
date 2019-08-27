$(document).ready(function(){
    $(".inp_search").hide();
    $(".cross_search").hide();
    $(".search").click(function(){
        $("header").css("background-color", "#7a7a7a");
        $(".chek").hide();
        $(".cross_search").show();
        $(".inp_search").fadeIn(1000);
    });
    $(".cross_search").click(function(){
        $(".chek").show();
        $(".inp_search").hide();
        $(".cross_search").hide();
    });
});