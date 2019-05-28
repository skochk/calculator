let value1 = '';
let value2 = '';
let totalvalue = 0;

function addValue (kek){
    value1 = value1 + kek;
    let textarea = document.getElementById("showArea");
    textarea.value = textarea.value + kek; 
}

function getValue(){
    let textarea = document.getElementById("showArea");
    textarea.value = eval(value1);
    value1 = 0;
}

