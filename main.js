const firstNum = document.getElementById('firstNumber');
const secondNum = document.getElementById('secondNumber');
const result = document.getElementById('result');
let additionResult;
let subResult;
let multiplyResult;

function addTwoNumbers() {
    result.innerHTML = ""
    additionResult = parseInt(firstNum.value) + parseInt(secondNum.value);
    console.log(additionResult);
    result.innerHTML = "Sum of Two Numbers: " + additionResult;
}

function subtractTwoNumbers() {
    result.innerHTML = ""
    subResult = parseInt(firstNum.value) - parseInt(secondNum.value);
    console.log(subResult);
    result.innerHTML = "Difference of Two Numbers: " + subResult;
}


function multiplyTwoNumbers() {
    result.innerHTML = ""
    multiplyResult = parseInt(firstNum.value) * parseInt(secondNum.value);
    console.log(multiplyResult);
    result.innerHTML = "Multiply of Two Numbers: " + multiplyResult;
}

function divideTwoNumbers() {
    result.innerHTML = ""
    divideResult = parseInt(firstNum.value) / parseInt(secondNum.value);
    console.log(divideResult);
    result.innerHTML = "Quotient of divide operation: " + divideResult;
}