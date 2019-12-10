$(document).ready(function(){
    function displayTime(){
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
       
        
        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        var meridiem = "AM";

        if(hours > 12){
            hours = hours - 12;
            meridiem = "PM";
        }

        if(hours === 0){
            hours = 12;
        }


        var clockDiv = document.getElementById('clock');
        clockDiv.textContent = hours + ":" + minutes + ":" + seconds + ":" + meridiem;


    }
    setInterval(displayTime, 1000);
});



function test(x) {
    if (x.toLowerCase().substring(0, 4) == "java") {
        return true;
        } else { 
        return false;
    }
}