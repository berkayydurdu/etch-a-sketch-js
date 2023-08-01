const containerDiv = document.querySelector('#container');

function createGrid(rows, columns) {

  while (document.querySelector("button") !== null){
    document.querySelector("button").remove();
  }
  containerDiv.style.setProperty("--grid-rows", rows);
  containerDiv.style.setProperty("--grid-columns", columns);
  containerDiv.style.width = "960px";
  containerDiv.style.overflow = "hidden";

  for(i = 0; i < (rows * columns); i++){
    let square = document.createElement('div');
    square.style.minHeight = "0";
    square.style.minWidth = "0";
    square.style.overflow = "hidden";
    containerDiv.appendChild(square).className = "grid-item";
    
    square.addEventListener('mouseover', () => {
      if (square.style.backgroundColor == ""){
        let color = getRandomRGB();
        square.style.backgroundColor = color;
        square.style.opacity = ".10";
        return square.style.backgroundColor;
      }

      if ((square.style.backgroundColor !== "") && (square.style.opacity <= ".90")){
        square.style.opacity = parseFloat(square.style.opacity) + .10;
        return square.style.backgroundColor;
      }
    })
  }
  createButtons();
}

function createButtons() {
  const buttonDiv = document.querySelector("#buttonDiv");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.style.margin = "20px";
  buttonDiv.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    let newGrid = prompt("Please select the new sketch size(Max: 100): ", 16);
    if (newGrid > 100 || newGrid < 1) {
      alert("You must enter positive integer!");
      return;
    }
    createGrid(newGrid, newGrid);
  })
}

function getRandomRGB() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}

createGrid(16, 16);