/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).ready( function(){
    
    var prize = getRandom(4);
    var discount_msg = "<p>Sorry, no discount this time!</p>";
    
    
    $('div#main div').click(function(){
        $('#result').addClass('no_discount');
        
        var myelement = this;
        
        $('div#main div').each(function(index, element){

            if ((index == prize) && (element == myelement)){
                                
                discount_msg = "<p>Your Code: CODE"+ getRandom(100) +"</p>" ;
                $('#result').removeClass('no_discount');
                $('#result').addClass('discount');
                
                return false;
            }

        });
        $('#result').append(discount_msg);
        
        $('div#main div').each(function(){
            $(this).unbind('click');
        });
        
     });  
        
     $('div#main div').hover(
             function (){
                $(this).addClass("doHover");
                
             },
             function (){
                $(this).removeClass('doHover'); 
             }
      );

    
    function getRandom(x){
        return Math.floor(Math.random()*x);
    }
});