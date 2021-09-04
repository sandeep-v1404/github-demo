const firstNum = document.getElementById('firstNumber');
const secondNum = document.getElementById('secondNumber');
let result = document.getElementById('result');
let sum;

function addToNumbers() {
    sum = parseInt(firstNum.value) + parseInt(secondNum.value);
    console.log(sum);
    result.innerHTML = "Sum of Two Numbers: " + sum;
}
