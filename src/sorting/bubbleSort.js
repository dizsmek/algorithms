/*
    Worst-case complexity: n^2
    Average complexity: n^2
    Best complexity: n
    Class: Comparison sort
    Link: https://en.wikipedia.org/wiki/Bubble_sort
*/

export const bubbleSort = {
    normal: (arr) => {
        // I'm just cheating for now
        return arr.sort((a,b) => a-b);
    },

    recursive: () => { return; }
}