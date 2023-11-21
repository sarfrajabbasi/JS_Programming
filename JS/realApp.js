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
  console.log(count);
  let contain = ` ${count} -`;
  saveEl.textContent += contain;
  countEl.textContent = 0;
  count = 0
}
