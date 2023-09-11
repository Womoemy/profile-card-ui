// display today's name
const date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = weekdays[date.getDay()];

// display current time
function updateTime() {
    const currentTime = document.getElementById("currentTime");
    currentTime.innerHTML = new Date().getTime();
}
setInterval(updateTime, 1000);