const guessesEl = document.querySelector('#guesses');
guessesEl.textContent = 6;
let guessesRemaining = 6;

// array of possible words
const wordbank = ["minneapolis", "houston", "honolulu", "orlando", "chicago", "denver", "vancouver", "baltimore", "richmond", "fresno"];

// choose random word from array
const randomWord = wordbank[Math.floor(Math.random() * 10)];
console.log(randomWord);

// display a line for letters of word
let wordToGuess = '';
for (let i = 0; i < randomWord.length; i++){
  wordToGuess += "_";
}

// target element where word on the page will be displayed
const wordEl = document.querySelector("#word");
wordEl.textContent = wordToGuess;

// function to capture keyboard event
document.body.addEventListener('keydown', function(event){
  const letterIndex = randomWord.indexOf(event.key); 
  // compare user guess to word to guess:
  // decrease remaining guesses if letter incorrect
  if(letterIndex === -1){
    guessesRemaining --;
    guessesEl.textContent = guessesRemaining;
    
  }
});
// let wordArray = wordToGuess.split('');

// function to track score 

