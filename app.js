var minutes = 0;
var seconds = 0;
var splitSeconds = 0;

var splitSecondsTwoDigits = splitSeconds.toString().padStart(2, "0")
var secondsTwoDigits = seconds.toString().padStart(2, "0")
var minutesTwoDigits = minutes.toString().padStart(2, "0")

document.getElementById("clock").innerHTML = minutesTwoDigits + ":" + secondsTwoDigits + ":" + splitSecondsTwoDigits 

const increase = () => {
    splitSeconds++;
    if (splitSeconds == 60 ){
        splitSeconds = 0
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0
        minutes++;
    }
    
    var splitSecondsTwoDigits = splitSeconds.toString().padStart(2, "0")
    var secondsTwoDigits = seconds.toString().padStart(2, "0")
    var minutesTwoDigits = minutes.toString().padStart(2, "0")

    document.getElementById("clock").innerHTML = minutesTwoDigits + ":" + secondsTwoDigits + ":" + splitSecondsTwoDigits 
}

 
 
document.getElementById("start").addEventListener("click", function() {
     myInterval = setInterval(() => {increase()  }, 1000 / 60)
  });

document.getElementById("stop").addEventListener("click", function() { 
    clearInterval(myInterval)
});


  
