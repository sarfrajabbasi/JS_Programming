// check if the persion is old enough to enter the nightclub(21)

let age = 21;

if (age <= 20) {
  // console.log("You can't enter the club!");
} else {
  // console.log("Welcome");
}

// If/Else...statement

age = 100;

// check if the person is elegible for a birthday card from the king!

if (age <= 99) {
  console.log("Not elegible");
} else if (age === 100) {
  // console.log("Here is your birthday card from the king!");
} else {
  // console.log("Not elegible,you have already gotten one");
}

let featurePosts = [
  "Check out my netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];
let persionMIT = ["sarfraj", 23, true];

// add remove item from arr

persionMIT.push("JIET");
persionMIT.push("remove me now");
// console.log(persionMIT);
let remove = persionMIT.pop();
// console.log(persionMIT);

// console.log(remove);

for (let i = 0; i < featurePosts.length; i++) {
  // console.log(featurePosts[i]);
}

let sentence = ["Hello", "my", "name", "is", "Perman", "and ", "am late"];

let greetingEl = document.getElementById("greeting-el");

// Render the Sentence in the greetingel para using a for loop and textcontent

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}


let hasCompletedCourse = true;
let givesCertificate = true;

if(hasCompletedCourse && givesCertificate){
    generateCertificate()
}

function generateCertificate(){
    console.log("Genertaing Certificate...");
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if(!(hasSolvedChallenge && hasHintsLeft)){
    showSolution()
}

function showSolution(){
    console.log("Showing the solution...");
}

