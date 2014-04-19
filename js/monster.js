/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    var clix = { head: 0,
                 eyes: 0,
                 nose: 0,
                 mouth: 0 };
 
    
    var rLightning1;
    var rLightning2;
    var rLightning3;
    
    startLightning();
    
       
    $('#head').click(function(){
        moveMe('head',this);
    });
    $('#eyes').click(function(){
        moveMe('eyes',this);
    });
    $('#nose').click(function(){
        moveMe('nose',this);
    });
    $('#mouth').click(function(){
        moveMe('mouth',this);
    });
    
    function moveMe(part, obj) {
        if( clix[part] < 9){
            clix[part] += 1;
            var tmp = clix[part] * -367;
            $(obj).animate({left:tmp}, 1000);
        }else{
            clix[part] = 0;
            $(obj).animate({left:'0'}, 1000);
        }
    }
    
   
    $("#btnRandom").click(randomize);
    $("#btnReset").click(function(){
        clix.head = 10;
        clix.eyes = 10;
        clix.nose = 10;
        clix.mouth = 10;
        doClicks()
    });
    
    function randomize() {
        clix.head = getRandom(9) - 1;
        clix.eyes = getRandom(9) - 1;
        clix.nose = getRandom(9) - 1;;
        clix.mouth = getRandom(9) - 1;
        doClicks();    
    }
    
    function doClicks(){
        $('#head').click();
        $('#mouth').click();
        $('#nose').click();
        $('#eyes').click();
    }
 

    
    window.onblur = stopLightning;
    window.onfocus = startLightning;
    
    function startLightning() {

        rLightning1 = setInterval(function(){
            setTimeout(lightning_one, Math.floor(Math.random()*4000 + 2000));
        }, 10000);
        rLightning2 = setInterval(function(){
            setTimeout(lightning_two, Math.floor(Math.random()*7000 + 1000));
        }, 10000);
        rLightning3 = setInterval(function(){
            setTimeout(lightning_three, Math.floor(Math.random()*10000));
        }, 10000);

  
        
    }
    
    function stopLightning() {
        
        clearInterval(rLightning1);
        clearInterval(rLightning2);
        clearInterval(rLightning3);
        
    }
});


function lightning_one(){
    $("#container #lightning1").fadeIn(100).fadeOut(100);
    
};
function lightning_two(){
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");

    
};
function lightning_three(){
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
 
   
};

function getRandom(n){
    return Math.floor(Math.random()*n + 1);
}