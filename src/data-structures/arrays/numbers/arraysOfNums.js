export const arrayOfNums = (arrayCount, itemCount, range) => {
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