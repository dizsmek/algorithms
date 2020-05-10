export const generateArrayOfNums = (arrayCount, itemCount, range) => {
    let arr = [];
    for (let i = 0; i < arrayCount; i++) {
        let tempArr = [];
        for (let j = 0; j < itemCount; j++) {
            tempArr.push(Math.floor(Math.random()*range+1));
        }
        arr.push(tempArr);
    }

    return arr;
}

export const checkArrayOfNums = (dataSet) => {
    if (!Array.isArray(dataSet)) {
        return false;
    }

    for (let i = 0; i < dataSet.length; i++) {
        if (typeof dataSet[i] !== 'number' || Number.isNaN(dataSet[i]) || !Number.isFinite(dataSet[i])) {
            return false;
        }

        return true;
    }
}