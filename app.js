var display = document.getElementById("display");
function getBtnValue(a){
    display.value += a;
}
function calculateValue(){
    display.value = eval(display.value);;
}
function clearValue(){
    display.value = "";
}