class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.currentPair = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  
  }
  shuffleCards() {
    this.cards.sort((a,b)=>{return Math.floor(Math.random()*3)-1});
  }


  checkIfPair() {
    let firstCard = this.currentPair[0].data('card-name');
    let secondCard = this.currentPair[1].data('card-name');
    this.pairsClicked++;

    if(firstCard === secondCard){
      this.pairsGuessed++;
      return true;
    }


    
    return false;
  }




  isFinished() {
    if(this.pairsGuessed ===12){
      alert('yay')
    }
  }
}