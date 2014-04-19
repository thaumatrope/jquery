/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    var v = false;
    var $fish = [];
    
    $('button#vegOn').click(function(){
        if (v == false){
            v = true;
            $fish = $(".fish").parent().parent().detach();
            $(".hamburger").parent().parent().addClass('veg_leaf');
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            
            $('.meat').parent().parent().addClass('veg_leaf');
            $('.meat').after('<li class="tofu"><em>Tofu</em></li>');
            $meat = $('.meat').remove();
        }
    });//end button
    $('button#restoreMe').click(function(){
        if (v == true){
            v = false;
            $('.menu_entrees li').first().before($fish);
            $(".portobello").parent().parent().removeClass('veg_leaf');
            $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            
            $('.tofu').each(function(n){
                $(this).after($meat[n]);
                $(this).parent().parent().removeClass('veg_leaf');
            });
            $('.tofu').remove();
        }
    });//end button
});//end document ready