function showTime(){
    const date = new Date ();
    return date.getHours() + " Hrs " + date.getMinutes() + " Mins " + date.getSeconds() + " secs";
}

function showSessionExpire(){
    console.log("Activity-B : Your session expired at " +showTime());
}

console.log("Activity-A : Trigerring Activity-B at " +showTime());
setTimeout(showSessionExpire, 5000);
console.log("ACtivity-A : Triggered ACtivity-B at " + showTime() + " will execute after 5 seconds");

