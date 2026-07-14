let ampm = document.getElementById('ampm')
let x=0;
alert("dei baskar own risk the page ")
function displayTime(){
    x++;
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    let mili=dateTime.getMilliseconds();
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    document.getElementById('call').innerHTML=x;
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
     document.getElementById('mil').innerHTML=mili
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,000)