// display current time
function updateTime() {
    const currentTime = document.getElementById("currentTime");
    currentTime.innerHTML = new Date().getTime();
}
updateTime();
setInterval(updateTime, 1000);

// display today's name
const options = { weekday: "long" };
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = new Intl.DateTimeFormat("en-NG", options).format(new Date());