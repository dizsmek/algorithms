export const test = (algorithm, result, sortType="unknown") => {
    // two identical arrays are not equal, so this is how we can evaluate their equality
    const passed = () => {
        let temp = true;

        for (let i = 0; i < result.length; i++) {
            if (algorithm[i] !== result[i]) { temp = false }
        }

        return temp;
    }

    if (passed()) {
        console.log(
            "\x1b[32m", // green color
            `
                ✔️ PASSED
                result: ${algorithm} ===> expected: ${result}
                sorted with ${sortType}
            `
        );
        console.log("\x1b[0m")
        return;
    }

    console.log(
        "\x1b[31m", // red color
        `
            ❌ FAILED            
            result: ${algorithm} ===> expected: ${result}
            sorted with ${sortType}
            ${algorithm == result}
        `
    );

    console.log("\x1b[0m"); // reset color
}