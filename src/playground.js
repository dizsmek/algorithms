// tests
import { test } from './test.js';

// data structures
import { generateArrayOfNums, checkArrayOfNums } from './data-structures/arrays/numbers/arraysOfNums';

// algorithms
import { bubbleSort } from './sorting/bubbleSort.js';


const testData = [];

generateArrayOfNums(5, 10, 100).forEach((arr, i) => {
    test(
        checkArrayOfNums(arr),  // type checking callback
        bubbleSort.normal(arr), // algorithm
        arr.sort((a,b) => a-b), // expected result
        "bubble sort",          // sort type
        i                       // index
    );
});