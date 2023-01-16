const guessesEl = document.querySelector('#guesses');
guessesEl.textContent = 6;


// array of possible words
const wordbank = ["minneapolis", "houston", "honolulu", "orlando", "chicago", "denver", "vancouver", "baltimore", "richmond", "fresno", "boston", "atlanta"];



const play = () => {
  let guessesRemaining = 6;
  // choose random word from array
  const randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];
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
    // get the index of the key pressed
    const letterIndex = randomWord.indexOf(event.key); 

    // compare user guess to word to guess:
    // decrease remaining guesses if letter incorrect
    if(letterIndex === -1){
      guessesRemaining --;
      guessesEl.textContent = guessesRemaining;  
    }else{
        // if correct letter guessed, determine place in word
        let word = wordToGuess.split('');
        for(let i = 0; i < wordToGuess.length; i++){
          if(event.key === randomWord[i]){
            word[i] = randomWord[i];
        }
      }      
        wordToGuess = word.join(' ');
        wordEl.textContent = wordToGuess;
    } 
  });   
}

// function to track score 

play();
