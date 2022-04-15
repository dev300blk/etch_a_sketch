const board = document.querySelector('.container');
const resetbtn = document.querySelector('.resetbtn');



// mouseover



// reset event
resetbtn.addEventListener('click',()=>{
console.log('click')
fill();

})

// fills board with empty cells
function fill(){
function createElement(){
   const cell =  document.createElement('div');
   cell.classList.add('cell');
   board.appendChild(cell);
   cell.addEventListener('mouseover',()=>{
   cell.classList.add('cell2');
   })
}

for(i=0;i<400;i++){
   // console.log(i);
   createElement();
  
}
}


