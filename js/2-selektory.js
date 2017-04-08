$(function(){
    'use strict';
    
    var paragraphs = $('p');
    console.log(paragraphs);
    
    var paragrapOne = $('#first');
    console.log(paragrapOne);
    
    var paragrapTwo = $('.paragraf');
    console.log(paragrapTwo);
    
    var paragrapNot = $('p:not(.paragraf)'); //zwraca wszystkie p oprocz class=paragraf
    console.log(paragrapNot);
    
    var paragrapInDiv = $('div > p'); // zwraca pierwszy p w divie 
    console.log(paragrapInDiv);
    
});