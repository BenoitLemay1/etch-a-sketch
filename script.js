const container = document.querySelector("#container");
let gridSize = document.getElementById("grid-size");
const initBtn = document.querySelector("button");

function createGrid() {
  //remove any previous grid
  container.innerHTML = "";
  for (let i = 0; i < gridSize.value ** 2; i++) {
    let square = document.createElement("div");
    square.style.width = `${600 / gridSize.value}px`;
    square.className = "in-square";
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.background = "red";
    });
  }
}

initBtn.addEventListener("click", createGrid);
