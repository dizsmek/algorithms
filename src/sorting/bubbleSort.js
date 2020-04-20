/*
    Worst-case complexity: n^2
    Average complexity: n^2
    Best complexity: n
    Class: Comparison sort
    Link: https://en.wikipedia.org/wiki/Bubble_sort
*/

export const bubbleSort = {
    normal: (arr) => {
        let sorted = arr;
        let isSorted;
        do {
            isSorted = true;
            for (let i = 0; i < arr.length; i++) {
                if (sorted[i] > sorted[i+1]) {
                    isSorted = false;

                    // swap the two items
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