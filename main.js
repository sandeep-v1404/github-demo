const firstNum = document.getElementById('firstNumber');
const secondNum = document.getElementById('secondNumber');
const result = document.getElementById('result');
let additionResult;
let subResult;
let multiplyResult;
let greaterResult;

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

function greaterOfTwoNumbers() {
    result.innerHTML = ""
    if (parseInt(firstNum.value) > parseInt(secondNum.value)) {
        greaterResult = firstNum.value;
    }
    else if (parseInt(secondNum.value) > parseInt(firstNum.value)) {
        greaterResult = secondNum.value;
    }
    else if (parseInt(secondNum.value) == parseInt(firstNum.value)){
        result.innerHTML = "Both are Equal"
        return;
    }
    console.log(greaterResult);
    result.innerHTML = "Greater of Two Numbers: " + greaterResult;
}