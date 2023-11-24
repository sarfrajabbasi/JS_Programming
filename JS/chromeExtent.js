
// create the myleads array and InputEl.

// Create two variables

// myLeads --> should be assigned to an empty array
// inputEl --> should be assigned to the text input field.

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulList = document.querySelector('#ul-list');

// log out 'button clicked' when the user clicks the "SAVE INPUT" button


inputBtn.addEventListener('click',()=>{
// push the value www.asda.com to myArr when the inputbtn clicked.
// push the value from input filed into myLeads arr.
    myLeads.push(inputEl.value);
    
    
// clear the existing list
ulList.innerHTML = ""
    

// Render items/logout the items in the myLeads arr using a for loop and also render the leads in the unorder list using ul.textContent

// phloshopy: make it work and then correct it.
for(let i=0;i<myLeads.length;i++){

    // ulList.innerHTML += `<li>${myLeads[i]}</li>`
    // create element
    const li = document.createElement('li');
    // set text content
    li.textContent = myLeads[i];
    // append to ul
    ulList.appendChild(li)
}
inputEl.value = ""
console.log(inputEl.value);
});

