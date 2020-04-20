// call tests here
import { test } from './sorting/test.js';
import { bubbleSort } from './sorting/bubbleSort.js';

test(
    bubbleSort.normal([34, 36.1, 7, 9, 14]),
    [7, 9, 14, 34, 36.1],
    "bubble sort"
);