var seconds = 00;
var minute = 00;
var addseconds = document.getElementById("seconds");
var addminute = document.getElementById("minute");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var interval;

function startTimer() {
    seconds++;
    
    if(seconds < 9){
        addseconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9){
        addseconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minute++;
        addminute.innerHTML ="0" + minute;
        seconds =0;
        addseconds.innerHTML = "0"+ 0;
    }
    if(minute > 9){
        addminute.innerHTML = minute;

    }

}


start.onclick = function () {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(startTimer,1000);
  };
  stop.onclick = function () {
    clearInterval(interval);
  };
  
  reset.onclick = function () {
    clearInterval(interval);
    minute = "00";
    seconds = "00";
    addseconds.innerHTML = seconds;
    addminute.innerHTML = minute;
  };