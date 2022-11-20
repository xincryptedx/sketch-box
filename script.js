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
    for (x = 0; x < sizeX; x++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (y = 0; y < sizeY; y++){
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("pixel");
            // pixelDiv.style.backgroundColor = "rgb(" + randomNumber(255) +", " + randomNumber(255) + ", " + randomNumber(255) + ")";
            rowDiv.appendChild(pixelDiv);
        }

        boxContainer.appendChild(rowDiv);
    }

    return document.querySelector(".boxContainer");
}

function randomNumber(upperRange){
    return Math.floor(Math.random() * upperRange);
}