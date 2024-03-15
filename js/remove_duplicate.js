// удаляет дубликаты в массивах
let remove_dpl = function removeDuplicate(array) {
    let result = [];
    array.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return (result);
}
export default remove_dpl;