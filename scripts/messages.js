var quotes = [
    "You got this baby!",
    "I love you so much!",
    "You're about to get a lot smarter.",
    "You're a genius!",
    "Women in STEM!",
    "I'm so proud of you sweetpea!",
    "I LOVE YOU BABY!!",
    "Let's see how high this number can go...",
    "Another knowledge session!",
    "P.S. I love you!",
    "Don't stress it. You've got this.",
    "If the number goes high enough, your brain will start to expand.",
    "The biggest. The smartest.",
    "Oh yeah. Let's do this.",
    "They aren't ready for your genius...",
];

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("message").innerHTML = randomQuote;