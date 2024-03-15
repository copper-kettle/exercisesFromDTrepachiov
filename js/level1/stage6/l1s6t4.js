import arr from "../../random_array.js";
function l1S6T4() {
    let array = arr(-20, 20, 10);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] < 10) {
            sum += array[i];
        }
    }
    alert("Array " + array + "  result " + sum);
}
import btn from "../../for_button.js";
btn(l1s6t4, l1S6T4);