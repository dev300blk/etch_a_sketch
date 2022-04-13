const board = document.querySelector('.container');
const resetbtn = document.querySelector('.resetbtn');
console.log(resetbtn)

// reset event
resetbtn.addEventListener('click',()=>{
console.log('click')
reset();
})

// fills board with empty cells
function reset(){
function createElement(){
   const cell =  document.createElement('div');
   cell.classList.add('cell');
   board.appendChild(cell);
}

for(i=0;i<400;i++){
   // console.log(i);
   createElement();
}
}

