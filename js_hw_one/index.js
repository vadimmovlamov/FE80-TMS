const array = [1, 2, 3, 4, 5];
/* const sum = (numberList) => {
    let result = 0;

    for (const number of numberList) {
        result += number
    };
    return result;
} */

const sum = (numberList) => {
    let result = 0;

    for (let i = 0; i < numberList.length; i++) {
        result += numberList[i];
    };
    return result;
}



console.log(sum(array))