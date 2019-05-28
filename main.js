let value1 = null;
let value2 = null;
let totalvalue = 0;

function addValue (kek){
    
    if(value1 !== null){
        value2 = value2 + kek;
    }else{
        value1 = value1 + kek;
    }
}


function getValue(){
    totalvalue = value1 + value2;
    
    alert(value1 + " + " + value2 + " = " + totalvalue);

    value1 = 0;
    value2 = 0;
}

function difference(){
    console.log(value2);
}
function sum(){
   delete addValue;
   function addValue (kek2){
        value2 = value2 + kek2;
    }

}