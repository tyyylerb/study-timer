let stopBtn = document.getElementById("stop");
var quotes = [
    "Great job, baby!",
    "I love you so much!",
    "You just got a lot smarter.",
    "Wow. That was impressive.",
    "PHEW! Break time!",
    "New record?",
    "You're a genius!",
    "Women in STEM.",
    "Okay okay, that was great.",
    "Speechless."
];

stopBtn.addEventListener("click", function () {
    
});

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("message").innerHTML = randomQuote;