let hangManGame;
let theCanvasArtist;

class Hangman {
  constructor(){
    this.words=['zebra', 'motel', 'purple', 'telephone'];
    this.wrongLetters = [];
    this.correctLetters = [];
    this.errorsLeft = 10;
  }
}

Hangman.prototype.getWord = function () {
  let randomNum = Math.floor(Math.random()*this.words.length);
  let randomWord = this.words[randomNum];
  this.secretWord = randomWord;
  return randomWord;
};

Hangman.prototype.checkIfLetter = function (theNumber) {

  if(theNumber >= 65 && theNumber <=90){
    return true;
  } 
  return false;

};

Hangman.prototype.evaluateLetter = function (theLetter) {

  if(!this.wrongLetters.includes(theLetter)  && !this.correctLetters.includes(theLetter)){

    let isItCorrect = false;

    this.secretWord.split('').forEach((eachSecretLetter, i)=>{
      if(eachSecretLetter === theLetter){
        this.correctLetters[i] = theLetter;
        isItCorrect = true;
      }
    })

    if(isItCorrect){
      this.addCorrectLetter(theLetter)
    } else {
      this.addWrongLetter(theLetter)
    }



  }


};

Hangman.prototype.addCorrectLetter = function (i) {

  console.log("YAY", i, 'that was a correct guess');

  theCanvasArtist.writeCorrectLetters(this.correctLetters);
  

  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {

  console.log("WRONG!", letter);
  this.wrongLetters.push(letter);
  this.errorsLeft -=1;

  theCanvasArtist.writeWrongLetters(this.wrongLetters);

  this.checkGameOver()

};

Hangman.prototype.checkGameOver = function () {

  if(this.errorsLeft <= 0){
    setTimeout(()=>{
      alert('you lose');
    }, 2000)
  }

};

Hangman.prototype.checkWinner = function () {

 
  if(this.correctLetters.join('') === this.secretWord){
    setTimeout(()=>{
    alert('you win')
  }, 2000)
  }
  


};

document.getElementById('start-game-button').onclick = function () {
  hangManGame = new Hangman();
  hangManGame.getWord();
  theCanvasArtist = new HangmanCanvas(hangManGame.secretWord);
  theCanvasArtist.drawLines();

  document.getElementById('blah').remove()
};


document.onkeydown = function (e) {

  if(hangManGame.checkIfLetter(e.keyCode)){ // this means if it == true
    hangManGame.evaluateLetter(e.key)
  } 

};
