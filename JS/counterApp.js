// Build a Passanger Counter app

// "The only way to learn to code is to write a lot of code"

// create variable(store the count) for data store

// let count be 0
let count = 0;

// mainly for debugging process for checking our code
console.log(count);

// mathametical operations

let firstBatch = 5;
let secondBatch = 7;

let sum = 10 + 30;
let count2 = firstBatch + secondBatch;

console.log(sum);
console.log(count2);

// dogAge:---

let myAge = 23;
let dogHumanRatio = 7;
let myDogAge = myAge * dogHumanRatio;

console.log(myDogAge);

// Create a variable bonusPoint and increase and decrease by 100 25 78;

// Reassigning & increment

let bonusPoint = 50;
bonusPoint = bonusPoint + 50;
bonusPoint = bonusPoint + 45;
bonusPoint = bonusPoint - 75;
console.log(bonusPoint);

let race = 5;
function setRace() {
  let raceElement = document.getElementById("race");
  const time = setInterval(function () {
    if (race !== 0) {
      raceElement.textContent = race;
      raceElement.style.color = "red";
      console.log(race--);
    } else {
      console.log("GO!!!");
      raceElement.textContent = "GO!!!";
      raceElement.style.color = "green";
      clearInterval(time);
    }
  }, 1000);
}

// dom
// string

let username = "happy";

let message = "Your have three notificaions";
let messageToUser = `${message} ${username} !`;

console.log(messageToUser);

let Myname = "ken";
let greeting = "Hi,my name is";
let greeting2 = "Welcome back";

let myGreeting = `${greeting} ${Myname}`;

console.log(myGreeting);

let welcomeEl = document.getElementById("welcome-el");

welcomeEl.innerText = `${greeting2} ${Myname} 👋`