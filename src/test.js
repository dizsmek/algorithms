const chalk = require('chalk');

const test = (dataTypeCheck, algorithm, dataset, index, sortType="unknown") => {
    if (!dataTypeCheck(dataset)) {
        console.log(chalk.yellow(`${JSON.stringify(dataset)} at #${index} is an invalid set of data for ${sortType}`));
        return;
    }

    const result = dataset.sort((a,b) => a-b)

    // two identical arrays are not equal, so this is how we can evaluate their equality
    const passed = JSON.stringify(algorithm(dataset)) === JSON.stringify(dataset.sort((a,b) => a-b));


    // passed test log
    if (passed) {
        console.log(chalk.green(` ✔ #${index} PASSED with ${sortType}`));
        return;
    }

    // failed test log
    console.log(chalk.red(
            `#${index} FAILED\n` +
            `result:    ${JSON.stringify(algorithm(dataset))}\n` +
            `expected:  ${JSON.stringify(result)}\n` +
            `sorted with ${sortType}\n`
        )
    );
}

exports.test = test;
