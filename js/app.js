function zobiAdd(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter a valid decimal number");
    } else {
        return parseFloat(number1) + parseFloat(number2);
    }
}

function zobiSubstract(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid decimal number");
    } else { 
        return parseFloat(number1) - parseFloat(number2);
    }
}


function zobiMultiple(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid decimal number");
    } else {
        return parseFloat(number1) * parseFloat(number2);
    }
}
     
function zobiDivide(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid decimal number");
    } else {
        return parseFloat(number1) / parseFloat(number2)
    }
}

function zobiSquares(number1){
    if(isNaN(number1)){
        alert("enter a valid number");
    }else{
        return Math.sqrt(parseFloat(number1));
    }
}

function zobiPowers(number1){
    if(isNaN(number1)){
        alert("enter a valid number");
    }else{
        return Math.pow(number1, 2);
    }
}









