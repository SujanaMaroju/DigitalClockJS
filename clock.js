const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minute");
const secondE1=document.getElementById("second");
const ampmE1=document.getElementById("ampm");

function clock_update(){

let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let ampm = "AM"

if(h > 12){
    h = h - 12
    ampm = "PM"
}

hourE1.innerText=h;
minuteE1.innerText=m;
secondE1.innerText=s;
ampmE1,(innerText=ampm);
setTimeout(()=>{ clock_update()
},1000)
}

clock_update()
