// create the myleads array and InputEl.

// Create two variables

// myLeads --> should be assigned to an empty array
// inputEl --> should be assigned to the text input field.

let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulList = document.querySelector("#ul-list");

// get leads from the localStorage
// store it in a variable leadsFromLocalStorage
// log out variable

let leadsFromLocalStorage =JSON.parse(localStorage.getItem('myleads'));
console.log(leadsFromLocalStorage);

// log out 'button clicked' when the user clicks the "SAVE INPUT" button

inputBtn.addEventListener("click", () => {
  // push the value www.asda.com to myArr when the inputbtn clicked.
  // push the value from input filed into myLeads arr.
  
  myLeads.push(inputEl.value);

  // clear the input field
  inputEl.value = "";

  // save the myLeads array to localStorage
  localStorage.setItem('myleads',JSON.stringify(myLeads))
  renderLeads(); 

});

// wrap the code in functions:-------

function renderLeads() {
  // clear the existing list
  // ulList.innerHTML = ""

  // Render items/logout the items in the myLeads arr using a for loop and also render the leads in the unorder list using ul.textContent

  // phloshopy: make it work and then correct it.

  // Improving the performance of our app/and render current items*

  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // wrap the lead in an anchor tag <a> inside the <li>

    listItems += `
    <li>
    <a target="_blank" href="${myLeads[i]}">
    ${myLeads[i]}
    </a>
    </li>`;
  }
  // DOM manupulation come with cost

  ulList.innerHTML = listItems;

  console.log(inputEl.value);
}


// Practice:--

// storing array in localStorage

// localStorage.setItem("myLeads",JSON.stringify([1,2,3,4,5,"sa",{a:"a"}]));

// console.log(JSON.parse(localStorage.getItem("myLeads")));
// // localStorage.clear()


// js singalize emtpyness (undefined)
// devlop singalize emtpyness (null)
let currViewer = null;
currViewer = ["Jane","nick"];
currViewer = null;
if(currViewer){
  console.log("yes the watch you");
}else{
  console.log("no viewer watch");

}
currViewer = ["as"];

console.log(currViewer[6]);