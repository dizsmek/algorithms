export const test = (dataTypeCheck, algorithm, result, sortType="unknown", index) => {
    // two identical arrays are not equal, so this is how we can evaluate their equality
    const passed = () => {
        let temp = true;

        for (let i = 0; i < result.length; i++) {
            if (algorithm[i] !== result[i]) { temp = false }
        }

        return temp;
    }

    if (!dataTypeCheck) {
        console.log(`#${index} is an invalid set of data for ${sortType}`);
    } else {
        if (passed()) {
            console.log(
                "\x1b[32m", // green color
                ` ✔ #${index} PASSED with ${sortType} sorting`
            );
            console.log("\x1b[0m")
            return;
        }
    
        console.log(
            "\x1b[31m", // red color
            `
                ❌ #${index} FAILED
                result: ${algorithm} ===> expected: ${result}
                sorted with ${sortType}
            `
        );
    
        console.log("\x1b[0m"); // reset color
    }
}
