timer();
function timer()
{
let a= new Date();
let hours=a.getHours();
let minutes=a.getMinutes();
let seconds=a.getSeconds();

if(minutes<10){
  minutes="0"+minutes;
}
if(seconds<10){
  seconds="0"+seconds;
}
var timestring= hours+":"+minutes+":"+seconds+"";
if (hours<11){
  timestring+="AM";
}
else {
  timestring+="PM";
}
document.getElementById('time').innerHTML=timestring;

t=setTimeout(timer,1000);
}
