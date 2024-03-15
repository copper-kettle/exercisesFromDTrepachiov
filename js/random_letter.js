let sourse = "Lorajem ipsum dolor sit amet, \
consectetur adipisicing elit. Porro temporibus nobis\
 accusantium deserunt ipsam ab maxime tenetur quisquam";

let arr_letter = function createLetterArray(sourse, arr_lenght, arg) {
    // формирование массива array длины arr_lenght из строки sourse
    let array = sourse.split(" ", arr_lenght);
    
    // =======================================================

    // формирование массива ordinal оригинальных целых чисел длины arr_lenght
    let ordinal = [];
    for (let i = 0; i < arr_lenght; i++) {
        ordinal.push(getRandomInt(0, arr_lenght - 1));
    }
    let ord = removeDuplicate(ordinal);
    // ===========================================================

    // добавление посфиксов к случайным элементам массива array==========
    if (arg == "pst") {
        for (let i = 0, j = 0; i < array.length, j < ord.length; i++, j++) {
            array[ord[j]] = array[ord[j]] + ".html";
    
        }
    }
    if (arg == "prf") {
        for (let i = 0, j = 0; i < array.length, j < ord.length; i++, j++) {
            array[ord[j]] = "http//" +  array[ord[j]];
            
        }
    }
    
    // =====================================================================
    return array;
    
    
}
// случайное целое число============
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// удаление дубликатов из массива++++++++++
function removeDuplicate(array) {
    let result = [];
    array.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return (result);
}

 export default arr_letter;
