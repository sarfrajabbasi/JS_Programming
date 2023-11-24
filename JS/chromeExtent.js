
// create the myleads array and InputEl.

// Create two variables

// myLeads --> should be assigned to an empty array
// inputEl --> should be assigned to the text input field.

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');

// log out 'button clicked' when the user clicks the "SAVE INPUT" button


inputBtn.addEventListener('click',()=>{
// push the value www.asda.com to myArr when the inputbtn clicked.
// push the value from input filed into myLeads arr.
myLeads.push(inputEl.value)
console.log(myLeads);
    
});

// render items/logout the items in the myLeads arr using a for loop


