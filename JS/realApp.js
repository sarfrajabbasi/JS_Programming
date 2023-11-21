// onclick event listener

// increment count
function increment(){
    let countEl = document.getElementById('count-el')
    count++
    countEl.textContent = count
    
    }
    
    function save(){
        console.log(count);
    }