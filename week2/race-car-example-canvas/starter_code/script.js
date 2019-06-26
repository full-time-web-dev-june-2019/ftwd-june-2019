let theCar;
let allTheObstacles = [];
window.onload = function() {

  ctx = document.getElementById('game-board').getContext('2d');



class Car{
  constructor(){
    this.x=240;
    this.y=500;
    this.width=30;
    this.height=50;
    this.image = './images/car.png'
  }

  drawItself(){
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = "#8cf442";
    // ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
    // ctx.fillStyle = 'black'
    let b = new Image();
    b.src = this.image;
    // b.onload = ()=>{
      ctx.drawImage(b,this.x, this.y, this.width, this.height)
    // }
  }

  moveYourSelf(whichDirection){
    // ctx.clearRect(this.x, this.y, this.width, this.height)



    if(whichDirection ==="ArrowUp"){
      this.y -= 10;
    } else if (whichDirection === "ArrowDown"){
      this.y += 10;
    } else if (whichDirection === "ArrowLeft"){
      this.x -= 10;
    } else if (whichDirection === "ArrowRight"){
      this.x += 10;
    }

    if(this.x > 450)
    this.x = 450;

    if(this.x < 0)
    this.x = 0;

    if(this.y > 500)
    this.y = 500

    if(this.y < 0)
    this.y = 0;

    // this.drawItself();
  }
}





class Obstacle{
  constructor(theX, theY, theWidth, theHeight){
    this.x = theX;
    this.y = theY;
    this.width = theWidth;
    this.height = theHeight;
    this.image = './images/rocket.png'
  
  }

  drawItself(){
  

    let w = new Image();
    w.src = this.image;

      ctx.drawImage(w, this.x, this.y, this.width, this.height);


  }

  moveDownForever(){
      setInterval(()=>{
        // ctx.clearRect(this.x, this.y, this.width, this.height);
        this.y += 5;
        // this.drawItself();
      },200)
  }



}





  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  document.onkeydown = function(e){

    let directions = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];


    if(directions.includes(e.key)){
      theCar.moveYourSelf(e.key)
    }
    
  }

  function startGame() {
    theCar = new Car();
    theCar.drawItself()

    animate();

  }


  function drawEverything(){
    theCar.drawItself();

    allTheObstacles.forEach((eachObstacle)=>{
      eachObstacle.drawItself();
    })

  }

  function detectCollisions(){

    allTheObstacles.forEach((obs)=>{

      if(theCar.x < (obs.x + obs.width) && theCar.x+theCar.width > obs.x && theCar.y < obs.y+obs.height && theCar.y+theCar.height > obs.y){
        setTimeout(()=>{
          alert('ouch');
          location.reload();
        },50)
      } 

    })


  }


  

  let frames = 1;


  function animate(){
    frames++;

   
      ctx.clearRect(0,0,500,550);
      
      // let randomNum = Math.floor(Math.random()* 50)

      let randomX = Math.floor(Math.random()* 500)

      let randomWidth = Math.floor(Math.random()* 50) + 20;

      let randomHeight = Math.floor(Math.random()* 50) + 20;

      // if(randomNum === 2){

        if(frames%300===0){
 
          let obs = new Obstacle(randomX, 0, randomWidth, randomHeight);
          allTheObstacles.push(obs);
          obs.moveDownForever();
        }

      // }

      drawEverything();
      detectCollisions();



      requestAnimationFrame(animate);

    
  }




























};
