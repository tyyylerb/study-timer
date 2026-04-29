var quotes = [
    "You got this baby!",
    "I love you so much!",
    "You're about to get a lot smarter.",
    "You're a genius!",
    "Women in STEM!",
    "I'm so proud of you sweetpea!",
    "Time to get SMART. Well, smartER. You're already smart!"
];

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("message").innerHTML = randomQuote;