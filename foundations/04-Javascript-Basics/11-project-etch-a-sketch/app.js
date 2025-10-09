// Variables

const container = document.querySelector(".container");

function displayGrid(){
    for(i=0;i<16;i++){
        for(j=0;j<16;j++){
            let grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);

            let opacity = 0;
            grid.addEventListener('mouseover',function(){
                let red = Math.floor(Math.random()*256);
                let green = Math.floor(Math.random()*256);
                let blue = Math.floor(Math.random()*256);
                if(opacity<1)
                    opacity += .1;
                console.log(opacity);
                grid.style.backgroundColor = `rgba(${red},${green},${blue},${opacity})`;
            })
        }
    }
}

displayGrid();