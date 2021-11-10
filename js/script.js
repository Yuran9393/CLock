'use strict';
window.addEventListener('load', calculateTime);
function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let arrDays = ['вс','пн','вт','ср','чт','пт','сб',];
    let day = document.querySelector('.day');
    let minutes = document.querySelector('.minute');
    let hours = document.querySelector('.hour');
    let seconds = document.querySelector('.second');
    day.innerHTML = arrDays[dayNumber];
    seconds.innerHTML = second;
    minutes.innerHTML = minute;
    hours.innerHTML = hour;
 
    setTimeout(calculateTime, 200);
}