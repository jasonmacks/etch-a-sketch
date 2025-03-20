document.getElementById("generateGrid").addEventListener("click", () => {
  const gridSize = parseInt(document.getElementById("gridSizeInput").value);
  if (gridSize < 1 || gridSize > 100) {
    return;
  }
  if (!isNaN(gridSize) && gridSize > 0) {
    createGrid(gridSize, 10);
  }
});

function createGrid(gridSize, squareSize) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  //Style Container

  container.style.width = `${gridSize * squareSize}px`;
  container.style.height = `${gridSize * squareSize}px`;
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
