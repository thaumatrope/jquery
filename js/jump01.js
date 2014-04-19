/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).ready( function(){
    $('div#main div').click(function(){
        
        $('div#main div p').remove();
        var discount = Math.floor((Math.random()*5) + 5);
        var discount_msg = "<p>Your discount is " + discount + "%</p>";
        $(this).append(discount_msg);
       
    });
});