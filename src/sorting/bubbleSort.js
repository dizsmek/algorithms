/*
    Worst-case complexity: n^2
    Average complexity: n^2
    Best complexity: n
    Class: Comparison sort
    Link: https://en.wikipedia.org/wiki/Bubble_sort
*/

const { isValidArrayOfNums } = require('../data-structures/arrays/numbers/arraysOfNums');

const bubbleSort = {
    normal: (arr) => {
        let sorted = arr;
        let isSorted;
        do {
            isSorted = true;
            for (let i = 0; i < arr.length; i++) {
                if (sorted[i] > sorted[i+1]) {
                    isSorted = false;

                    let t = sorted[i];
                    sorted[i] = sorted[i+1];
                    sorted[i+1] = t;
                }
            }
        } while (!isSorted);

        return arr;
    },

    recursive: () => { return; }
}

exports.bubbleSort = bubbleSort.normal;
exports.recursiveBubbleSort = bubbleSort.recursive;
