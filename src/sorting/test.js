export const test = (algorithm, result, sortType="unknown") => {
    if (algorithm === result) {
        console.log("\x1b[32m",
            `
                ✔️ PASSED
                result: ${algorithm} ===> expected: ${result}
                sorted with ${sortType}
                ${algorithm == result}
            `
        );
        console.log("\x1b[0m")
        return;
    }

    console.log("\x1b[31m",
        `
            ❌ FAILED            
            result: ${algorithm} ===> expected: ${result}
            sorted with ${sortType}
            ${algorithm == result}
        `
    );
    console.log("\x1b[0m")
}