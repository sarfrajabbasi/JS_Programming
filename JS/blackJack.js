//  building black Jack

// create first card and 2nd card and set their values to a random number btw 2-11

// var-sum and set value sum of the two cards

let firstCard = getRandomCard();

let secondCard = getRandomCard();

let sum = firstCard + secondCard;
let cards = [firstCard ,secondCard];

let hasBlackJack = false;
// create var isalive and assign the value true and flip the value in aproprate code
let isAlive = true;

// add message var and assign ""; and reassign var to logging out
let message = "";
// display the message and store message-el elemnt in var messageEl
// display the cards and store cards-el elemnt in var messageEl
const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");


// create random number
function getRandomCard(){
  let cardsNum = []
  for(let i=1;i<53;i++){
    cardsNum.push(i);
  }
  let num = parseInt(Math.random()*cardsNum.length);
  console.log(num);
  return num
}

function startGame(){
  renderGame()
}

function renderGame() {
  
  cardEl.textContent = " Cards: " 
  sumEl.textContent = " Sum: " + sum;
  
  for(let i=0;i<cards.length;i++){
    cardEl.textContent += cards[i] + " "; 
  }
  if (sum < 21) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "wohoo! you've got blackjack!";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "You 're out of the game";
    isAlive = false;
  }

  // Cash OUT!

  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(message);

  messageEl.textContent = message;
}
function newCard(){
  let card = getRandomCard();
  sum+=card;
  console.log("Drawing a new card from the deck!");
  cards.push(card);

renderGame()
}

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


let featurePosts = [
  "Check out my netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
]
let persionMIT = ["sarfraj",23,true];


// add remove item from arr

persionMIT.push("JIET")
persionMIT.push("remove me now")
console.log(persionMIT);
let remove = persionMIT.pop()
console.log(persionMIT);

console.log(remove);

for(let i=0;i<featurePosts.length;i++){
  console.log(featurePosts[i]);
}

let sentence = ["Hello","my","name","is","Perman","and ","am late"];

let greetingEl = document.getElementById('greeting-el');

// Render the sentence in the greetingel para using a for loop and textcontent

for(let i=0;i<sentence.length;i++){
  greetingEl.textContent += sentence[i] + " ";
}