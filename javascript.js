function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
  }

/*TypeWRiter*/
var i = 0;
var txt = 'Semoga panjang umur dan sehat selalu.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* Play music */
function play() {
	var audio = document.getElementById("audio");
	audio.play();
}

function init() {
	  startTime();
	  typeWriter();
  }