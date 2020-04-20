// call tests here
import { test } from './sorting/test.js';
import { bubbleSort } from './sorting/bubbleSort.js';

test(
    [34,36.1,7,9,14],
    bubbleSort.normal
);