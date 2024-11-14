startTime();
function startTime(){

    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById('clockTag').innerText = 
    hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime,1000);

    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
} 

document.getElementById("github-button").onclick = function () {
window.location.replace("https://github.com/XanderIsBored/chrome-minimal-ui"); };