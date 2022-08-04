var hour = document.getElementById("hour");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");
var ampm = document.getElementById("ampm");
console.log(ampm);

function newtime(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var d = new Date().getDate();
    var mon = new Date().getMonth();
    var y = new Date().getFullYear();
    console.log(y);
    

 if(h > 12){
    ampm.innerText = "pm"
 }else{
    ampm.innerText = "am"
 }

 if(h > 12){
    h = h - 12
 }
 else if(h==0){
    h = 12
 }

    hour.innerText = h 
    minutes.innerText = m
    seconds.innerText = s
    date.innerText = d
    month.innerText = mon + 1
    year.innerText = y
}
newtime();
setInterval(newtime,1000);