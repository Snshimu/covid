$(document).ready(function(){

    // =========hamburger=========
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');

        $('.nav-bar').toggleClass('nav-toggle');
    });

    //==========scrooltop=============

     $(window).scroll(function(){
        if($(this).scrollTop() > 100){

            $('#scrolltop').fadeIn();

        }else{
            $('#scrolltop').fadeOut();
        }
        });



});









