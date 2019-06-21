
class HangmanCanvas {
  constructor(theWord){
    this.ctx = document.getElementById('theCanvasElement').getContext('2d');
    this.secret = theWord;
  }
}

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.beginPath();
  let x = 300;
  let y = 600;
  this.secret.split('').forEach((eachLetter)=>{
    this.ctx.moveTo(x,y);
    this.ctx.lineTo(x + 50, y);
    this.ctx.stroke();
    x += 75;
  })
};

HangmanCanvas.prototype.writeCorrectLetters = function (arrayOfLetters) {

  let x = 305;
  let y = 580;

  arrayOfLetters.forEach((eachLetter, ind)=>{
    this.ctx.font = '48px Comic Sans MS';
    this.ctx.fillText(eachLetter, x + (75*ind), y)
  })

};



HangmanCanvas.prototype.writeWrongLetters = function (arrayOfLetters) {

  let x = 1000;
  let y = 200;

  arrayOfLetters.forEach((eachLetter, ind)=>{
    this.ctx.font = '48px Comic Sans MS';
    this.ctx.fillText(eachLetter, x , y)
    x += 50;
    if((ind + 1) % 4 === 0){
      y += 50;
      x = 1000;
    }
  })


};

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
