// import functions and grab DOM elements ADD BUTTON
const addNum1 = document.getElementById('addInput1')
const addNum2 = document.getElementById('addInput2')
const addButton1 = document.getElementById('addButton')
const sum1 = document.getElementById('sum')
// initialize state

// set event listeners to update state and DOM
addButton1.addEventListener('click', () => {
    const addSum = Number(addNum1.value) + Number(addNum2.value);
    sum1.textContent = addSum;
    addNum1.value = '';
    addNum2.value = '';
})

// import functions and grab DOM elements SUBTRACT BUTTON
const subNum1 = document.getElementById('subInput1')
const subNum2 = document.getElementById('subInput2')
const subButton1 = document.getElementById('subButton')
const sub1 = document.getElementById('sub')
// initialize state

// set event listeners to update state and DOM

subButton1.addEventListener('click', () => {
    const subSum = Number(subNum1.value) - Number(subNum2.value);
    sub1.textContent = subSum;
    subNum1.value = '';
    subNum2.value = '';
})

// import functions and grab DOM elements MULTIPY BUTTON
const multiplyNum1 = document.getElementById('multiplyInput1')
const multiplyNum2 = document.getElementById('multiplyInput2')
const multiplyButton1 = document.getElementById('multiplyButton')
const multiply1 = document.getElementById('multiply')

// initialize state

// set event listeners to update state and DOM

multiplyButton1.addEventListener('click', () => {
    const multiplyNum = Number(multiplyNum1.value) * Number(multiplyNum2.value);
    multiply1.textContent = multiplyNum;
    multiplyNum1.value = '';
    multiplyNum2.value = '';
})

// import functions and grab DOM elements DIVIDE BUTTON
const divideNum1 = document.getElementById('divideInput1')
const divideNum2 = document.getElementById('divideInput2')
const divideButton1 = document.getElementById('divideButton')
const divide1 = document.getElementById('divide')

// initialize state

// set event listeners to update state and DOM

divideButton1.addEventListener('click', () => {
    const divideNum = Number(divideNum1.value) / Number(divideNum2.value);
    divide1.textContent = divideNum;
    divideNum1.value = '';
    divideNum2.value = '';
})