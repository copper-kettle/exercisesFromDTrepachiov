// рандомный массив min-max диапазон, lngt - длина массива
let arr = function createArray(min, max, lngt) {
    let array = [];
    for (let i = 0; i < lngt; i++) {
        let int  = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(int);
    }
     return array;
}

export default arr;
