/*Sketch Box - Web-based drawing pad.
  Joshua Barnhart
  Start Date 11/20/22
*/

//References, Variables, Constants
boxContainer = document.querySelector(".boxContainer");

colorSelect = document.querySelector("#mainColor")
drawEraseBtn = document.querySelector("#drawEraseBtn");
eraseAllBtn = document.querySelector("#eraseAllBtn");
changeSizeBtn = document.querySelector("#changeSizeBtn");
heightInput = document.querySelector("#height");
widthInput = document.querySelector("#width");


const defaultSize = 16;

let isDrawing = true;   //Always start with drawing mode active
let color = "#000000";    //Default drawing color is black

//Called once to set up default div grid
createDivGrid(defaultSize,defaultSize);

//Events for control buttons
colorSelect.addEventListener("change", () =>{
    color = colorSelect.value;
    console.log(colorSelect.value);
})

drawEraseBtn.addEventListener("click", () =>{
    toggleDrawErase();
})

eraseAllBtn.addEventListener("click", () =>{
    eraseAll();
})

changeSizeBtn.addEventListener("click", () =>{
    changeSize();
})

heightInput.addEventListener("change", function () {
    verifySizeInput(this);
})
widthInput.addEventListener("change", function () {
    verifySizeInput(this);
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
    let drawColor;
    if(isDrawing) drawColor = color;
    else if(!isDrawing) drawColor = "white";

    pixel.style.backgroundColor = drawColor;
}

function toggleDrawErase(){
    isDrawing = !isDrawing;

    if(isDrawing){
        drawEraseBtn.textContent = "Erase";
        drawEraseBtn.classList.remove("erasing");
    }
    else {
        drawEraseBtn.textContent = "Draw";
        drawEraseBtn.classList.add("erasing");
    }

}

function eraseAll(){
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {pixel.style.backgroundColor = "white"});

    return "Canvas erased.";
}

function changeSize(){
    let sizeX = heightInput.value;
    let sizeY = widthInput.value;

    createDivGrid(sizeX, sizeY);
}

function verifySizeInput(inputField){
    if(isNaN(+inputField.value)){
        inputField.value = defaultSize;
        return console.log("Incorrect input.");
    }

    if(+inputField.value <= 0) inputField.value = 1;
    else if(+inputField.value > 64) inputField.value = 64;

    inputField.value = inputField.value.trim();

    return console.log(+inputField.value);
}