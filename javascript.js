var quotes = [
    "Whether you think you can or think you can\’t, you\’re right. – Henry Ford",
    "Creativity is intelligence having fun. – Albert Einstein",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Optimism is the one quality more associated with success and happiness than any other. — Brian Tracy",
    "If the plan doesn\’t work, change the plan, but never the goal. — Author Unknown",
    "I destroy my enemies when I make them my friends. — Abraham Lincoln",
    "Don\’t live the same year 75 times and call it a life. — Robin Sharma",
    "You cannot save people, you can just love them. — Anaïs Nin",
    "It wasn\’t raining when Noah built the ark. — Howard Ruff",
    "Dude, suckin\’ at something is the first step to being sorta good at something. - Jake (Adventure Time)",
    "Everything small is just a smaller version of something big. – Finn (Adventure Time)"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
};