import { addNumbers, subNumbers, multiplyNumbers, divideNumbers } from '../mathUtils.js';

// BUTTONS
const addButton1 = document.getElementById('addButton');
const subButton1 = document.getElementById('subButton');
const multiplyButton1 = document.getElementById('multiplyButton');
const divideButton1 = document.getElementById('divideButton');


// import functions and grab DOM elements (ADD)
    const addNum1 = document.getElementById('addInput1');
    const addNum2 = document.getElementById('addInput2');
    const sum1 = document.getElementById('sum')


addButton1.addEventListener('click', () => {
    const value1 = Number(addNum1.value);
    const value2 = Number(addNum2.value);
    
    const addSum =  addNumbers(value1, value2);
    sum1.textContent = addSum;
    addNum1.value = '';
    addNum2.value = '';

})


// import functions and grab DOM elements (SUBTRACT)
    const subNum1 = document.getElementById('subInput1')
    const subNum2 = document.getElementById('subInput2')
    const sub1 = document.getElementById('sub')
subButton1.addEventListener('click', () => {
    const value1 = Number(subNum1.value);
    const value2 = Number(subNum2.value);
    
    const subSum =  subNumbers(value1, value2);
     sub1.textContent = subSum;
    subNum1.value = '';
    subNum2.value = '';
})

// import functions and grab DOM elements (MULTIPY)
    const multiplyNum1 = document.getElementById('multiplyInput1')
    const multiplyNum2 = document.getElementById('multiplyInput2')
    const multiply1 = document.getElementById('multiply')
multiplyButton1.addEventListener('click', () => {
    const value1 = Number(multiplyNum1.value);
    const value2 = Number(multiplyNum2.value);
    
    const multiplyNum =  multiplyNumbers(value1, value2);
    multiply1.textContent = multiplyNum;
    multiplyNum1.value = '';
    multiplyNum2.value = '';
})

// import functions and grab DOM elements (DIVIDE)
    const divideNum1 = document.getElementById('divideInput1')
    const divideNum2 = document.getElementById('divideInput2')
    const divide1 = document.getElementById('divide')
divideButton1.addEventListener('click', () => {
    const divideNum = Number(divideNum1.value) / Number(divideNum2.value);
    divide1.textContent = divideNum;
    divideNum1.value = '';
    divideNum2.value = '';
})