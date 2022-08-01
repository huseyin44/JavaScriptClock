let person = prompt("Lütfen Adınızı Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML=person

//gun
const today=new Date()
let day=today.getDay()
let d=
    (day==1 ? "Pazartesi": day==2 ? "Salı": day==3 ? "Çarşamba": day==4 ? "Perşembe":
    day==5 ? "Cuma": day==6 ? "Cumartesi": "Pazar");


//saat
let info=document.querySelector("#myClock")
function startTime() {
    const today2=new Date()
    let h = today2.getHours();
    let m = today2.getMinutes();
    let s = today2.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    info.innerHTML =  h + ":" + m + ":" + s +" "+d;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
startTime()
