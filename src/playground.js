// tests
import { test } from './test.js';

// data structures
import { arrayOfNums } from './data-structures/arrays/numbers/arraysOfNums';

// algorithms
import { bubbleSort } from './sorting/bubbleSort.js';


arrayOfNums(5, 10, 100).forEach(arr => {
    test(
        bubbleSort.normal(arr),
        arr.sort((a,b) => a-b),
        "bubble sort"
    );
});