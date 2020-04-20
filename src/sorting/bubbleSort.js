/*
    Worst-case complexity: n^2
    Average complexity: n^2
    Best complexity: n
    Class: Comparison sort
    Link: https://en.wikipedia.org/wiki/Bubble_sort
*/

export const bubbleSort = {
    normal: (array) => {
        let arr = array;
        let sorted;
        do {
            sorted = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i+1]) {
                    sorted = false;

                    // swap the two items
                    let t = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = t;
                }
            }
        } while (!sorted);

        return arr;
    },

    recursive: () => { return; }
}