// const box = document.querySelector('.box1');

// box.addEventListener('click',()=>{
// console.log("I Want to open the box! when it's clicked");
// })



// use innerhtml
 const container = document.getElementById('container');

 container.innerHTML = "<button onclick='buy()'>Buy!</button>";
 console.log(container);

//When clicked,render a para. under the button (in the container) that says "Thank you for Buying!"

function buy(){
   container.innerHTML += '<p>Thank you for buying</p>'
}
