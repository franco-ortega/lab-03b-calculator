
const addNum1 = document.getElementById('addInput1');
const addNum2 = document.getElementById('addInput2');
const sum1 = document.getElementById('sum');

export function addNumbers(addNumber1, addNumber2) {
    const addSum = Number(addNum1.value) + Number(addNum2.value);
    sum1.textContent = addSum;
    addNum1.value = '';
    addNum2.value = '';
}

const subNum1 = document.getElementById('subInput1')
const subNum2 = document.getElementById('subInput2')
const sub1 = document.getElementById('sub')

export function subNumbers(subNumber1, subNumber2) {
    const subSum = Number(subNum1.value) - Number(subNum2.value);
    sub1.textContent = subSum;
    subNum1.value = '';
    subNum2.value = '';
}

const multiplyNum1 = document.getElementById('multiplyInput1')
const multiplyNum2 = document.getElementById('multiplyInput2')
const multiply1 = document.getElementById('multiply')

export function multiplyNumbers(multiplyNumber1, multiplyNumber2) {
    const multiplyNum = Number(multiplyNum1.value) * Number(multiplyNum2.value);
    multiply1.textContent = multiplyNum;
    multiplyNum1.value = '';
    multiplyNum2.value = '';
}

const divideNum1 = document.getElementById('divideInput1')
const divideNum2 = document.getElementById('divideInput2')
const divide1 = document.getElementById('divide')

export function divideNumbers(divideNumber1, divideNumber2) {
    const divideNum = Number(divideNum1.value) / Number(divideNum2.value);
    divide1.textContent = divideNum;
    divideNum1.value = '';
    divideNum2.value = '';
}