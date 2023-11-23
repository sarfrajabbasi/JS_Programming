// log out 'button clicked' when the user clicks the "SAVE INPUT" button

const inputBtn = document.getElementById('input-btn');
console.log(inputBtn);
inputBtn.addEventListener('click',()=>{
    console.log("Button clicked from addEventListener");
});

