// I-Ching quotes array
var ichingQuotes = [
  "He who knows others is wise; he who knows himself is enlightened.",
  "Silence is a source of great strength.",
  "When anger rises, think of the consequences.",
  "All things change; nothing remains the same.",
  "The journey of a thousand miles begins with one step.",
  "If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help somebody.",
];

// Function to get a random quote
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * ichingQuotes.length);
  var quoteElement = document.getElementById("iching-quote");
  quoteElement.innerHTML = ichingQuotes[quoteIndex];
}
