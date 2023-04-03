// I-Ching quotes array
// I-Ching quotes array
var ichingQuotes = [
  "He who knows others is wise; he who knows himself is enlightened.",
  "Silence is a source of great strength.",
  "When anger rises, think of the consequences.",
  "All things change; nothing remains the same.",
  "The journey of a thousand miles begins with one step.",
  "If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help somebody.",
  "Patience is a key element of success.",
  "To be wronged is nothing, unless you remember it.",
  "He who strikes first, wins.",
  "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived.",
  "A leader leads by example, not by force.",
  "Everything has beauty, but not everyone sees it.",
  "If you want to know the past, look at your present. If you want to know the future, look at your present.",
  "A journey of a thousand miles begins with a single step.",
  "Study the past if you would define the future.",
  "The wise speak only of what they know.",
  "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The more you know yourself, the more clarity there is. Self-knowledge has no end.",
  "Choose a job you love, and you will never have to work a day in your life.",
  "I hear and I forget. I see and I remember. I do and I understand.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "A goal without a plan is just a wish.",
  "Our greatest glory is not in never falling, but in rising every time we fall.",
  "The best way to predict your future is to create it.",
  "The superior man is modest in his speech, but exceeds in his actions.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The only true wisdom is in knowing you know nothing.",
  "The measure of intelligence is the ability to change.",
  "You can't build a reputation on what you are going to do.",
  "The difference between ordinary and extraordinary is that little extra.",
  "Education is the most powerful weapon which you can use to change the world.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The true sign of intelligence is not knowledge but imagination.",
  "Success is stumbling from failure to failure with no loss of enthusiasm.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "I know that I am intelligent, because I know that I know nothing.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Believe you can and you're halfway there.",
  "It's not what happens to you, but how you react to it that matters.",
  "The only way to do great work is to.",
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
