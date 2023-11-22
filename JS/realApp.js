// element
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saveEl");

// onclick event listener

// increment count
function increment() {
  count++;
  countEl.textContent = count;
  
}

function save() {
  let contain = `${count} -`;
  saveEl.textContent += contain;
  countEl.textContent = 0;
  count = 0

}

// Rendering and Error message
const btn = document.getElementById('click');
const error = document.getElementById('error');
btn.addEventListener('click',function(){
  error.style.display = "block"

  setTimeout(() => {
    error.textContent = 'Something went wrong,Please try again'
  }, 5000);
})

let input = document.getElementById('num-el')
const sum2 = document.getElementById('sum-el');
console.log(sum2.textContent);

// calculator

const add =()=>{
  sum2.textContent = "Sum: "+ eval(input.value)
}
const subs = ()=>{
  sum2.textContent = "Sum: "+ eval(input.value)
  
}
const divide = ()=>{
  sum2.textContent = "Sum: "+ eval(input.value)
  
}
const multiple = ()=>{
  sum2.textContent =  "Sum: "+ eval(input.value)
  
}

