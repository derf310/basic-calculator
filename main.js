// 1. Add button functionality
// Event Bubbling
const button = document.querySelector(".calc-btn");
const screen = document.querySelector(".screen");

let total = "0";
let previousOperator;
let virtual = "0";

button.addEventListener("click", function(event) {
    handleButtonClick(event.target.innerText);
});

function handleButtonClick(buttonClick){
    if (isNaN(buttonClick) == true){
        handleOps(buttonClick);
    } else {
        if(virtual == 0) {
            virtual = buttonClick;
        } else {
            virtual = virtual + buttonClick;
        }
    }

    screen.innerText = virtual;
}

function handleOps(buttonClick) {
    if (buttonClick == "C"){
        virtual = "0";
        total = 0;
        previousOperatior = null;
    } else if (buttonClick == "<--") {
        if (virtual.length == 1){
            virtual = "0"
        } else {
            virtual = virtual.substring(0, virtual.length-1)
        }
    } else if (buttonClick == "=") {
        if(previousOperator == null) { //null = nothing
            return;
        } else {
            doTheMath(parseInt(virtual));
            previousOperator = null;
            virtual = "" + total;
            total = 0;
        }
    } else {
        handleCalculation(buttonClick);
    }

    screen.innerText = virtual;
}

function handleCalculation(buttonClick) {
    let tempNum = parseInt(virtual);
    if (total == 0) {
        total = tempNum;
        console.log(total);
    } else {
        doTheMath(tempNum);
    }
    previousOperator = buttonClick;
    console.log(previousOperator)
    virtual = "0";
}

function doTheMath(tempNum) {
    if (previousOperator == "+") {
        total = total + tempNum;
    } else if (previousOperator == "-") {
        total = total - tempNum;
    } else if (previousOperator == "/") {
        total = total / tempNum;
    } else {
        total = total * tempNum;
    }
}