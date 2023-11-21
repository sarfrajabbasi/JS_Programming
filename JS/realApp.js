// element
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saveEl");

// onclick event listener

// increment count
function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  console.log(count);
  let contain = ` ${count} -`;
  saveEl.innerText += contain;
}
