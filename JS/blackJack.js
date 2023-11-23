//  building black Jack

// create first card and 2nd card and set their values to a random number btw 2-11

// var-sum and set value sum of the two cards

let sum = 0;
let cards = [];

let hasBlackJack = false;
// create var isalive and assign the value true and flip the value in aproprate code
let isAlive = false;

// add message var and assign ""; and reassign var to logging out
let message = "";
// display the message and store message-el elemnt in var messageEl
// display the cards and store cards-el elemnt in var messageEl
const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");

// create random number
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;

  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  }
  return randomNum;
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;

  renderGame();
}

function renderGame() {
  cardEl.textContent = " Cards: ";
  sumEl.textContent = " Sum: " + sum;

  for (let i = 0; i < cards.length; i++) {
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
function newCard() {
  let card = getRandomCard();
  sum += card;
  // console.log("Drawing a new card from the deck!");
  cards.push(card);

  renderGame();
}

