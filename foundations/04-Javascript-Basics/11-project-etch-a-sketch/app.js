// Variables

const container = document.querySelector(".container");

function displayGrid(){
    for(i=0;i<16;i++){
        for(j=0;j<16;j++){
            let grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
        }
    }
}

displayGrid();