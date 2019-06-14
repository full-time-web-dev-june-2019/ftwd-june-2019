// class example stuff 


let char = {
    name: "Charmander",
    hp: 49,
    type: 'fire',
    attacks: [
      {name: 'scratch', power: 7},
      {name: 'tackle', power: 5},
      {name: 'ember', power: 10},
    ],
    conscious: true,
    height: 0.7,
    weight: 10,
    revive: function(){
      this.hp = 49;
      this.conscious = true;
    },
    attack: function(){
      let randomNum = Math.floor(Math.random()*3)
      let whichAttack = this.attacks[randomNum];
      return whichAttack;
    },
    getAttacked: function(theAttack){
      this.hp -= theAttack.power;
      if(this.hp > 0){
      console.log(`${this.name } was attacked with ${theAttack.name} and received ${theAttack.power} damage`);
      console.log(this.hp);
      }else{
        console.log(`${this.name} has fainted`);
      }
    }
  }
  
  // console.log(char);
  // console.log('--------------------------------------')
  
  // char.hp = 0;
  // char.conscious = false;
  
  // console.log(char);
  // console.log('--------------------------------------')
  
  
  
  // char.revive();
  
  // console.log(char);
  
  
  
  let squir = {
    name: "Squirtle",
    hp: 60,
    type: 'water',
    attacks: [
      {name: 'scratch', power: 7},
      {name: 'tackle', power: 5},
      {name: 'bubble', power: 10},
    ],
    conscious: true,
    height: 0.65,
    weight: 11.3,
      revive: function(){
      this.hp = 49;
      this.conscious = true;
    },
     attack: function(){
      let randomNum = Math.floor(Math.random()*3)
      let whichAttack = this.attacks[randomNum];
      return whichAttack;
    },
     getAttacked: function(theAttack){
      this.hp -= theAttack.power;
      if(this.hp > 0){
      console.log(`${this.name } was attacked with ${theAttack.name} and received ${theAttack.power} damage`);
      console.log(this.hp);
      }else{
        console.log(`${this.name} has fainted`);
      }
    }
  }
  
  
  console.log(char);
  console.log('------------------------------');
  console.log(squir);
  console.log('------------------------------');
  
  squir.attack();
  
  
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());
  char.getAttacked(squir.attack());

//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   --=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



class Car {
    constructor(theMakeIWant, theModelIWant, theColorIWant="white"){
      this.make = theMakeIWant;
      this.model = theModelIWant;
      this.color = theColorIWant;
      this.isOn = false;
      this.windowsOpen = false;
    }
  
    openWindows(){
      this.windowsOpen = true;
    }
    closeWindows(){
      this.windowsOpen = false;
    }
    start(){
      this.isOn = true;
    }
    stop(){
      this.isOn = false;
    }
  }
  
  // let allTheCars = [];
  // let nicks =  new Car('Honda', 'Civic');
  // let lisas =  new Car('Jeep', 'Wrangler', 'Gray');
  
  // console.log(allTheCars);
  // nicksCar.start();
  // console.log(nicksCar);
  
  // console.log(lisasCar);
  // lisasCar.start();
  // console.log(lisasCar);
  
  
  class Truck extends Car{
    constructor(make, model, diesel, color="red"){
      super(make, model, color)
      this.diesel = diesel;
      this.fourWheeling = false
    }
  
    turnOn4WheelDrive(){
      this.fourWheeling = true;
    }
  
    startMyTruck(){
      super.start();
      console.log('vrooom vrooom im a truck')
    }
  
  }
  
  
  let jonsTruck = new Truck('toyota', 'tacoma', false);
  
  jonsTruck.startMyTruck();
  jonsTruck.turnOn4WheelDrive()
  
  console.log(jonsTruck);
  
  
  
  
