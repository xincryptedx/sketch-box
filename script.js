/* Pseudocode



    createDivGrid(size params){
        if there is anything in the boxContainer delete it

        create the divs and append them to box container as children

        add hover events to each one
            if hover enter and left click down, then changeColor
    }    
        



*/

//References, Variables, Constants
boxContainer = document.querySelector(".boxContainer");

const defaultSize = 16;

let containerX = defaultSize;    
let containerY = defaultSize;