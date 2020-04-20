export const test = (arr, callback, sortType="unknown", complexity="unknown") => {
    if (arr.sort() === callback(arr)) {
        console.log("\x1b[32m",
            `
                original: ${arr}
                sorted: ${callback(arr)}
                sorted with ${sortType}
                complexity: ${complexity}
            `
        );
        console.log("\x1b[0m")
        return;
    }

    console.log("\x1b[31m",
        `
            something isn't right...
            original: ${arr}
            sorted: ${arr.sort()}
            callback result: ${callback(arr)}
            sorted with ${sortType}
            complexity: ${complexity}
        `
    );
    console.log("\x1b[0m")
}