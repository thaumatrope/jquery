
    
$(document).ready(function(){
    var freq = 2000;
    var freqON = false;
    var myInterval;

    
    $('#freqSwitch').click(function(){
       if(freqON){
           freqON = false;
           $('#freqSwitch').text('Start Frequent Updating');
           $('#freqSwitch').addClass('freqOff');
           $('#freqSwitch').removeClass('freqOn');
           $('#freq').text("Page recieves no frequent updates.");
           clearTimeout(myInterval);
           
       }else {
           freqON = true;
           $('#freqSwitch').text('Stop Updating');
           $('#freqSwitch').addClass('freqOn');
           $('#freqSwitch').removeClass('freqOff');
           XMLInterval();
       }
    });
    
    
    $('#btnSave').click(function() {
        var data = $("#addRunner input").serializeArray();
        $.post($("#addRunner").attr('action'), data , function(json){
            if (json.status == "fail") {
                alert(json.message);
            }
            if (json.status == 'success') {
                alert(json.message);
                clearInputs();
            }
        }, "json");
     });
        
    function clearInputs(){
        $("#addRunner input").each(function(){
            $(this).val('');
        });
    }
    
    $("#addRunner").submit(function(){
        return false;
         
    });
    
    $('#freqSwitch').click();
    
     
    function XMLInterval(){

        getXMLRacers();        
        myInterval = setTimeout(XMLInterval,freq);
        getRefreshInterval(freq);
    }
   

    
    
    
	
	
});

function getTimeAjax(){
    $('#updatedTime').load('time.php');
}

function getRefreshInterval(freq){
        
    $('#freq').text("Page refreshes every " + freq/1000 + " second(s).");

}

function getTime(){
    var a_p = "";
    var d = new Date();
    var curr_hour = d.getHours();

    (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
    (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
    (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;

    var curr_min = d.getMinutes().toString();
    var curr_sec = d.getSeconds().toString();

    if (curr_min.length == 1) { curr_min = "0" + curr_min; }
    if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 

    $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p );
}


    
function getXMLRacers() {
    
    $.ajax({
        url: "ch08/end/finishers.xml",
        cache: false,
        dataType: "xml",
        success: function(xml){
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();

            $(xml).find('runner').each(function() {
                var info = '<li>Name: ' + $(this).find('fname').text() + ' ' + $(this).find("lname").text() + '. Time: ' + $(this).find("time").text() + '</li>';
                if($(this).find('gender').text() == 'm'){
                    $('#finishers_m').append(info);
                }else if($(this).find('gender').text() == 'f') {
                    $('#finishers_f').append(info);
                } else { }

                $('#finishers_all').append(info);

            });

        }    
            
    });
    
    getTime(); 
    //getTimeAjax();
}