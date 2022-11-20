/* Pseudocode



    createDivGrid(size params){
        if there is anything in the boxContainer delete it

        create the divs and append them to box container as children
            for every sizeX create a div container that will be a "row" class
            add to this sizeY children divs that are "pixel" class

        add hover events to each one
            if hover enter and left click down, then changeColor
    }    
        



*/

//References, Variables, Constants
boxContainer = document.querySelector(".boxContainer");

const defaultSize = 16;

//Called once to set up default div grid
createDivGrid(defaultSize,defaultSize);


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
            if(e.buttons === 1) colorPixel(this);
        })
        
        pixel.addEventListener("mousedown", function (e) {
            e.preventDefault();
            colorPixel(this);
        })

    })

    return document.querySelector(".boxContainer");
}

function randomNumber(upperRange){
    return Math.floor(Math.random() * upperRange);
}

function colorPixel(pixel){
    pixel.style.backgroundColor = "black";
}