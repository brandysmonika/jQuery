//Funkcja document.ready() - wersja skrocona
$(function(){
    'use strict';
   
    $('h1').on({
        'click' : function() { //klucz('click') + wartosc(function)
            $(this).css('color', 'red'); //klikniecie w h1 - zmienia sie na czerwono
        },
        'mouseover' : function() {
            $(this).css('background-color', 'blue'); //po najechaniu na h1 - zmienia sie na niebiesko
        },
        'mouseout' : function() {
            $(this).css('background', 'initial');
        }
                
     });
});