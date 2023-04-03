// I-Ching quotes array
// I-Ching quotes array

var ichingQuotes = [
  "He who knows others is wise; he who knows himself is enlightened. - Hexagram 4",
  "Silence is a source of great strength. - Hexagram 52",
  "When anger rises, think of the consequences. - Hexagram 18",
  "All things change; nothing remains the same. - Hexagram 2",
  "The journey of a thousand miles begins with one step. - Hexagram 42",
  "Patience is a key element of success. - Hexagram 32",
  "He who strikes first, wins. - Hexagram 43",
  "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived. - Hexagram 15",
  "A leader leads by example, not by force. - Hexagram 45",
  "Everything has beauty, but not everyone sees it. - Hexagram 39",
  "A journey of a thousand miles begins with a single step. - Hexagram 53",
  "Study the past if you would define the future. - Hexagram 20",
  "The wise speak only of what they know. - Hexagram 61",
  "It does not matter how slowly you go as long as you do not stop. - Hexagram 53",
  "The more you know yourself, the more clarity there is. Self-knowledge has no end. - Hexagram 4",
  "I hear and I forget. I see and I remember. I do and I understand. - Hexagram 1",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Hexagram 57",
  "A goal without a plan is just a wish. - Hexagram 1",
  "Our greatest glory is not in never falling, but in rising every time we fall. - Hexagram 46",
  "The best way to predict your future is to create it. - Hexagram 1",
  "The superior man is modest in his speech, but exceeds in his actions. - Hexagram 15",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Hexagram 46",
  "The only true wisdom is in knowing you know nothing. - Hexagram 4",
  "The measure of intelligence is the ability to change. - Hexagram 49",
  "You can't build a reputation on what you are going to do. - Hexagram 3",
  "The difference between ordinary and extraordinary is that little extra. - Hexagram 28",
  "In the end, it's not the years in your life that count. It's the life in your years. - Hexagram 49",
  "The true sign of intelligence is not knowledge but imagination. - Hexagram 61",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Hexagram 36",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Hexagram 47",
  "I know that I am intelligent, because I know that I know nothing. - Hexagram 4",
  "In three words I can sum up everything I've learned about life: it goes on. - Hexagram 24",
  
];

// Function to get a random quote
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * ichingQuotes.length);
  var quoteElement = document.getElementById("iching-quote");
  quoteElement.innerHTML = ichingQuotes[quoteIndex];
}
