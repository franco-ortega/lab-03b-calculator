import { addNumbers } from './mathUtils.js';
const addButton1 = document.getElementById('addButton');
addButton1.addEventListener('click', addNumbers);

import { subNumbers } from './mathUtils.js';
const subButton1 = document.getElementById('subButton');
subButton1.addEventListener('click', subNumbers);

import { multiplyNumbers } from './mathUtils.js';
const multiplyButton1 = document.getElementById('multiplyButton');
multiplyButton1.addEventListener('click', multiplyNumbers);

import { divideNumbers } from './mathUtils.js';
const divideButton1 = document.getElementById('divideButton');
divideButton1.addEventListener('click', divideNumbers);