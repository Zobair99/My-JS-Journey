$(document).ready(function () {
    $('select').formSelect();
});











var myOperation;
$('#ops').change(function () {
    switch ($(this).val()) {
        case 'plus':
            myOperation = 'plus';
            $('#num1').attr("placeholder", "First Number");
            $('#num2').attr("placeholder", "Second Number");
            $('#num2').prop('disabled', false);
            break;
        case 'minus':
            myOperation = 'minus';
            $('#num1').attr("placeholder", "First Number");
            $('#num2').attr("placeholder", "Second Number");
            $('#num2').prop('disabled', false);
            break;
        case 'multi':
            myOperation = 'multi';
            $('#num1').attr("placeholder", "First Number");
            $('#num2').attr("placeholder", "Second Number");
            $('#num2').prop('disabled', false);
            break;
        case 'devide':
            myOperation = 'devide';
            $('#num1').attr("placeholder", "Dividend");
            $('#num2').attr("placeholder", "Divisor");
            $('#num2').prop('disabled', false);
            break;
        case 'square':
            myOperation = 'square';
            $('#num1').attr("placeholder", "Number");
            $('#num2').attr("placeholder", "");
            $('#num2').prop('disabled', true);
            break;
        case 'power':
            myOperation = 'power';
            $('#num1').attr("placeholder", "");
            $('#num2').attr("placeholder", "Power of n ");
            $('#num2').prop('disabled', false);
            break;
        case 'percentage':
            myOperation = 'percentage';
            $('#num1').attr("placeholder", "Number");
            $('#num2').attr("placeholder", "Percent %");
            $('#num2').prop('disabled', false);
            break;
        default:
            break;
    }
});



function executeAction() {
    switch (myOperation) {
        case 'plus':
            $('#zobiResult').val(zobiAdd($('#num1').val(), $('#num2').val()))
            break;
        case 'minus':
            $('#zobiResult').val(zobiSubstract($('#num1').val(), $('#num2').val()))
            break;
        case 'multi':
            $('#zobiResult').val(zobiMultiple($('#num1').val(), $('#num2').val()))
            break;
        case 'devide':
            $('#zobiResult').val(zobiDivide($('#num1').val(), $('#num2').val()))
            break;
        case 'square':
            $('#zobiResult').val(zobiSquares($('#num1').val()));
            break;
        case 'power':
            $('#zobiResult').val(zobiPowers($('#num1').val(), $('#num2').val()))
            break;
        case 'percentage':
            $('#zobiResult').val(zobiPercentage($('#num1').val(), $('#num2').val()))
            break;
        default:
            break;
    }
}




function zobiPercentage(number1, percent) {
    if (isNaN(number1) || isNaN(percent)) {
        alert("Please enter a valid decimal number");
    } else {
        var result;
        result = (number1 * percent) / 100;
        return result;
    }
}



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

function zobiSquares(number1) {
    if (isNaN(number1)) {
        alert("enter a valid number");
    } else {
        return Math.sqrt(parseFloat(number1));
    }
}

function zobiPowers(number1, numtoPower) {
    if (isNaN(number1) || isNaN(numtoPower)) {
        alert("enter a valid number");
    } else {
        return Math.pow(parseFloat(number1), parseFloat(numtoPower));
    }
}

$('#btnClear').click(function () {
    $('#zobiResult').val('');
    $('#num1').val('');
    $('#num2').val('');
});