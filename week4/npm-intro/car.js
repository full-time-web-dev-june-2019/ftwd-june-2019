 class Car{
     constructor(color, make, model){
        this.color = color;
        this.make = make;
        this.model = model;
        this.wheels = 4;
     }

     sayHello(){console.log("hello")}
 }

 class MotorCycle{
     constructor(color, make, model){
         this.color = color;
         this.make = make;
         this.model = model;
         this.wheels = 2;
     }
 }




 module.exports = {
     CarThing: Car,
     MotorCycleThing: MotorCycle
 };


