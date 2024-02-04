function createGrid(n){
    for (let i=0; i<n; i++){
        let row = document.createElement("div");
        row.classList = "rows";

        // calculate dimensions of each box
        let side = 100/n;
        
        for (let j=0; j<n; j++){
            let box = document.createElement("div");
            box.classList = "boxes";

            // give dimensions to each box
            box.setAttribute("style",`padding-bottom: ${side}%`);
            box.addEventListener("mouseenter", fillColorInBox);
            
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeDimensions(){
    let n = prompt("Enter number of boxes per side (enter less than 100): ");
    if (n<=100 && n>0){
        //empty the current container (erase the existing grid)
        container.innerHTML = "";

        //create new grid
        createGrid(n);
    }
    else{
        alert("Enter valid number of sides!");
    }
}

function fillColorInBox(e){
    console.log(e.target);
    e.target.classList = "colored-boxes";
}

var container = document.querySelector(".container");
var changeDimensionsBtn = document.querySelector(".change-dimensions-button");
changeDimensionsBtn.addEventListener("click", changeDimensions);

createGrid(16);