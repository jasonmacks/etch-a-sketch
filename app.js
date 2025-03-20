// Takes input from user to create grid size

const button = document.getElementById("generateGrid");
const input = document.getElementById("gridSizeInput");

function gridGeneration() {
  let gridSize = parseInt(input.value) || 1;
  gridSize = Math.min(100, Math.max(1, gridSize)); // Keeps value between 1 and 100

  createGrid(gridSize); // Calls createGrid function, passing in the user input (gridSize) as the argument
  input.value = "";
}

button.addEventListener("click", gridGeneration);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    gridGeneration();
  }
});

function createGrid(gridSize) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;
  const squareSize = containerSize / gridSize;

  //Style Container
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";

  // Create Grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    // Style Grid
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";
    square.style.boxSizing = "border-box";

    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
