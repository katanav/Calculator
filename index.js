const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculateDisplay(){
    display.value = eval(display.value);
}


