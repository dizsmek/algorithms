// tests
const { test } = require('./test');

// data structures
const { generateArraysOfNums, isValidArrayOfNums } = require('./data-structures/arrays/numbers/arraysOfNums');

// algorithms
const { bubbleSort } = require('./sorting/bubbleSort');


const randomDataSet = generateArraysOfNums(5, 10, 100);
const trickyDataSet = [
    [],                         // should work
    [[]],                       // shouldn't work
    [{}],                       // shouldn't work
    [''],                       // shouldn't work
    [null, 1, 2, 3],            // shouldn't work
    [-Infinity, 0, Infinity]    // shouldn't work
    ['2', '3', 1, '15'],        // shouldn't work
    [ () => [3, 4, 1,] ],       // shouldn't work
    [4, 2, 6, 1]                // should work
];

console.log('--- With random dataset ---');
randomDataSet.forEach((arr, i) => {
    test(
        isValidArrayOfNums,       // type checking callback
        bubbleSort,             // algorithm
        arr,                    // dataset
        i,                      // index
        "bubble sort"           // sort type
    );
});

console.log('--- With tricky dataset ---');
trickyDataSet.forEach((arr, i) => {
    test(
        isValidArrayOfNums,       // type checking callback
        bubbleSort,             // algorithm
        arr,                    // dataset
        i,                      // index
        "bubble sort"           // sort type
    );
});