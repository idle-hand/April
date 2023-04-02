const quotes = [
{
quote: "To see things in the seed is genius.",
hexagram: "Hexagram 1: The Creative"
},
{
quote: "The gentlest thing in the world overcomes the hardest thing in the world.",
hexagram: "Hexagram 43: Breakthrough"
},
{
quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
hexagram: "Hexagram 20: Contemplation"
},
{
quote: "When anger rises, think of the consequences.",
hexagram: "Hexagram 64: Before Completion"
},
{
quote: "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
hexagram: "Hexagram 13: Fellowship with Men"
},
{
quote: "When the student is ready, the teacher will appear.",
hexagram: "Hexagram 4: Youthful Folly"
},
{
quote: "Success is not the result of spontaneous combustion. You must set yourself on fire.",
hexagram: "Hexagram 30: The Clinging Fire"
},
{
quote: "To know what is right and not do it is the worst cowardice.",
hexagram: "Hexagram 24: Return"
},
{
quote: "He who conquers others is strong; he who conquers himself is mighty.",
hexagram: "Hexagram 33: Retreat"
},
{
quote: "A man's errors are his portals of discovery.",
hexagram: "Hexagram 29:
},
{
quote: "In the midst of great joy, do not promise anyone anything. In the midst of great anger, do not answer anyone's letter.",
hexagram: "Hexagram 3: Difficulty at the Beginning"
},
{
quote: "A superior man is modest in his speech, but exceeds in his actions.",
hexagram: "Hexagram 15: Modesty"
},
{
quote: "He who knows others is wise; he who knows himself is enlightened.",
hexagram: "Hexagram 33: Retreat"
},
{
quote: "To be wronged is nothing unless you remember it.",
hexagram: "Hexagram 47: Oppression"
},
{
quote: "The journey of a thousand miles begins with one step.",
hexagram: "Hexagram 53: Gradual Progress"
},
{
quote: "A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
hexagram: "Hexagram 59: Dispersion"
},
{
quote: "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived.",
hexagram: "Hexagram 61: Inner Truth"
},
{
quote: "He who is contented is rich.",
hexagram: "Hexagram 85: Dissolution"
},
{
quote: "The cautious seldom err.",
hexagram: "Hexagram 62: Small Exceeding"
},
{
quote: "The man who moves a mountain begins by carrying away small stones.",
hexagram: "Hexagram 19: Approach"
}
];

const quoteBtn = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const hexagram = document.getElementById("hexagram");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quote.innerText = randomQuote.quote;
  hexagram.innerText = randomQuote.hexagram;
}

quoteBtn.addEventListener("click", displayQuote);

displayQuote();
