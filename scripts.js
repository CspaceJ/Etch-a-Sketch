let gridSize = 16;
const grid = document.querySelector("#gridContainer");
let elementSize = 600 / gridSize;
let btn = document.querySelector("button");

createGrid();

function resizeGrid(){
    gridSize = prompt("Please enter a new grid size (1-100)");
    elementSize = 600/gridSize;
    removeGrid();
}

function removeGrid(){
    const elements = document.querySelectorAll(".gridElement")
    console.log(elements);
    for(let element of elements){
        element.remove();
    }
    createGrid();
}

function createGrid(){
    for (let i = 0 ; i<(gridSize*gridSize) ; i++){
        const div = document.createElement("div");
        div.classList.add(`gridElement`);
        div.style.width = `${elementSize}px`;
        div.style.height = `${elementSize}px`;
        div.addEventListener("mouseout",()=>{div.style.backgroundColor = "black"});
        grid.appendChild(div);
    }
}