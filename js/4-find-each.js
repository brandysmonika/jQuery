//Funkcja document.ready() - wersja skrocona
$(function(){
    'use strict';
   
    $('body').find('p').eq(1).css('color', 'red'); //metoda eq wyciaga dany element na ktorym mozemy dzialac
    
    console.log( $('body').find('p').eq(1));
    
    $('p').each(function(index) { //petla do font size
     var size = 10;
     $(this).css('font-size', size*(index+1) +  'px'); //pierwsza iteracja 10px druga 20px i trzecia 30px
        
    });
      
});