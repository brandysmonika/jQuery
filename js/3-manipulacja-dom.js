$(function(){
    'use strict';
   
    var textPar = $('#paragraf').text();
    console.log(textPar);

    $('.paragraf').text(textPar + ' hah'); //zmienna wstrzykujemy w parametr text
    
    $('.paragrafnext').html('<strong>TEXT</strong>'); 
    
    $('#first').append(' dodaj do nagłówka');
    
    $('#first').after(' dodaj za nagłówkiem');
    
    var przedNaglowkiem = $('div').html();
    
    $('#first').before(przedNaglowkiem);
    console.log(przedNaglowkiem);
    
    $('strong').remove();
    
    $('h3').empty();
    
    $('p').css({'background-color':'red', 'color':'white'}); //zmienia tlo dla wszystkich paragrafow i jego color na bialy
    
    var poleTekstowe = $('input').val();
    console.log(poleTekstowe); //popiera pole input z jego value
    
    $('input').val(textPar);
    
    $('h2').addClass('blue'); //dodaje klase blue - z css - do h2
    
    $('p').removeClass('paragraf'); //usuwa clase paragraf
    
    
  
});