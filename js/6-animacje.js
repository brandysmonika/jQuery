//Funkcja document.ready() - wersja skrocona
$(function(){
    'use strict';
   
    $('h1').hide(5000).show(3000); //naglowek chowa sie i pokazuje
    
     $('h2').fadeOut(5000).fadeIn(3000);
  
    /*
    slide(); //funkcja wykonujaca sie w nieskonczosc zostaje wywolana
    
    function slide(){
       $('h3').slideUp(3000).slideDown(3000, slide); //funkcja wykonuje sie w nieskonczonosc / slide - jak sie skonczysz to wywolaj znowu
    } */
    
    var rand = Math.floor((Math.random()* 100));
    console.log(rand); //przesuwa obiekt o 100px od lewej
    
    $('h3').animate({'font-size' : '1em', 'margin-left' : '100px'}, 2000, parBack); //parBack nowa stworzona przez nas funkcja
    
    function parBack() {
        $('p').css('background', 'red'); //funkcja koloruje tlo wszystkich p na czerwono;
    }

});