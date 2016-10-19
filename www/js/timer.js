(function(){
var h1 = document.getElementsByTagName('h1')[1];
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
var seconds = 0, minutes = 0, hours = 0;
var t;
var timerRun = false;


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    timerRun = true;
    function r(el, deg) {
  		el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  	}
  	var d = new Date()
  	r(sec, 6*seconds)
  	r(min, 6*minutes)
  	r(hour, 30*(hours%12) + minutes/2)
    t = setTimeout(add, 1000);
}
timer();


/* Stop button */
stop.onclick = function() {
    timerRun = false;
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

/* Start button */

start.onclick = function(){
  if(timerRun === false)
    {
        timer();
    }
}

})();
