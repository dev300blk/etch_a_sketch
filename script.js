const board = document.querySelector('.container');
const resetbtn = document.querySelector('.resetbtn');



function createElement() {
        for (let i = 0; i < 400; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                board.appendChild(cell);
                cell.addEventListener('mouseover', () => {
                        cell.classList.add('cell2');
                })
        }
}
createElement();


resetbtn.addEventListener('click',()=>{
        for(let i = 0; i < 400; i++){
        board.removeChild(board.lastElementChild);
        }
        createElement();
});


