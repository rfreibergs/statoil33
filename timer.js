document.getElementById('timer').innerHTML =
  5 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

var nulle = d.getDate();
if (nulle < 10 && nulle >= 0) {nulle = "0" + nulle};

return ' '+hours+ ':'+minutes +' '+nulle+ '/' +months[d.getMonth()]+'/'+d.getFullYear();
}