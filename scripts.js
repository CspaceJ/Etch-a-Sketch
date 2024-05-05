let gridSize = 16;
const grid = document.querySelector("#gridContainer");
console.log(grid.textContent);
let elementSize = 600 / gridSize;
for (let i = 0 ; i<(gridSize*gridSize) ; i++){
    const div = document.createElement("div");
    div.classList.add(`gridElement`);
    div.style.width = `${elementSize}px`;
    div.style.height = `${elementSize}px`;
    div.addEventListener("mouseout",()=>{div.style.backgroundColor = "black"});
    grid.appendChild(div);
}