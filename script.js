const board = document.querySelector('.container');
const resetbtn = document.querySelector('.resetbtn');
const root = document.querySelector(':root');


let pro = prompt('Choose a multiple of ten between 10, and 100');




       
       function changeGrid(){ 
        let colNum = window.getComputedStyle(document.documentElement).getPropertyValue('--colNum');
        let rowNum = window.getComputedStyle(document.documentElement).getPropertyValue('--rowNum');
        let cellH = window.getComputedStyle(document.documentElement).getPropertyValue('--cellH');
        let cellW = window.getComputedStyle(document.documentElement).getPropertyValue('--cellW');
        document.documentElement.style.setProperty('--colNum', pro);
        document.documentElement.style.setProperty('--rowNum', pro);
       }       

changeGrid();
 
let iterable = pro * pro;

console.log(iterable);

function createElement() {
        for (let i = 0; i < iterable; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                board.appendChild(cell);
                cell.addEventListener('mouseover', () => {
                        cell.classList.add('cell2');
                })
        }
}
createElement();


resetbtn.addEventListener('click', () => {
        for (let i = 0; i < iterable; i++) {
                board.removeChild(board.lastElementChild);
        }
        createElement();
});


