function zobiCalculate(number1, number2, operation) {
    switch (operation) {
        case "plus":
            return parseFloat(number1) + parseFloat(number2);
            break;
        case "minus":
            return parseFloat(number1) - parseFloat(number2);
            break;
        case "multi":
            return parseFloat(number1) * parseFloat(number2);
            break;
        case "devide":
            return parseFloat(number1) / parseFloat(number2);
            break;
        case "square":
            return Math.sqrt(parseFloat(number1));
            break;
        case "power":
            return Math.pow(parseFloat(number1), parseFloat(number2));
            break;
        case "percentage":
            return (number1 * number2) / 100;
            break;
        default:
            break;
    }
}


function executeAction() {
    if (isNaN($('#num1').val()) || isNaN($('#num2').val())) {
        M.toast({
            html: 'Please enter a valid number!'
        });
    } else {
        $('#zobiResult').val(zobiCalculate($('#num1').val(), $('#num2').val(), $('#ops').val()));

    }
}




$(document).ready(function () {
    $("select").formSelect();
});

$("#ops").change(function () {
    switch ($(this).val()) {
        case "plus":
            $("#num1").attr("placeholder", "First Number");
            $("#num2").attr("placeholder", "Second Number");
            $("#num2").prop("disabled", false);
            break;
        case "minus":
            $("#num1").attr("placeholder", "First Number");
            $("#num2").attr("placeholder", "Second Number");
            $("#num2").prop("disabled", false);
            break;
        case "multi":
            $("#num1").attr("placeholder", "First Number");
            $("#num2").attr("placeholder", "Second Number");
            $("#num2").prop("disabled", false);
            break;
        case "devide":
            $("#num1").attr("placeholder", "Dividend");
            $("#num2").attr("placeholder", "Divisor");
            $("#num2").prop("disabled", false);
            break;
        case "square":
            $("#num1").attr("placeholder", "Number");
            $("#num2").attr("placeholder", "");
            $("#num2").prop("disabled", true);
            break;
        case "power":
            $("#num1").attr("placeholder", "");
            $("#num2").attr("placeholder", "Power of n ");
            $("#num2").prop("disabled", false);
            break;
        case "percentage":
            $("#num1").attr("placeholder", "Number");
            $("#num2").attr("placeholder", "Percent %");
            $("#num2").prop("disabled", false);
            break;
        default:
            break;
    }
});





$("#btnClear").click(function () {
    $("#zobiResult").val("");
    $("#num1").val("");
    $("#num2").val("");
});