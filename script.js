/* Pseudocode


##Creating the Grid##
    createDivGrid(size params){
        if there is anything in the boxContainer delete it

        create the divs and append them to box container as children
            for every sizeX create a div container that will be a "row" class
            add to this sizeY children divs that are "pixel" class

        add hover events to each one
            if hover enter and left click down, then changeColor
    }    
        
####

##Draw/Erase Button##
    drawEraseToggle(){
        change the current mode bool

        change the drawEraseBtn text and color
    }

    *also need to change changeColor function to set color to white if isDrawing is false
    *maybe make a const for erase color so background color could be changed later?

####

*/

//References, Variables, Constants
boxContainer = document.querySelector(".boxContainer");
drawEraseBtn = document.querySelector("#drawEraseBtn");
eraseAllBtn = document.querySelector("#eraseAllBtn");
changeSizeBtn = document.querySelector("#changeSizeBtn");


const defaultSize = 16;

let isDrawing = true;   //Always start with drawing mode active
let color = "black";    //Default drawing color is black

//Called once to set up default div grid
createDivGrid(defaultSize,defaultSize);

//Events for control buttons
drawEraseBtn.addEventListener("click", () =>{
    toggleDrawErase();
})

eraseAllBtn.addEventListener("click", () =>{
    eraseAll();
})

changeSizeBtn.addEventListener("click", () =>{
    console.log("ChangeSize");
})



//Functions
function createDivGrid(sizeX,sizeY){
    while (boxContainer.firstChild){
        boxContainer.removeChild(boxContainer.firstChild);
    }

    for (x = 0; x < sizeX; x++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (y = 0; y < sizeY; y++){
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("pixel");
            rowDiv.appendChild(pixelDiv);
        }

        boxContainer.appendChild(rowDiv);
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", function (e) {
            if(e.buttons === 1) colorPixel(this);   //1 means primary button down(left click)
        })
        
        pixel.addEventListener("mousedown", function (e) {
            e.preventDefault();                     //stops grab/drag behavior for this element
            colorPixel(this);
        })

    })

    return document.querySelector(".boxContainer");
}

function randomNumber(upperRange){
    return Math.floor(Math.random() * upperRange);
}

function colorPixel(pixel){
    if(isDrawing) color = "black";
    else if(!isDrawing) color = "white";

    pixel.style.backgroundColor = color;
}

function toggleDrawErase(){
    isDrawing = !isDrawing;

    if(isDrawing){
        drawEraseBtn.textContent = "Erase";
    }
    else drawEraseBtn.textContent = "Draw";
}

function eraseAll(){
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {pixel.style.backgroundColor = "white"});

    return "Canvas erased.";
}