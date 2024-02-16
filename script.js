let counter = 0;
let sessiontime = 0;
let breaktime = 0;
var id;

var sessioninc = document.getElementById("session-inc");
var sessiondec = document.getElementById("session-dec");
var timeofsessionlabel = document.getElementById("timeofsession");

var breakinc = document.getElementById("break-inc");
var breakdec = document.getElementById("break-dec");
var timeofbreaklabel = document.getElementById("timeofbreak");

sessioninc.addEventListener( "click", function(){
      sessiontime += 1;
      counter += 60
      timeofsessionlabel.innerHTML = sessiontime + "min";    
})

sessiondec.addEventListener( "click", function(){
    if (sessiontime > 0){
    sessiontime -= 1;
    counter -= 60
    timeofsessionlabel.innerHTML = sessiontime + "min";
    }
})

breakinc.addEventListener( "click", function(){
    breaktime += 1;
    timeofbreaklabel.innerHTML = breaktime + "min";    
})

breakdec.addEventListener( "click", function(){
    if (breaktime > 0){
    breaktime -= 1;
    timeofbreaklabel.innerHTML = breaktime + "min";
    }
})

// START PAUSE RESUME BUTTON  EVENT 

var startpause = document.getElementById("startpause");
startpause.addEventListener("click", function(){
    if (startpause.value === "Start." && sessiontime !== 0) {
        startpause.value = "Pause";
        setTime();
        sessioninc.disabled = true;
        sessiondec.disabled = true;
        breakinc.disabled = true;
        breakdec.disabled = true;
    }
    else if(startpause.value === "Pause"){
        startpause.value = "Resume";
        clearInterval(id);
    }
    else if(startpause.value === "Resume"){
        startpause.value = "Pause";
        setTime();
    }        
});

// RESET BUTTON EVENTLISTENER

var timerlabel = document.getElementById("timer")
var rset = document.getElementById("resetbtn");
rset.addEventListener("click", function(){
    sessioninc.disabled = false;
    sessiondec.disabled = false;
    breakinc.disabled = false;
    breakdec.disabled = false;
    sessiontime = 0;
    breaktime = 0;
    counter = 0;
    timeofsessionlabel.innerHTML = sessiontime + "min";
    timeofbreaklabel.innerHTML = breaktime + "min";
    timerlabel.innerHTML = "00:00";
    startpause.value = "Start.";
    clearInterval(id);
});

// FUNCTION FOR SESSION TIME

function setTime(){
    id = setInterval(function() {
       if(counter >= 0){
            var min, sec;
    
        min = parseInt(counter / 60);
        sec = counter % 60;
    
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        } 
        
        timer.style.color = "#0fbac9";
        timer.innerText = min + ":" + sec;
        counter--;
        }
        else{
            clearInterval(id);
            counter = breaktime * 60;
            setTimeForBreak();
        }
        
    }, 1000);
}

function setTimeForBreak(){
    id2 = setInterval(function() {
        if(counter >= 0){
            var min, sec;
            min = parseInt(counter / 60);
            sec = counter % 60;
            if (min < 10) {
                min = '0' + min;
                }
                if (sec < 10) {
                    sec = '0' + sec;
                    }

                    timer.style.color = "#EB6841";
                    timer.innerText = min + ":" + sec;
                    counter--;
                    }
                    else{
                        clearInterval(id2);
                        counter = sessiontime * 60;
                        setTime();
                        }
                        }, 1000);
                        }


