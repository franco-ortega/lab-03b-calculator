// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { addNumbers, subNumbers, multiplyNumbers, divideNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1  = 7;
    const argument2 = 3;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1  = -7;
    const argument2 = -3;
    const expected = -4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1  = 10;
    const argument2 = 3;
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1  = 10;
    const argument2 = 2;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideNumbers(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});
