//  building black Jack

// create first card and 2nd card and set their values to a random number btw 2-11

// var-sum and set value sum of the two cards

let firstCard = 12;

let secondCard = 9;

let sum = firstCard + secondCard;
let hasBlackJack = false;
// create var isalive and assign the value true and flip the value in aproprate code
let isAlive = true;

// add message var and assign ""; and reassign var to logging out
let message = "";


console.log(sum);

if (sum < 21) {
  message = "Do you want to draw a new card";
} else if (sum === 21) {
  message = "wohoo! you've got blackjack!";
  hasBlackJack = true
} else if (sum > 21) {
  message = "You 're of thr game";
  isAlive = false
}

// Cash OUT!

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);


// check if the persion is old enough to enter the nightclub(21)

let age = 21;

if (age <= 20) {
  console.log("You can't enter the club!");
} else {
  console.log("Welcome");
}

// If/Else...statement

age = 100;

// check if the person is elegible for a birthday card from the king!

if (age <= 99) {
  console.log("Not elegible");
} else if (age === 100) {
  console.log("Here is your birthday card from the king!");
} else {
  console.log("Not elegible,you have already gotten one");
}



