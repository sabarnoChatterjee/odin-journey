// Variables

const container = document.querySelector(".gridBox");
const newGrid = document.querySelector(".new-grid");
let totalRows = 16;
let totalColumns = 16;
let width = 560;

function displayGrid() {
  
  for (i = 0; i < totalRows; i++) {
    for (j = 0; j < totalColumns; j++) {
      let grid = document.createElement("div");
      grid.classList.add("grid");
      grid.style.width = `${width/totalRows}px`;
      grid.style.height = `${width/totalColumns}px`;
      container.appendChild(grid);

      let opacity = 0;
      grid.addEventListener("mouseover", function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        if (opacity < 1) opacity += 0.1;
        grid.style.backgroundColor = `rgba(${red},${green},${blue},${opacity})`;
      });
    }
  }
}

newGrid.addEventListener("click", function () {
  let row = Number(prompt("Number of row?"));
  let column = Number(prompt("Number of column?"));
  console.log(row);
  console.log(column);

  totalRows = row;
  totalColumns = column;

  while(container.firstChild){
    container.removeChild(container.firstChild);
  }

  if(totalRows>100){
    alert("Max rows = 100 and max columns = 100.")
    totalRows,totalColumns = 100;
  }

  displayGrid();
});


displayGrid();