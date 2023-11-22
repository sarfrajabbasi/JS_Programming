//  building black Jack

// create first card and 2nd card and set their values to a random number btw 2-11

// var-sum and set value sum of the two cards

let firstCard = 12;

let secondCard = 9;

let sum = firstCard + secondCard;

console.log(sum);

if(sum < 21){
    console.log('Do you want to draw a new card');
}else if(sum === 21){
    console.log("wohoo! you've got blackjack!");
}else if(sum > 21){
    console.log("You 're of thr game");
}

// check if the persion is old enough to enter the nightclub(21)

let age = 21;

if(age<21){
    console.log('You cant enter the club!');
}else{
    console.log("Welcome");
}